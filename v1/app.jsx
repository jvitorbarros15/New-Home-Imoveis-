// New Home Imóveis — app shell + Tweaks

import { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSlider } from './tweaks-panel.jsx';
import { Nav, Hero, Destaques, Bairros, Stats, Sobre, Depoimentos, CTA, Footer } from './sections.jsx';
import { Chat } from './chat.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brand": "aurum",
  "motion": window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "off" : "on",
  "density": "regular",
  "accentIntensity": 100
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply to <html>
  React.useEffect(() => {
    document.documentElement.setAttribute("data-brand", t.brand);
    document.documentElement.setAttribute("data-motion", t.motion);
    document.documentElement.style.setProperty(
      "--accent-l-mult",
      String((t.accentIntensity || 100) / 100)
    );
  }, [t.brand, t.motion, t.accentIntensity]);

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
      <Hero motion={t.motion} />
      <Destaques />
      <Bairros />
      <Stats />
      <Sobre />
      <Depoimentos />
      <CTA />
      <Footer brand={t.brand} />
      <Chat brand={t.brand} />

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
        <TweakSlider
          label="Intensidade do acento"
          value={t.accentIntensity}
          min={60} max={120} step={5} unit="%"
          onChange={(v) => setTweak("accentIntensity", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
