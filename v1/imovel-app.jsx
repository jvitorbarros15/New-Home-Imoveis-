// New Home — Imóvel page app shell

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brand": "aurum",
  "motion": "on",
  "accentIntensity": 100
}/*EDITMODE-END*/;

function ImovelApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lbOpen, setLbOpen] = React.useState(false);
  const [lbIdx, setLbIdx] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-brand", t.brand);
    document.documentElement.setAttribute("data-motion", t.motion);
  }, [t.brand, t.motion]);

  useReveal();

  const openLb = (i) => { setLbIdx(i); setLbOpen(true); };

  return (
    <>
      <div className="grain" />
      <Nav brand={t.brand} />

      <main className="imovel-page">
        <div className="crumb">
          <a href="index.html">Home</a><span className="crumb-sep">›</span>
          <a href="index.html#destaques">Imóveis</a><span className="crumb-sep">›</span>
          <a href="#">À venda</a><span className="crumb-sep">›</span>
          <a href="#">Apartamento</a><span className="crumb-sep">›</span>
          <a href="#">Rio de Janeiro</a><span className="crumb-sep">›</span>
          <a href="#">Lagoa</a><span className="crumb-sep">›</span>
          <span className="crumb-now">{PROP.code}</span>
        </div>

        <GalleryHero prop={PROP} onOpen={openLb} />

        <Identity prop={PROP} />

        <div className="body-grid">
          <div className="body-main">
            <div className="reveal"><Description  prop={PROP} /></div>
            <div className="reveal"><Highlights   prop={PROP} /></div>
            <div className="reveal"><Features     prop={PROP} /></div>
            <div className="reveal"><Planta /></div>
            <div className="reveal"><Localizacao  prop={PROP} /></div>
            <div className="reveal"><Custos       prop={PROP} /></div>
          </div>
          <Sidebar prop={PROP} />
        </div>

        <Similar prop={PROP} />
      </main>

      <Footer brand={t.brand} />
      <Chat brand={t.brand} />

      <Lightbox open={lbOpen} idx={lbIdx} setIdx={setLbIdx}
                onClose={() => setLbOpen(false)} images={PROP.images} />

      <TweaksPanel>
        <TweakSection label="Identidade" />
        <TweakRadio
          label="Logo / paleta"
          value={t.brand}
          options={[
            { value: "aurum", label: "Aurum" },
            { value: "insignia", label: "Insignia" },
          ]}
          onChange={(v) => setTweak("brand", v)}
        />
        <TweakSection label="Movimento" />
        <TweakRadio
          label="Animações"
          value={t.motion}
          options={[
            { value: "on", label: "Ativadas" },
            { value: "off", label: "Sutis" },
          ]}
          onChange={(v) => setTweak("motion", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ImovelApp />);
