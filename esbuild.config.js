const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const watch = process.argv.includes("--watch");

// Ensure dist directory exists
const distDir = path.join(__dirname, "v1", "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Helper to minify CSS
function minifyCSS(filePath) {
  let css = fs.readFileSync(filePath, "utf-8");
  // Remove comments
  css = css.replace(/\/\*[\s\S]*?\*\//g, "");
  // Remove excess whitespace
  css = css.replace(/\s+/g, " ").replace(/\s*([{};:,])\s*/g, "$1");
  return css;
}

// Homepage bundle
const homepageConfig = {
  entryPoints: [path.join(__dirname, "v1", "app.jsx")],
  bundle: true,
  minify: true,
  outfile: path.join(distDir, "index.js"),
  external: ["react", "react-dom"],
  target: "es2020",
};
if (watch) {
  homepageConfig.watch = { onRebuild(err) { err ? console.error("homepage build failed:", err) : console.log("homepage rebuilt"); } };
}

// Property detail bundle
const imovelConfig = {
  entryPoints: [path.join(__dirname, "v1", "imovel-app.jsx")],
  bundle: true,
  minify: true,
  outfile: path.join(distDir, "imovel.js"),
  external: ["react", "react-dom"],
  target: "es2020",
};
if (watch) {
  imovelConfig.watch = { onRebuild(err) { err ? console.error("imovel build failed:", err) : console.log("imovel rebuilt"); } };
}

// Admin bundle
const adminConfig = {
  entryPoints: [path.join(__dirname, "v1", "admin-app.jsx")],
  bundle: true,
  minify: true,
  outfile: path.join(distDir, "admin.js"),
  external: ["react", "react-dom"],
  target: "es2020",
};
if (watch) {
  adminConfig.watch = { onRebuild(err) { err ? console.error("admin build failed:", err) : console.log("admin rebuilt"); } };
}

// Build all
Promise.all([
  esbuild.build(homepageConfig),
  esbuild.build(imovelConfig),
  esbuild.build(adminConfig),
]).then(() => {
  // Minify and copy CSS files
  const cssFiles = [
    { src: "v1/styles.css", dst: "v1/dist/styles.css" },
    { src: "v1/imovel.css", dst: "v1/dist/imovel.css" },
    { src: "v1/admin.css", dst: "v1/dist/admin.css" },
  ];

  cssFiles.forEach(({ src, dst }) => {
    const minified = minifyCSS(path.join(__dirname, src));
    fs.writeFileSync(path.join(__dirname, dst), minified);
  });

  console.log("✅ Build complete. Files in v1/dist/");
  if (!watch) process.exit(0);
}).catch(err => {
  console.error("Build failed:", err);
  process.exit(1);
});
