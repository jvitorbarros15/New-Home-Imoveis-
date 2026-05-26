// Ingestion script — syncs property data and PDFs to Supabase documents table
// Run: node scripts/ingest.mjs
// Requires: SUPABASE_URL, SUPABASE_SERVICE_KEY, OPENAI_API_KEY in scripts/.env

import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import { readdir, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Fetch all active properties and upsert them as text documents
async function ingestProperties() {
  const { data: props, error } = await supabase
    .from("properties")
    .select("*")
    .eq("status", "active");

  if (error) { console.error("Error fetching properties:", error); return; }
  if (!props?.length) { console.log("No active properties found."); return; }

  // Remove stale property docs
  await supabase.from("documents").delete().contains("metadata", { type: "property" });

  const docs = props.map((p) => ({
    content: [
      `Código: ${p.code}`,
      `Título: ${p.title}`,
      `Tipo: ${p.type}`,
      `Região: ${p.region}`,
      p.address ? `Endereço: ${p.address}` : null,
      `Preço: R$ ${(p.price_brl / 100).toLocaleString("pt-BR")}`,
      p.condominio_brl ? `Condomínio: R$ ${(p.condominio_brl / 100).toLocaleString("pt-BR")}/mês` : null,
      p.iptu_brl ? `IPTU: R$ ${(p.iptu_brl / 100).toLocaleString("pt-BR")}/ano` : null,
      `Área: ${p.area_m2} m²`,
      `Quartos: ${p.bedrooms}${p.suites ? ` (${p.suites} suítes)` : ""}`,
      `Banheiros: ${p.bathrooms} | Vagas: ${p.parking}`,
      p.pet_friendly ? "Pet friendly: sim" : null,
      p.description ? `Descrição: ${p.description}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
    metadata: { source: "properties", type: "property", code: p.code },
  }));

  const { error: insertErr } = await supabase.from("documents").insert(docs);
  if (insertErr) console.error("Insert error:", insertErr);
  else console.log(`Ingested ${docs.length} properties.`);
}

// Ingest plain-text files from scripts/docs/ (add .txt brochures, guides here)
async function ingestDocs() {
  const docsDir = path.join(__dirname, "docs");
  let files;
  try { files = await readdir(docsDir); } catch { return; }

  const textFiles = files.filter((f) => f.endsWith(".txt") || f.endsWith(".md"));
  for (const file of textFiles) {
    const content = await readFile(path.join(docsDir, file), "utf-8");
    await supabase.from("documents").delete().contains("metadata", { source: file });
    await supabase.from("documents").insert({
      content: content.slice(0, 8000), // max chunk size
      metadata: { source: file, type: "document" },
    });
    console.log(`Ingested: ${file}`);
  }
}

await ingestProperties();
await ingestDocs();
console.log("Ingestion complete.");
