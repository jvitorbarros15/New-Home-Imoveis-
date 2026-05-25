// Financiamento page
import { useTweaks, TweaksPanel, TweakSection, TweakRadio } from './tweaks-panel.jsx';
import { Nav, Footer, useReveal } from './sections.jsx';
import { Chat } from './chat.jsx';

const BANKS = [
  {
    name: "Itaú",
    tag: "Banco parceiro · Privado",
    line: "Linhas de crédito imobiliário com prazo de até 35 anos. Atendimento digital e relacionamento para clientes Personnalité.",
    rateMin: "9,99%", financiamentoMax: "70%",
    url: "https://credito.itau.com.br/credito-imobiliario",
  },
  {
    name: "Santander",
    tag: "Banco parceiro · Privado",
    line: "Crédito imobiliário Use Casa Pronta e construção, com taxas pré ou pós-fixadas e portabilidade simplificada.",
    rateMin: "10,49%", financiamentoMax: "80%",
    url: "https://www.santander.com.br/credito/credito-imobiliario",
  },
  {
    name: "Banco do Brasil",
    tag: "Banco parceiro · Estatal",
    line: "Linhas SBPE e SFH para imóveis novos e usados. Possibilidade de uso do FGTS na entrada.",
    rateMin: "9,79%", financiamentoMax: "80%",
    url: "https://www.bb.com.br/site/credito-imobiliario/",
  },
  {
    name: "Bradesco",
    tag: "Banco parceiro · Privado",
    line: "Financiamento residencial e empresarial, com simulação online em minutos e contratação digital.",
    rateMin: "9,89%", financiamentoMax: "80%",
    url: "https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/credito-imobiliario.shtm",
  },
  {
    name: "Caixa",
    tag: "Banco parceiro · Estatal",
    line: "Maior operador do SFH no Brasil. Linhas tradicionais, Casa Verde e Amarela e financiamento pelo FGTS.",
    rateMin: "8,99%", financiamentoMax: "80%",
    url: "https://www.caixa.gov.br/voce/habitacao/",
  },
];

const FAQS = [
  { q: "Quanto preciso ter de entrada?", a: "O mínimo costuma ser 20% do valor do imóvel para imóveis usados e 10% para alguns lançamentos. A entrada pode ser composta com FGTS, dependendo do banco e do imóvel." },
  { q: "Posso usar o FGTS no financiamento?", a: "Sim, em diversas situações — amortização, redução da parcela ou composição da entrada. As regras variam conforme o banco, o valor do imóvel (até R$ 1,5 milhão para SFH) e se você possui outro imóvel financiado pelo SFH." },
  { q: "Qual o prazo máximo de financiamento?", a: "Hoje os principais bancos oferecem até 35 anos (420 meses) para crédito imobiliário. O prazo influencia diretamente o valor da parcela e o total de juros pagos." },
  { q: "O que é avaliado para aprovar o crédito?", a: "Os bancos analisam renda, comprometimento mensal (geralmente até 30%), score de crédito, idade, vínculo trabalhista e o próprio imóvel. A New Home pode orientar a documentação." },
  { q: "A New Home cobra pela consultoria de financiamento?", a: "Não. A orientação durante a compra é parte do nosso serviço e não tem custo. Cuidamos da burocracia: contrato, documentação e acompanhamento até a entrega das chaves." },
];

function BankIcon() {
  // Generic bank building icon — original design, no brand replication
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 9 12 3 21 9" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="5" y1="9" x2="5" y2="18" />
      <line x1="9" y1="9" x2="9" y2="18" />
      <line x1="15" y1="9" x2="15" y2="18" />
      <line x1="19" y1="9" x2="19" y2="18" />
      <line x1="3" y1="18" x2="21" y2="18" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </svg>
  );
}

function HowItWorks() {
  return (
    <section className="page-section reveal">
      <div className="page-section-head">
        <h2>Como <em>funciona</em></h2>
        <p>Três passos para sair da simulação à entrega das chaves — com a New Home cuidando de cada detalhe.</p>
      </div>
      <div className="steps">
        <div className="step">
          <span className="step-num">01</span>
          <h4>Escolha o banco</h4>
          <p>Compare condições, taxas e linhas de crédito dos cinco bancos parceiros. Cada banco tem perfis e benefícios diferentes — vale simular em mais de um.</p>
        </div>
        <div className="step">
          <span className="step-num">02</span>
          <h4>Faça a simulação</h4>
          <p>Use nosso simulador para entender a parcela aproximada, então clique no banco escolhido para finalizar a simulação oficial no site do banco.</p>
        </div>
        <div className="step">
          <span className="step-num">03</span>
          <h4>Conte com a New Home</h4>
          <p>Cuidamos de toda a burocracia: documentação, contrato, avaliação do imóvel, assessoria jurídica e acompanhamento até a posse das chaves.</p>
        </div>
      </div>
    </section>
  );
}

function BanksGrid() {
  return (
    <section className="page-section reveal" id="bancos">
      <div className="page-section-head">
        <h2>Bancos <em>parceiros</em></h2>
        <p>Cinco instituições nas quais a New Home tem relacionamento direto. Clique em "Simular" para ir ao simulador oficial do banco.</p>
      </div>
      <div className="banks">
        {BANKS.map((b) => (
          <a key={b.name} className="bank" href={b.url} target="_blank" rel="noopener">
            <div className="bank-mark"><BankIcon /></div>
            <div>
              <div className="bank-tag">{b.tag}</div>
              <div className="bank-name">{b.name}</div>
            </div>
            <p className="bank-line">{b.line}</p>
            <div className="bank-rates">
              <span>Taxa a partir <b>{b.rateMin}</b></span>
              <span>Financia até <b>{b.financiamentoMax}</b></span>
            </div>
            <div className="bank-cta">
              <span>Simular no banco</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Simulator() {
  const [valor, setValor] = React.useState(1500000);
  const [entrada, setEntrada] = React.useState(0.25);
  const [anos, setAnos] = React.useState(30);
  const [taxa, setTaxa] = React.useState(10.5);

  const principal = Math.max(0, valor * (1 - entrada));
  const i = (taxa / 100) / 12;
  const n = anos * 12;
  const parcela = principal > 0 && i > 0
    ? principal * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
    : 0;
  const totalPago = parcela * n;
  const juros = totalPago - principal;

  return (
    <section className="page-section reveal" id="simulador">
      <div className="page-section-head">
        <h2>Simule sua <em>parcela</em></h2>
        <p>Cálculo preliminar pelo sistema Price. Use para se preparar antes da simulação oficial em cada banco.</p>
      </div>
      <div className="sim-wrap">
        <div className="sim-card">
          <h3>Parâmetros</h3>

          <div className="sim-field">
            <div className="sim-field-head"><span>Valor do imóvel</span></div>
            <input className="sim-input" type="text" value={`R$ ${valor.toLocaleString("pt-BR")}`}
                   onChange={(e) => {
                     const v = parseInt(e.target.value.replace(/\D/g, ""), 10) || 0;
                     setValor(v);
                   }} />
          </div>

          <div className="sim-field">
            <div className="sim-field-head">
              <span>Entrada</span>
              <b>{(entrada * 100).toFixed(0)}% · R$ {Math.round(valor * entrada).toLocaleString("pt-BR")}</b>
            </div>
            <input className="sim-range" type="range" min={0.1} max={0.6} step={0.05} value={entrada}
                   onChange={(e) => setEntrada(parseFloat(e.target.value))} />
          </div>

          <div className="sim-field">
            <div className="sim-field-head"><span>Prazo</span><b>{anos} anos · {anos * 12} parcelas</b></div>
            <input className="sim-range" type="range" min={5} max={35} step={5} value={anos}
                   onChange={(e) => setAnos(parseInt(e.target.value))} />
          </div>

          <div className="sim-field">
            <div className="sim-field-head"><span>Taxa anual</span><b>{taxa.toFixed(1)}% a.a.</b></div>
            <input className="sim-range" type="range" min={7} max={14} step={0.1} value={taxa}
                   onChange={(e) => setTaxa(parseFloat(e.target.value))} />
          </div>
        </div>

        <aside className="sim-result">
          <span className="sim-result-eyebrow">Parcela mensal estimada</span>
          <div className="sim-result-val">
            R$ {Math.round(parcela).toLocaleString("pt-BR")}
            <em>/ mês</em>
          </div>
          <div className="sim-result-summary">
            <div><span>Valor financiado</span><b>R$ {Math.round(principal).toLocaleString("pt-BR")}</b></div>
            <div><span>Total a pagar</span><b>R$ {Math.round(totalPago).toLocaleString("pt-BR")}</b></div>
            <div><span>Juros no período</span><b>R$ {Math.round(juros).toLocaleString("pt-BR")}</b></div>
          </div>
          <div className="sim-result-actions">
            <a className="btn-primary" href="#bancos">Continuar no banco</a>
            <a className="btn-ghost" href="https://wa.me/5521997220589?text=Gostaria%20de%20ajuda%20com%20o%20financiamento" target="_blank" rel="noopener">Falar com consultor</a>
          </div>
          <div className="sim-fine">*Simulação aproximada pelo sistema Price. Não inclui tarifas, seguros (MIP/DFI) e taxa administrativa. Os valores oficiais são calculados pelo banco escolhido.</div>
        </aside>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="page-section reveal">
      <div className="page-section-head">
        <h2>Perguntas <em>frequentes</em></h2>
        <p>O que você precisa saber antes de financiar. Se ficar dúvida, a Beatriz ou outro consultor responde em minutos.</p>
      </div>
      <div className="faq">
        {FAQS.map((f, i) => (
          <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{f.q}</span>
              <span className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div className="faq-a"><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinanciamentoApp() {
  const [t, setTweak] = useTweaks({ brand: "aurum", motion: "on" });
  React.useEffect(() => {
    document.documentElement.setAttribute("data-brand", t.brand);
    document.documentElement.setAttribute("data-motion", t.motion);
  }, [t.brand, t.motion]);
  useReveal();

  return (
    <>
      <div className="grain" />
      <Nav brand={t.brand} />

      <main className="page">
        <section className="ph-hero">
          <div>
            <span className="eyebrow ph-hero-eyebrow">Financiamento e bancos</span>
            <h1>Da simulação<br/>às <em>chaves</em>, sem<br/>fricção.</h1>
            <p>Trabalhamos com os cinco principais bancos do país. Simule conosco, escolha a melhor condição e siga para o simulador oficial. A New Home cuida da burocracia.</p>
          </div>
          <div className="ph-hero-meta">
            <dl>
              <div><dt>Bancos parceiros</dt><dd>05</dd></div>
              <div><dt>Prazo máximo</dt><dd>35<em>anos</em></dd></div>
              <div><dt>Financiamento até</dt><dd>80<em>%</em></dd></div>
              <div><dt>Aprovação inicial</dt><dd>72<em>h</em></dd></div>
            </dl>
          </div>
        </section>

        <div className="page-wrap">
          <HowItWorks />
          <BanksGrid />
          <Simulator />
          <FAQ />
        </div>

        <section className="page-cta reveal">
          <div>
            <h3>Quer <em>orientação personalizada</em>?</h3>
            <p>Cuidamos de toda a documentação do financiamento — escolha do banco, contrato, avaliação, assessoria jurídica e entrega das chaves.</p>
          </div>
          <div className="page-cta-actions">
            <a className="primary" href="https://wa.me/5521997220589?text=Gostaria%20de%20ajuda%20com%20o%20financiamento" target="_blank" rel="noopener">Falar com consultor</a>
            <a className="ghost" href="quem-somos.html">Sobre a New Home</a>
          </div>
        </section>
      </main>

      <Footer brand={t.brand} />
      <Chat brand={t.brand} />

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

ReactDOM.createRoot(document.getElementById("root")).render(<FinanciamentoApp />);
