// New Home USA — landing page sections

export function USAHero() {
  return (
    <section className="usa-hero">
      <div className="usa-hero-bg" />
      <div className="usa-hero-overlay" />
      <div className="usa-hero-inner">
        <div className="usa-hero-eyebrow">
          <span className="usa-hero-rule" />
          <span>Expansão Internacional</span>
          <span className="usa-hero-rule" />
        </div>
        <h1 className="usa-hero-wordmark">
          New Home <em>USA</em>
        </h1>
        <p className="usa-hero-tagline">
          Imóveis de alto padrão nos Estados Unidos —<br />
          curadoria exclusiva para o investidor brasileiro
        </p>
        <nav className="usa-hero-cities" aria-label="Mercados">
          <span>Miami</span>
          <span className="usa-hero-dot" aria-hidden="true" />
          <span>Orlando</span>
          <span className="usa-hero-dot" aria-hidden="true" />
          <span>Nova York</span>
          <span className="usa-hero-dot" aria-hidden="true" />
          <span>Los Angeles</span>
        </nav>
        <div className="usa-hero-actions">
          <a href="#contato-usa" className="usa-hero-cta">
            Fale com um consultor
          </a>
          <a href="#mercados" className="usa-hero-ghost">
            Nossos mercados
          </a>
        </div>
      </div>
      <div className="usa-hero-scroll" aria-hidden="true">
        <div className="usa-hero-scroll-line" />
      </div>
    </section>
  );
}

const USA_MARKETS = [
  {
    city: "Miami",
    state: "Florida",
    desc: "Condos de frente para o mar e penthouses em Brickell, Miami Beach e Coconut Grove.",
    tag: "Mais procurado",
    img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=85&auto=format&fit=crop",
  },
  {
    city: "Orlando",
    state: "Florida",
    desc: "Casas de veraneio, propriedades para investimento e resorts próximos às principais atrações.",
    tag: "Alto retorno",
    img: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=1200&q=85&auto=format&fit=crop",
  },
  {
    city: "Nova York",
    state: "New York",
    desc: "Apartamentos em Manhattan e Brooklyn — endereços de prestígio para o investidor global.",
    tag: "Prestígio",
    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=85&auto=format&fit=crop",
  },
];

export function USAMarkets() {
  return (
    <section className="usa-markets" id="mercados">
      <div className="usa-section-head reveal">
        <span className="eyebrow">Nossos mercados</span>
        <h2>Onde atuamos <em>nos EUA</em></h2>
        <p className="usa-section-sub">
          Três mercados selecionados por liquidez, demanda e potencial de valorização para o investidor brasileiro.
        </p>
      </div>
      <div className="usa-markets-grid">
        {USA_MARKETS.map((m, i) => (
          <article key={m.city} className="usa-market-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="usa-market-img" style={{ backgroundImage: `url("${m.img}")` }}>
              <span className="usa-market-tag">{m.tag}</span>
            </div>
            <div className="usa-market-body">
              <div className="usa-market-meta">
                <span className="usa-market-state">{m.state}</span>
              </div>
              <h3 className="usa-market-city">{m.city}</h3>
              <p>{m.desc}</p>
              <a href="#contato-usa" className="usa-market-link" aria-label={`Consultar imóveis em ${m.city}`}>
                Consultar imóveis
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const REASONS = [
  { n: "01", title: "Expertise bilíngue",    body: "Equipe fluente em português e inglês, com mais de 10 anos no mercado americano." },
  { n: "02", title: "Curadoria exclusiva",   body: "Seleção rigorosa de propriedades nas melhores regiões, com acesso antecipado a lançamentos." },
  { n: "03", title: "Suporte integral",      body: "Do processo de compra ao financiamento americano (ITIN), cada etapa tem um especialista." },
  { n: "04", title: "Rede consolidada",      body: "Parceiros em advocacia imobiliária, contabilidade e gestão de patrimônio nos EUA." },
];

export function USAWhy() {
  return (
    <section className="usa-why">
      <div className="usa-why-inner">
        <div className="usa-why-lead reveal">
          <span className="eyebrow">Por que New Home USA</span>
          <h2>A ponte entre o <em>Brasil</em><br />e os Estados Unidos</h2>
        </div>
        <div className="usa-why-grid">
          {REASONS.map((r, i) => (
            <div key={r.n} className="usa-why-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="usa-why-num">{r.n}</div>
              <div className="usa-why-rule" />
              <h4>{r.title}</h4>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function USAStats() {
  const stats = [
    { value: "10+", label: "Anos de mercado" },
    { value: "3",   label: "Mercados nos EUA" },
    { value: "500+", label: "Clientes atendidos" },
    { value: "U$2B+", label: "Em transações" },
  ];
  return (
    <div className="usa-stats reveal">
      {stats.map((s, i) => (
        <div key={i} className="usa-stat">
          <div className="usa-stat-value">{s.value}</div>
          <div className="usa-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function USACTA() {
  const [nome, setNome]           = React.useState("");
  const [whatsapp, setWhatsapp]   = React.useState("");
  const [email, setEmail]         = React.useState("");
  const [interesse, setInteresse] = React.useState("");
  const [estado, setEstado]       = React.useState("idle");

  async function submit(e) {
    e.preventDefault();
    setEstado("loading");
    try {
      const { error } = await window.sb.from("leads").insert({
        name: nome, whatsapp, email, interest: interesse, source: "usa",
      });
      if (error) throw error;
      setEstado("done");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "done") {
    return (
      <section id="contato-usa" className="usa-cta">
        <div className="usa-cta-bg" />
        <div className="usa-cta-overlay" />
        <div className="usa-cta-inner">
          <div className="usa-cta-success">
            <div className="usa-cta-check" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="eyebrow">Mensagem recebida</span>
            <h2>Obrigado, <em>{nome}</em>.</h2>
            <p>Um consultor especializado entrará em contato pelo WhatsApp em até 1 dia útil.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato-usa" className="usa-cta">
      <div className="usa-cta-bg" />
      <div className="usa-cta-overlay" />
      <div className="usa-cta-inner">
        <div className="usa-cta-copy reveal">
          <span className="eyebrow">Atendimento privativo</span>
          <h2>Comece sua<br />jornada <em>nos EUA</em></h2>
          <p>
            Fale com um consultor especializado no mercado americano.
            Atendimento discreto, personalizado e sem compromisso.
          </p>
          <ul className="usa-cta-bullets">
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Análise gratuita do seu perfil de investidor
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Seleção personalizada de propriedades
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              Suporte completo até o fechamento
            </li>
          </ul>
        </div>
        <form className="usa-cta-form reveal" onSubmit={submit} noValidate>
          <div className="usa-form-field">
            <label htmlFor="usa-nome">Nome</label>
            <input id="usa-nome" required placeholder="Como prefere ser chamado"
                   value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div className="usa-form-field">
            <label htmlFor="usa-wa">WhatsApp</label>
            <input id="usa-wa" required placeholder="(21) 99999-9999"
                   value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
          </div>
          <div className="usa-form-field">
            <label htmlFor="usa-email">E-mail</label>
            <input id="usa-email" type="email" required placeholder="seu@email.com"
                   value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="usa-form-field">
            <label htmlFor="usa-int">O que procura?</label>
            <select id="usa-int" value={interesse} onChange={e => setInteresse(e.target.value)} required>
              <option value="" disabled>Selecione</option>
              <option value="Comprar imóvel nos EUA">Comprar imóvel nos EUA</option>
              <option value="Investir nos EUA">Investir nos EUA</option>
              <option value="Alugar nos EUA">Alugar nos EUA</option>
              <option value="Anunciar imóvel nos EUA">Anunciar imóvel nos EUA</option>
            </select>
          </div>
          {estado === "error" && (
            <p className="usa-form-error" role="alert">Erro ao enviar. Tente novamente.</p>
          )}
          <button type="submit" className="usa-form-submit" disabled={estado === "loading"}
                  aria-busy={estado === "loading"}>
            {estado === "loading" ? "Enviando…" : "Solicitar contato"}
          </button>
          <p className="usa-form-note">Sem compromisso · Resposta em até 1 dia útil</p>
        </form>
      </div>
    </section>
  );
}

export function USAFooter() {
  return (
    <footer className="usa-footer">
      <div className="usa-footer-inner">
        <div className="usa-footer-brand">
          <div className="usa-footer-wordmark">New Home <em>USA</em></div>
          <p>Imóveis de alto padrão nos Estados Unidos.<br />Uma empresa New Home Imóveis.</p>
        </div>
        <div className="usa-footer-links">
          <a href="#mercados">Mercados</a>
          <a href="#contato-usa">Contato</a>
          <a href="index.html">New Home Brasil</a>
        </div>
      </div>
      <div className="usa-footer-bot">
        <span>© 2026 New Home USA · Todos os direitos reservados</span>
        <a href="index.html" aria-label="Voltar para New Home Imóveis">← New Home Imóveis</a>
      </div>
    </footer>
  );
}
