// New Home USA — app entry point

import { useTweaks, TweaksPanel, TweakSection, TweakRadio } from './tweaks-panel.jsx';
import { Nav } from './sections.jsx';
import { USAHero, USAMarkets, USAWhy, USAStats, USACTA, USAFooter } from './usa-sections.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{ "brand": "aurum", "motion": "on" }/*EDITMODE-END*/;

function USAApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-brand", t.brand);
    document.documentElement.setAttribute("data-motion", t.motion);
  }, [t.brand, t.motion]);

  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });

  return (
    <>
      <div className="grain" />
      <Nav brand={t.brand} />
      <USAHero />
      <USAMarkets />
      <USAWhy />
      <USAStats />
      <USACTA />
      <USAFooter />
      <TweaksPanel>
        <TweakSection label="Identidade" />
        <TweakRadio
          label="Logo / paleta"
          value={t.brand}
          options={[{ value: "aurum", label: "Aurum" }, { value: "insignia", label: "Insignia" }]}
          onChange={(v) => setTweak("brand", v)}
        />
        <TweakSection label="Movimento" />
        <TweakRadio
          label="Animações"
          value={t.motion}
          options={[{ value: "on", label: "Ativadas" }, { value: "off", label: "Sutis" }]}
          onChange={(v) => setTweak("motion", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<USAApp />);
