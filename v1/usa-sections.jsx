// New Home USA — landing page sections

export function USAHero() {
  return (
    <section className="usa-hero">
      <div className="usa-hero-bg" />
      <div className="usa-hero-inner">
        <div className="usa-hero-wordmark">
          New Home <em>USA</em>
        </div>
        <p className="usa-hero-tagline">Imóveis de alto padrão nos Estados Unidos</p>
        <div className="usa-hero-markets">
          <span>Miami</span><span>Orlando</span><span>Nova York</span><span>Los Angeles</span>
        </div>
        <a href="#contato-usa" className="usa-hero-cta">Fale com um consultor</a>
      </div>
    </section>
  );
}

const USA_MARKETS = [
  {
    city: "Miami", state: "Florida",
    desc: "Condos de frente para o mar e penthouses em Brickell, Miami Beach e Coconut Grove.",
    img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=900&q=80&auto=format&fit=crop",
  },
  {
    city: "Orlando", state: "Florida",
    desc: "Casas de veraneio, propriedades para investimento e resorts próximos às principais atrações.",
    img: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=900&q=80&auto=format&fit=crop",
  },
  {
    city: "Nova York", state: "New York",
    desc: "Apartamentos em Manhattan e Brooklyn — endereços de prestígio para o investidor global.",
    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80&auto=format&fit=crop",
  },
];

export function USAMarkets() {
  return (
    <section className="usa-markets reveal" id="mercados">
      <div className="sec-head">
        <span className="eyebrow">Nossos mercados</span>
        <h2>Onde atuamos <em>nos EUA</em></h2>
      </div>
      <div className="usa-markets-grid">
        {USA_MARKETS.map((m) => (
          <div key={m.city} className="usa-market-card">
            <div className="usa-market-img" style={{ backgroundImage: `url("${m.img}")` }} />
            <div className="usa-market-body">
              <div className="usa-market-city">{m.city}</div>
              <div className="usa-market-state">{m.state}</div>
              <p>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function USAWhy() {
  const reasons = [
    { title: "Expertise bilíngue",    body: "Equipe fluente em português e inglês, com mais de 10 anos no mercado americano." },
    { title: "Curadoria exclusiva",   body: "Seleção de propriedades nas melhores regiões, com acesso antecipado a lançamentos." },
    { title: "Suporte integral",      body: "Do processo de compra ao financiamento americano (ITIN), cuidamos de cada etapa." },
    { title: "Rede de especialistas", body: "Parceiros em advocacia imobiliária, contabilidade e gestão de patrimônio nos EUA." },
  ];
  return (
    <section className="usa-why reveal">
      <div className="sec-head">
        <span className="eyebrow">Por que New Home USA</span>
        <h2>A ponte entre o <em>Brasil e os EUA</em></h2>
      </div>
      <div className="usa-why-grid">
        {reasons.map((r) => (
          <div key={r.title} className="usa-why-card">
            <h4>{r.title}</h4>
            <p>{r.body}</p>
          </div>
        ))}
      </div>
    </section>
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
      <section id="contato-usa" className="cta reveal" style={{ maxWidth: "100%" }}>
        <div className="cta-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=2000&q=80&auto=format&fit=crop")' }} />
        <div className="cta-body">
          <span className="eyebrow">Mensagem recebida</span>
          <h2>Obrigado, <em>{nome}</em>!</h2>
          <p>Um consultor entrará em contato pelo WhatsApp em até 1 dia útil.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contato-usa" className="cta reveal" style={{ maxWidth: "100%" }}>
      <div className="cta-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=2000&q=80&auto=format&fit=crop")' }} />
      <div className="cta-body">
        <span className="eyebrow">Atendimento personalizado</span>
        <h2>Comece sua jornada <em>nos EUA</em></h2>
        <p>Fale com um consultor especializado no mercado americano.</p>
      </div>
      <form className="cta-form" onSubmit={submit}>
        <h3>Fale com um consultor</h3>
        <label>Nome
          <input required placeholder="Como prefere ser chamado" value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <label>WhatsApp
          <input required placeholder="(21) 99999-9999" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
        </label>
        <label>E-mail
          <input type="email" required placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>O que procura?
          <select value={interesse} onChange={e => setInteresse(e.target.value)} required>
            <option value="" disabled>Selecione</option>
            <option value="Comprar imóvel nos EUA">Comprar imóvel nos EUA</option>
            <option value="Investir nos EUA">Investir nos EUA</option>
            <option value="Alugar nos EUA">Alugar nos EUA</option>
            <option value="Anunciar imóvel nos EUA">Anunciar imóvel nos EUA</option>
          </select>
        </label>
        {estado === "error" && (
          <p style={{ color: "oklch(0.65 0.2 20)", fontSize: 13, margin: 0 }}>
            Erro ao enviar. Tente novamente.
          </p>
        )}
        <button type="submit" disabled={estado === "loading"}>
          {estado === "loading" ? "Enviando…" : "Solicitar contato"}
        </button>
      </form>
    </section>
  );
}

export function USAFooter() {
  return (
    <footer style={{ padding: "24px 24px 48px", maxWidth: 1200, margin: "0 auto" }}>
      <div className="ft-bot" style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
        <span>© 2026 New Home USA · Powered by New Home Imóveis</span>
        <a href="index.html" style={{ color: "var(--ink-2)", fontSize: 13 }}>← Voltar para New Home Imóveis</a>
      </div>
    </footer>
  );
}
