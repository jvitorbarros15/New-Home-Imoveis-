// Admin — leads table

export function LeadsView() {
  const [leads, setLeads]     = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError]     = React.useState("");

  async function load() {
    setLoading(true); setError("");
    const { data, error: err } = await window.sb
      .from("leads")
      .select("id,created_at,name,whatsapp,email,interest,source")
      .order("created_at", { ascending: false });
    if (err) { setError("Erro ao carregar leads. Tente novamente."); setLoading(false); return; }
    setLeads(data || []);
    setLoading(false);
  }

  React.useEffect(() => { load(); }, []);

  async function remove(id, name) {
    if (!confirm(`Excluir o lead de ${name}? Esta ação não pode ser desfeita.`)) return;
    const { error: err } = await window.sb.from("leads").delete().eq("id", id);
    if (err) { alert("Não foi possível excluir. Tente novamente."); return; }
    setLeads(l => l.filter(x => x.id !== id));
  }

  function fmtDate(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })
      + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  function sourceBadge(s) {
    const map = { brasil: ["adm-badge-active", "Brasil"], usa: ["adm-badge-rented", "USA"] };
    const [cls, label] = map[s] || ["", s || "—"];
    return <span className={`adm-badge ${cls}`}>{label}</span>;
  }

  return (
    <>
      <div className="adm-header">
        <div>
          <h1 className="adm-title">Leads de <em>contato</em></h1>
          <p className="adm-subtitle">
            {loading ? "Carregando..." : `${leads.length} lead${leads.length !== 1 ? "s" : ""} recebido${leads.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        <button className="adm-btn adm-btn-ghost adm-btn-sm" onClick={load} aria-label="Recarregar leads">
          Atualizar
        </button>
      </div>

      {error && <div className="adm-error-banner" role="alert">{error}</div>}

      {loading && (
        <div className="adm-loading-inline" role="status" aria-label="Carregando leads">
          <div className="adm-spinner" />
        </div>
      )}

      {!loading && !error && leads.length === 0 && (
        <div className="adm-empty">
          <p>Nenhum lead recebido ainda.</p>
        </div>
      )}

      {!loading && leads.length > 0 && (
        <div className="adm-table-wrap">
          <table className="adm-table" aria-label="Lista de leads">
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>WhatsApp</th>
                <th>E-mail</th>
                <th>O que procura</th>
                <th>Origem</th>
                <th aria-label="Ações" />
              </tr>
            </thead>
            <tbody>
              {leads.map(l => (
                <tr key={l.id}>
                  <td className="adm-td-muted adm-td-nowrap">{fmtDate(l.created_at)}</td>
                  <td className="adm-td-strong">{l.name}</td>
                  <td>
                    <a
                      href={`https://wa.me/${l.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="adm-link"
                      aria-label={`WhatsApp de ${l.name}`}
                    >
                      {l.whatsapp}
                    </a>
                  </td>
                  <td>
                    {l.email
                      ? <a href={`mailto:${l.email}`} className="adm-link">{l.email}</a>
                      : <span className="adm-td-muted">—</span>}
                  </td>
                  <td>{l.interest || <span className="adm-td-muted">—</span>}</td>
                  <td>{sourceBadge(l.source)}</td>
                  <td>
                    <button
                      className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-danger"
                      onClick={() => remove(l.id, l.name)}
                      aria-label={`Excluir lead de ${l.name}`}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
