// New Home Imóveis — section components

const SVG = ({ children, size = 16, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);
const IconChev   = (p) => <SVG {...p}><polyline points="6 9 12 15 18 9" /></SVG>;
const IconArrow  = (p) => <SVG {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></SVG>;
const IconArrowL = (p) => <SVG {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></SVG>;
const IconSearch = (p) => <SVG {...p}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></SVG>;
const IconFilter = (p) => <SVG {...p}><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="14" y2="12" /><line x1="4" y1="18" x2="9" y2="18" /></SVG>;
const IconPhone  = (p) => <SVG {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></SVG>;
const IconPin    = (p) => <SVG {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></SVG>;
const IconBed    = (p) => <SVG {...p} size={p.size||14}><path d="M2 4v16M22 8H8a4 4 0 0 0-4 4v8M2 20h20M22 20V8" /></SVG>;
const IconBath   = (p) => <SVG {...p} size={p.size||14}><path d="M9 6V3a1 1 0 0 1 1-1h2M5 12V6h14v6M3 12h18l-1 6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" /></SVG>;
const IconCar    = (p) => <SVG {...p} size={p.size||14}><path d="M5 17h14M7 17v3M17 17v3M3 11l2-5h14l2 5M3 11h18v6H3z" /><circle cx="7.5" cy="14" r="1" /><circle cx="16.5" cy="14" r="1" /></SVG>;
const IconArea   = (p) => <SVG {...p} size={p.size||14}><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" /></SVG>;
const IconIG     = (p) => <SVG {...p} size={14}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></SVG>;
const IconFB     = (p) => <SVG {...p} size={14}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></SVG>;
const IconWA     = (p) => <SVG {...p} size={14}><path d="M21 12a9 9 0 1 1-3.5-7.1L21 3l-1.4 4A9 9 0 0 1 21 12z" /><path d="M9 9c0 4 3 7 7 7l1.5-2-2.5-1-1 1c-1 0-3-2-3-3l1-1-1-2.5L9 9z" /></SVG>;
const IconMoon   = (p) => <SVG {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></SVG>;
const IconSun    = (p) => <SVG {...p}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></SVG>;
const IconMenu   = (p) => <SVG {...p}><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></SVG>;
const IconX      = (p) => <SVG {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></SVG>;

/* ------ Property data --------------------------------------------- */
const FEATURED = [
  {
    type: "Cobertura Duplex",
    title: "Cobertura à beira-mar com vista para o Cristo",
    area: "412 m²", rooms: "4 Suítes", baths: "5", parking: "3 Vagas",
    region: "Lagoa · Rio de Janeiro",
    price: "R$ 18.900.000",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    type: "Casa em Condomínio",
    title: "Casa contemporânea com piscina infinita",
    area: "680 m²", rooms: "5 Suítes", baths: "6", parking: "4 Vagas",
    region: "Itanhangá · Rio de Janeiro",
    price: "R$ 12.400.000",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop",
  },
  {
    type: "Apartamento Alto Padrão",
    title: "Garden assinado com 3 suítes",
    area: "238 m²", rooms: "3 Suítes", baths: "4", parking: "3 Vagas",
    region: "Barra da Tijuca · Rio de Janeiro",
    price: "R$ 6.850.000",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80&auto=format&fit=crop",
  },
  {
    type: "Penthouse",
    title: "Penthouse com terraço panorâmico",
    area: "320 m²", rooms: "4 Suítes", baths: "5", parking: "3 Vagas",
    region: "Leblon · Rio de Janeiro",
    price: "R$ 22.000.000",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop",
  },
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=80&auto=format&fit=crop",
];

const BAIRROS = [
  { name: "Barra da Tijuca",  count: 142, img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=900&q=80&auto=format&fit=crop" },
  { name: "Leblon",            count: 38,  img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80&auto=format&fit=crop" },
  { name: "Ipanema",           count: 47,  img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=900&q=80&auto=format&fit=crop" },
  { name: "Lagoa",             count: 24,  img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=900&q=80&auto=format&fit=crop" },
  { name: "Recreio",           count: 86,  img: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=900&q=80&auto=format&fit=crop" },
  { name: "Jacarepaguá",       count: 64,  img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=900&q=80&auto=format&fit=crop" },
  { name: "Joá",               count: 12,  img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format&fit=crop" },
  { name: "Itanhangá",         count: 19,  img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80&auto=format&fit=crop" },
];

const TESTIMONIALS = [
  { quote: "Atendimento à altura do imóvel que buscávamos. A New Home entendeu o que ‘casa’ significa para a nossa família.", name: "Ana & Rodrigo Vieira", place: "Cobertura · Barra da Tijuca" },
  { quote: "Da primeira visita à entrega das chaves, fui acompanhado com discrição e elegância. Recomendo sem reservas.", name: "Eduardo Marques", place: "Penthouse · Leblon" },
  { quote: "Encontraram uma casa que nem estava no mercado. Esse é o nível do trabalho deles — vai além do óbvio.", name: "Família Sant’Anna", place: "Casa · Joá" },
];

/* ------ Helpers --------------------------------------------------- */
function useTheme() {
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem("nh-theme") || "dark"; } catch { return "dark"; }
  });
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("nh-theme", theme); } catch {}
  }, [theme]);
  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark");
  return [theme, toggle];
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function CountUp({ to, suffix = "", duration = 1800 }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(to * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString("pt-BR")}{suffix}</span>;
}

/* ------ Nav ------------------------------------------------------- */
export function Nav({ brand }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [theme, toggleTheme] = useTheme();
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const navLinks = [
    { href: "index.html#destaques", label: "Imóveis",       page: "index.html" },
    { href: "index.html#bairros",   label: "Bairros",        page: "index.html" },
    { href: "financiamento.html",   label: "Financiamento",  page: "financiamento.html" },
    { href: "quem-somos.html",      label: "Quem somos",     page: "quem-somos.html" },
    { href: "usa.html",             label: "New Home USA",   page: "usa.html" },
    { href: "index.html#contato",   label: "Contato",        page: "index.html" },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a className="nav-logo" href="index.html">
          <img src={brand === "insignia" ? "assets/logo-navy.jpg" : "assets/logo-gold.png"} alt="New Home Imóveis" />
        </a>
        <div className="nav-links">
          {navLinks.map(({ href, label, page }) => (
            <a key={label} href={href} className={currentPage === page ? "active" : ""}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {theme === "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
          </button>
          <a className="nav-phone" href="tel:+5521999999999">
            <IconPhone /> +55 21 99999-9999
          </a>
          <a className="nav-cta" href="index.html#contato">Anuncie seu imóvel</a>
          <button
            className="nav-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <IconMenu size={18} />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button className="nav-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
          <IconX size={20} />
        </button>
        {navLinks.map(({ href, label, page }) => (
          <a key={label} href={href}
             className={currentPage === page ? "active" : ""}
             onClick={() => setMenuOpen(false)}
             tabIndex={menuOpen ? 0 : -1}
          >{label}</a>
        ))}
        <a className="nav-mobile-cta" href="index.html#contato" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
          Anuncie seu imóvel
        </a>
      </div>
    </>
  );
}

/* ------ Hero ------------------------------------------------------ */
export function Hero({ motion }) {
  const [idx, setIdx] = React.useState(0);
  const [pretensao, setPretensao] = React.useState("Comprar");
  const [tipo, setTipo] = React.useState("Apartamento");
  const [busca, setBusca] = React.useState("");
  const [openP, setOpenP] = React.useState(false);
  const [openT, setOpenT] = React.useState(false);

  React.useEffect(() => {
    if (motion === "off") return;
    const id = setInterval(() => setIdx(i => (i + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(id);
  }, [motion]);

  // close popovers on outside click
  React.useEffect(() => {
    const close = (e) => { if (!e.target.closest(".hs-field")) { setOpenP(false); setOpenT(false); } };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const PRETENSOES = ["Comprar", "Alugar", "Lançamentos"];
  const TIPOS = ["Apartamento", "Cobertura", "Casa", "Casa em condomínio", "Terreno", "Comercial"];

  return (
    <header className="hero">
      <div className="hero-slides">
        {HERO_IMAGES.map((src, i) => (
          <div key={i} className={`hero-slide ${i === idx ? "active" : ""}`}
               style={{ backgroundImage: `url(${src})` }} />
        ))}
        <div className="hero-veil" />
      </div>

      <div className="hero-side">
        {HERO_IMAGES.map((_, i) => (
          <div key={i} className={`hero-dot ${i === idx ? "on" : ""}`} onClick={() => setIdx(i)} />
        ))}
        <div className="hero-counter">{String(idx + 1).padStart(2, "0")} / {String(HERO_IMAGES.length).padStart(2, "0")}</div>
      </div>

      <div className="hero-content">
        <div className="hero-headline">
          <div className="hero-eyebrow"><span className="eyebrow">New Home · Imóveis selecionados</span></div>
          <h1>
            <span className="kw"><span style={{ animationDelay: "0.05s" }}>Imóveis</span></span>{" "}
            <span className="kw"><span style={{ animationDelay: "0.12s" }}>escolhidos</span></span>{" "}
            <span className="kw"><span style={{ animationDelay: "0.19s" }}>para</span></span>{" "}
            <span className="kw"><span style={{ animationDelay: "0.26s" }}>quem</span></span>{" "}
            <br />
            <span className="kw"><span style={{ animationDelay: "0.34s" }}>busca</span></span>{" "}
            <em><span className="kw"><span style={{ animationDelay: "0.42s" }}>qualidade</span></span>{" "}
            <span className="kw"><span style={{ animationDelay: "0.50s" }}>de vida.</span></span></em>
          </h1>
          <p className="hero-sub">
            Há mais de duas décadas no Rio de Janeiro, conectando famílias a residências de alto padrão —
            com discrição, curadoria e o cuidado de quem entende que cada metragem conta uma história.
          </p>
        </div>

        <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
          <div className="hs-field" onClick={(e) => { e.stopPropagation(); setOpenP(o => !o); setOpenT(false); }}>
            <span className="hs-label">Pretensão</span>
            <span className="hs-value">{pretensao}<IconChev className="hs-chev" /></span>
            {openP && (
              <div className="hs-pop" onClick={(e) => e.stopPropagation()}>
                {PRETENSOES.map(p => (
                  <button key={p} className={p === pretensao ? "on" : ""}
                          onClick={() => { setPretensao(p); setOpenP(false); }}>{p}</button>
                ))}
              </div>
            )}
          </div>
          <div className="hs-field" onClick={(e) => { e.stopPropagation(); setOpenT(o => !o); setOpenP(false); }}>
            <span className="hs-label">Tipo de imóvel</span>
            <span className="hs-value">{tipo}<IconChev className="hs-chev" /></span>
            {openT && (
              <div className="hs-pop" onClick={(e) => e.stopPropagation()}>
                {TIPOS.map(p => (
                  <button key={p} className={p === tipo ? "on" : ""}
                          onClick={() => { setTipo(p); setOpenT(false); }}>{p}</button>
                ))}
              </div>
            )}
          </div>
          <div className="hs-field">
            <span className="hs-label">Localização</span>
            <span className="hs-value">
              <IconSearch size={14} />
              <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Bairro, condomínio ou código" />
            </span>
          </div>
          <button type="button" className="hs-filter"><IconFilter size={14} /> Mais filtros</button>
          <button type="submit" className="hs-btn">Encontrar <IconArrow size={14} /></button>
        </form>
      </div>

      <div className="hero-scroll">Role para descobrir</div>
    </header>
  );
}

/* ------ Destaques ------------------------------------------------- */
export function Destaques() {
  const [tab, setTab] = React.useState("Venda");
  const [hover, setHover] = React.useState(0);
  const [items, setItems] = React.useState(FEATURED);

  React.useEffect(() => {
    if (!window.sb) return;
    window.sb
      .from("properties")
      .select("code,title,type,region,price_brl,area_m2,bedrooms,bathrooms,parking,images,status")
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(8)
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) {
          setItems(data.map(p => ({
            type:    p.type,
            title:   p.title,
            area:    p.area_m2 ? `${p.area_m2} m²` : "—",
            rooms:   p.bedrooms ? `${p.bedrooms} Suítes` : "—",
            baths:   p.bathrooms ? String(p.bathrooms) : "—",
            parking: p.parking ? `${p.parking} Vagas` : "—",
            region:  p.region,
            price:   "R$ " + (p.price_brl / 100).toLocaleString("pt-BR", { maximumFractionDigits: 0 }),
            img:     p.images?.[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
            code:    p.code,
          })));
          setHover(0);
        }
      });
  }, []);

  const featured = items[hover] || items[0];

  return (
    <section id="destaques" className="reveal">
      <div className="sec-head">
        <h2>Destaques da <em>curadoria</em></h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 18 }}>
          <p>Uma seleção mensal de propriedades que combinam localização, projeto e singularidade.</p>
          <div className="seg">
            {["Venda", "Aluguel", "Lançamentos"].map(t => (
              <button key={t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="destaques">
        <a className="dest-hero dest-hero-link" href={`imovel.html?code=${encodeURIComponent(featured?.code || "")}`}>
          <div className="img" style={{ backgroundImage: `url("${featured?.img}")` }} />
          <div className="meta">
            <div>
              <div className="dest-tag">{featured?.type} · {featured?.region}</div>
              <h3>{featured?.title}</h3>
              <div className="dest-specs">
                <span><IconArea /> {featured?.area}</span>
                <span><IconBed /> {featured?.rooms}</span>
                <span><IconBath /> {featured?.baths} Banhos</span>
                <span><IconCar /> {featured?.parking}</span>
              </div>
            </div>
            <div className="dest-price">
              <small>A partir de</small>
              {featured?.price}
            </div>
          </div>
        </a>

        <div className="dest-list">
          {items.slice(1, 4).map((p, i) => (
            <a key={p.code || i} className="dest-card" href={`imovel.html?code=${encodeURIComponent(p.code || "")}`}
               onMouseEnter={() => setHover(i + 1)}
               onFocus={() => setHover(i + 1)}>
              <div className="dc-imgwrap"><div className="dc-img" style={{ backgroundImage: `url("${p.img}")` }} /></div>
              <div className="dc-body">
                <div>
                  <div className="dc-type">{p.type} · {p.region.split(" · ")[0]}</div>
                  <div className="dc-title">{p.title}</div>
                  <div className="dc-specs">
                    <span><IconArea /> {p.area}</span>
                    <span><IconBed /> {p.rooms}</span>
                    <span><IconCar /> {p.parking}</span>
                  </div>
                </div>
                <div className="dc-price">{p.price}</div>
              </div>
              <div className="dc-arrow"><IconArrow size={12} /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------ Bairros --------------------------------------------------- */
export function Bairros() {
  const railRef = React.useRef(null);
  const scroll = (dir) => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: dir * 380, behavior: "smooth" });
  };
  return (
    <section id="bairros" className="bairros reveal" style={{ maxWidth: "100%" }}>
      <div className="bairros-wrap">
        <div className="sec-head">
          <h2>O Rio em <em>bairros</em></h2>
          <p>Conheça as regiões em que a New Home atua. Da orla à floresta — cada bairro com a sua narrativa.</p>
        </div>
        <div className="bairros-rail" ref={railRef}>
          {BAIRROS.map((b, i) => (
            <div key={i} className="bairro" tabIndex={0} role="button"
                 aria-label={`${b.name} — ${b.count} imóveis`}
                 onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.location.href = `index.html?bairro=${encodeURIComponent(b.name)}`; }}>
              <div className="img" style={{ backgroundImage: `url(${b.img})` }} />
              <div className="grad" />
              <div className="pin"><IconPin size={14} /></div>
              <div className="label">
                <h4>{b.name}</h4>
                <span className="ct">{String(b.count).padStart(3, "0")} imóveis</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rail-nav">
          <button onClick={() => scroll(-1)} aria-label="anterior"><IconArrowL size={16} /></button>
          <button onClick={() => scroll(1)} aria-label="próximo"><IconArrow size={16} /></button>
        </div>
      </div>
    </section>
  );
}

/* ------ Stats ----------------------------------------------------- */
export function Stats() {
  return (
    <section className="stats reveal" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="stat">
        <div className="num"><CountUp to={22} /><em>anos</em></div>
        <div className="lbl">No mercado de imóveis de alto padrão</div>
      </div>
      <div className="stat">
        <div className="num">R$<CountUp to={4.2} />*</div>
        <div className="lbl">Bilhões em portfólio gerido</div>
      </div>
      <div className="stat">
        <div className="num"><CountUp to={1840} /></div>
        <div className="lbl">Famílias atendidas no Rio de Janeiro</div>
      </div>
      <div className="stat">
        <div className="num"><CountUp to={36} /></div>
        <div className="lbl">Bairros cobertos com curadoria local</div>
      </div>
    </section>
  );
}

/* ------ Sobre ----------------------------------------------------- */
export function Sobre() {
  return (
    <section id="sobre" className="sobre reveal">
      <div className="sobre-img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&auto=format&fit=crop)" }} />
      <div className="sobre-body">
        <span className="eyebrow">A New Home</span>
        <h2 style={{ marginTop: 20 }}>Curadoria <em>imobiliária</em> com o tempo de quem mora aqui.</h2>
        <p>
          Fundada no Rio de Janeiro em 2003, a New Home Imóveis nasceu da convicção de que comprar uma casa é
          a decisão mais íntima de uma família. Em mais de duas décadas, construímos um portfólio que une
          condomínios consagrados, projetos contemporâneos e oportunidades fora do mercado público.
        </p>
        <div className="sobre-quote">
          “Não vendemos metros quadrados. Apresentamos lugares onde a vida acontece com qualidade.”
        </div>
        <div className="sobre-sig">
          <span className="line" />
          Marcos Andrade · Diretor
        </div>
      </div>
    </section>
  );
}

/* ------ Depoimentos ----------------------------------------------- */
export function Depoimentos() {
  return (
    <section id="depoimentos" className="reveal">
      <div className="sec-head">
        <h2>Confiança que <em>permanece</em></h2>
        <p>Famílias e investidores que escolheram a New Home para abrir uma nova porta.</p>
      </div>
      <div className="depo-track">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="depo-card">
            <div className="depo-mark">“</div>
            <div className="depo-quote">{t.quote}</div>
            <div className="depo-by">
              <span className="depo-name">{t.name}</span>
              <span className="depo-place">{t.place}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------ CTA ------------------------------------------------------- */
export function CTA() {
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
        name: nome, whatsapp, email, interest: interesse, source: "brasil",
      });
      if (error) throw error;
      setEstado("done");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "done") {
    return (
      <section id="contato" className="cta" style={{ maxWidth: "100%" }}>
        <div className="cta-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80&auto=format&fit=crop)" }} />
        <div className="cta-body">
          <span className="eyebrow">Obrigado!</span>
          <h2 style={{ marginTop: 20 }}>Recebemos sua mensagem, <em>{nome}</em>.</h2>
          <p>Um consultor entrará em contato pelo WhatsApp em até 1 dia útil.</p>
        </div>
        <div className="cta-form" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
          ✓
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="cta reveal" style={{ maxWidth: "100%" }}>
      <div className="cta-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80&auto=format&fit=crop)" }} />
      <div className="cta-body">
        <span className="eyebrow">Atendimento personalizado</span>
        <h2 style={{ marginTop: 20 }}>Vamos encontrar a <em>sua</em> nova casa.</h2>
        <p>Conte para nós o que procura — região, perfil, momento de vida. Um consultor da New Home retornará
          com uma seleção desenhada para você, em até um dia útil.</p>
      </div>
      <form className="cta-form" onSubmit={submit} noValidate>
        <h3>Fale com um consultor</h3>
        <label htmlFor="cta-nome">Nome
          <input id="cta-nome" required placeholder="Como prefere ser chamado"
                 value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <label htmlFor="cta-wa">WhatsApp
          <input id="cta-wa" required placeholder="(21) 99999-9999"
                 value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
        </label>
        <label htmlFor="cta-email">E-mail
          <input id="cta-email" type="email" placeholder="seu@email.com"
                 value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label htmlFor="cta-int">O que procura?
          <select id="cta-int" value={interesse} onChange={e => setInteresse(e.target.value)} required>
            <option value="" disabled>Selecione</option>
            <option value="Comprar imóvel">Comprar imóvel</option>
            <option value="Alugar imóvel">Alugar imóvel</option>
            <option value="Anunciar imóvel">Anunciar imóvel</option>
            <option value="Investir">Investir</option>
          </select>
        </label>
        {estado === "error" && (
          <p style={{ color: "oklch(0.75 0.18 25)", fontSize: 13, margin: 0 }} role="alert">
            Erro ao enviar. Tente novamente.
          </p>
        )}
        <button type="submit" disabled={estado === "loading"} aria-busy={estado === "loading"}>
          {estado === "loading" ? "Enviando…" : "Solicitar contato"}
        </button>
      </form>
    </section>
  );
}

/* ------ Footer ---------------------------------------------------- */
export function Footer({ brand }) {
  return (
    <footer>
      <div className="ft-grid">
        <div className="ft-brand">
          <img src={brand === "insignia" ? "assets/logo-navy.jpg" : "assets/logo-gold.png"} alt="New Home Imóveis" />
          <p>Imóveis de alto padrão no Rio de Janeiro. Curadoria, discrição e atendimento de quem entende cada bairro.</p>
        </div>
        <div className="ft-col">
          <h5>Navegue</h5>
          <ul>
            <li><a href="#destaques">Imóveis em destaque</a></li>
            <li><a href="#bairros">Por bairro</a></li>
            <li><a href="#">Lançamentos</a></li>
            <li><a href="#">Imóveis comerciais</a></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Institucional</h5>
          <ul>
            <li><a href="quem-somos.html">Quem somos</a></li>
            <li><a href="financiamento.html">Financiamento</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Política de privacidade</a></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Contato</h5>
          <ul>
            <li><a href="tel:+5521999999999">+55 21 99999-9999</a></li>
            <li><a href="mailto:contato@newhomeimoveis.com.br">contato@newhomeimoveis.com.br</a></li>
            <li><a href="#">Av. Lúcio Costa, 3600 — Barra da Tijuca</a></li>
            <li><a href="#">CRECI-RJ J-12345</a></li>
          </ul>
        </div>
      </div>
      <div className="ft-bot">
        <span>© 2026 New Home Imóveis · Todos os direitos reservados</span>
        <div className="ft-social">
          <a href="#" aria-label="Instagram"><IconIG /></a>
          <a href="#" aria-label="Facebook"><IconFB /></a>
          <a href="#" aria-label="WhatsApp"><IconWA /></a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Destaques, Bairros, Stats, Sobre, Depoimentos, CTA, Footer, useReveal, useTheme, SVG });
