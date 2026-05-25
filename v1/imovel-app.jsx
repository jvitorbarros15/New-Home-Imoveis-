// New Home — Imóvel page app shell

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brand": "aurum",
  "motion": "on",
  "accentIntensity": 100
}/*EDITMODE-END*/;

function ImovelApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lbOpen, setLbOpen] = React.useState(false);
  const [lbIdx, setLbIdx]   = React.useState(0);
  const [prop, setProp]     = React.useState(PROP);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-brand", t.brand);
    document.documentElement.setAttribute("data-motion", t.motion);
  }, [t.brand, t.motion]);

  useReveal();

  React.useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code || !window.sb) return;
    setLoading(true);
    window.sb
      .from("properties")
      .select("*")
      .eq("code", code)
      .single()
      .then(({ data, error }) => {
        if (error || !data) { setLoading(false); return; }
        setProp({
          ...PROP,
          code:       data.code,
          title:      data.title,
          type:       data.type,
          status:     data.status === "active" ? "À venda" : data.status === "rented" ? "Aluguel" : "Vendido",
          address:    data.address || PROP.address,
          region:     data.region,
          price:      data.price_brl != null ? data.price_brl / 100 : PROP.price,
          condominio: data.condominio_brl ? data.condominio_brl / 100 : PROP.condominio,
          iptu:       data.iptu_brl ? data.iptu_brl / 100 : PROP.iptu,
          specs: {
            ...PROP.specs,
            areaUtil:  data.area_m2   || PROP.specs.areaUtil,
            areaBruta: data.area_m2   || PROP.specs.areaBruta,
            quartos:   data.bedrooms  || PROP.specs.quartos,
            suites:    data.suites    || PROP.specs.suites,
            banheiros: data.bathrooms || PROP.specs.banheiros,
            vagas:     data.parking   || PROP.specs.vagas,
            pet:       data.pet_friendly != null ? data.pet_friendly : PROP.specs.pet,
          },
          description: data.description
            ? data.description.split("\n\n").filter(Boolean)
            : PROP.description,
          images: data.images && data.images.length > 0
            ? data.images.map((src, i) => ({ src, caption: `Foto ${i + 1}`, room: "" }))
            : PROP.images,
          tourUrl: data.tour_url || null,
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const openLb = (i) => { setLbIdx(i); setLbOpen(true); };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid var(--line-2)", borderTopColor: "var(--accent)", animation: "spin 0.7s linear infinite" }} />
      </div>
    );
  }

  return (
    <>
      <div className="grain" />
      <Nav brand={t.brand} />

      <main className="imovel-page">
        <div className="crumb">
          <a href="index.html">Home</a><span className="crumb-sep">›</span>
          <a href="index.html#destaques">Imóveis</a><span className="crumb-sep">›</span>
          <span className="crumb-now">{prop.code}</span>
        </div>

        <GalleryHero prop={prop} onOpen={openLb} />
        <Identity prop={prop} />

        <div className="body-grid">
          <div className="body-main">
            <div className="reveal"><Description  prop={prop} /></div>
            <div className="reveal"><Highlights   prop={prop} /></div>
            <div className="reveal"><Features     prop={prop} /></div>
            <div className="reveal"><Planta /></div>
            <div className="reveal"><Localizacao  prop={prop} /></div>
            <div className="reveal"><Custos       prop={prop} /></div>
          </div>
          <Sidebar prop={prop} />
        </div>

        <Similar prop={prop} />
      </main>

      <Footer brand={t.brand} />
      <Chat brand={t.brand} />

      <Lightbox open={lbOpen} idx={lbIdx} setIdx={setLbIdx}
                onClose={() => setLbOpen(false)} images={prop.images} />

      <TweaksPanel>
        <TweakSection label="Identidade" />
        <TweakRadio label="Logo / paleta" value={t.brand}
          options={[{ value: "aurum", label: "Aurum" }, { value: "insignia", label: "Insignia" }]}
          onChange={(v) => setTweak("brand", v)} />
        <TweakSection label="Movimento" />
        <TweakRadio label="Animações" value={t.motion}
          options={[{ value: "on", label: "Ativadas" }, { value: "off", label: "Sutis" }]}
          onChange={(v) => setTweak("motion", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ImovelApp />);
