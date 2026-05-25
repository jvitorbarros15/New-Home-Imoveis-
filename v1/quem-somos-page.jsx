// Quem Somos page

function QuemSomos() {
  return (
    <main className="page">
      <section className="ph-hero">
        <div>
          <span className="eyebrow ph-hero-eyebrow">Quem somos</span>
          <h1>Quinze anos<br/>dedicados a<br/>uma <em>boa casa</em>.</h1>
          <p>A New Home Imóveis nasceu em 2010, no Rio de Janeiro, com uma convicção simples: vender um imóvel é, antes de tudo, ouvir. Somos especialistas em residências de alto padrão na Barra da Tijuca, Recreio e região — com curadoria, discrição e o cuidado de quem entende cada bairro.</p>
        </div>
        <div className="ph-hero-meta">
          <dl>
            <div><dt>Fundação</dt><dd>2010</dd></div>
            <div><dt>Anos no mercado</dt><dd>15<em>anos</em></dd></div>
            <div><dt>Vendas acumuladas</dt><dd>R$ 600<em>milhões</em></dd></div>
            <div><dt>CRECI</dt><dd style={{ fontSize: 22, letterSpacing: 0 }}>RJ-7609 J</dd></div>
          </dl>
        </div>
      </section>

      <div className="page-wrap">
        <section className="page-section reveal">
          <div className="qs-manifesto">
            <div className="qs-figure" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&auto=format&fit=crop)" }}>
              <div className="qs-figure-caption">
                <span><b>BARRA DA TIJUCA</b></span>
                <span>RIO DE JANEIRO · 22°99'34"S</span>
              </div>
            </div>
            <div className="qs-copy">
              <span className="eyebrow" style={{ color: "var(--accent)" }}>Manifesto</span>
              <p className="qs-lede">Acreditamos que a casa é o lugar mais íntimo de uma vida. Por isso tratamos cada negociação com o tempo, a escuta e o cuidado que ela merece — do briefing à entrega das chaves.</p>
              <p>Especializada na intermediação de vendas de empreendimentos na <b>Barra da Tijuca, Recreio e região</b>, a New Home atua desde 2010 com profissionalismo e estratégias inovadoras, alcançando <b>mais de R$ 600 milhões em vendas</b> e milhares de clientes satisfeitos.</p>
              <p>Nosso foco é oferecer um <b>atendimento exclusivo e diferenciado</b>, conectando construtoras a compradores qualificados por meio de uma estratégia de marketing digital robusta e um time altamente capacitado.</p>
              <div className="qs-pull">"Não vendemos metros quadrados. Apresentamos lugares onde a vida acontece com qualidade."</div>
            </div>
          </div>
        </section>

        <section className="page-section reveal">
          <div className="page-section-head">
            <h2>Nossa <em>trajetória</em></h2>
            <p>De uma pequena equipe na Barra a uma referência em imóveis de alto padrão no Rio. Algumas marcas dessa caminhada.</p>
          </div>
          <div className="timeline">
            <div className="tl-step">
              <div className="tl-year">2010</div>
              <h4>Fundação</h4>
              <p>Início das operações na Barra da Tijuca com foco em lançamentos de alto padrão.</p>
            </div>
            <div className="tl-step">
              <div className="tl-year">2015</div>
              <h4>R$ 100M</h4>
              <p>Atingimos R$ 100 milhões em vendas acumuladas, com expansão para o Recreio.</p>
            </div>
            <div className="tl-step">
              <div className="tl-year">2019</div>
              <h4>Marketing digital</h4>
              <p>Estruturação do time de marketing digital — uma das primeiras imobiliárias do Rio com estratégia integrada.</p>
            </div>
            <div className="tl-step">
              <div className="tl-year">2025</div>
              <h4>R$ 600M+</h4>
              <p>Mais de R$ 600 milhões em vendas e atuação consolidada em 36 bairros do Rio.</p>
            </div>
          </div>
        </section>

        <section className="page-section reveal">
          <div className="page-section-head">
            <h2>O que <em>nos guia</em></h2>
            <p>Quatro princípios que aparecem em cada conversa, cada visita e cada contrato.</p>
          </div>
          <div className="valores">
            <div className="valor">
              <span className="valor-num">01</span>
              <h4>Curadoria honesta</h4>
              <p>Mostramos o que faz sentido para a sua história — não o que precisa sair do nosso portfólio.</p>
            </div>
            <div className="valor">
              <span className="valor-num">02</span>
              <h4>Discrição</h4>
              <p>Trabalhamos com privacidade absoluta. Imóveis sensíveis e clientes exigentes são o nosso dia a dia.</p>
            </div>
            <div className="valor">
              <span className="valor-num">03</span>
              <h4>Atendimento exclusivo</h4>
              <p>Um consultor dedicado do briefing à entrega. Sem repasse, sem ruído.</p>
            </div>
            <div className="valor">
              <span className="valor-num">04</span>
              <h4>Resultado</h4>
              <p>Mais de R$ 600 milhões transacionados e milhares de famílias atendidas falam por nós.</p>
            </div>
          </div>
        </section>

        <section className="page-section reveal">
          <div className="page-section-head">
            <h2>O <em>time</em></h2>
            <p>Profissionais com experiência em alto padrão, formados pelo mercado e pelo bairro.</p>
          </div>
          <div className="equipe-grid">
            <div className="team-card">
              <div className="team-photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=facearea&facepad=2)" }} />
              <div className="team-name">Marcos Andrade</div>
              <div className="team-role">Diretor</div>
              <div className="team-creci">CRECI-RJ J-12345</div>
            </div>
            <div className="team-card">
              <div className="team-photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=facearea&facepad=2)" }} />
              <div className="team-name">Beatriz Sá</div>
              <div className="team-role">Consultora Sênior</div>
              <div className="team-creci">CRECI-RJ 78.402</div>
            </div>
            <div className="team-card">
              <div className="team-photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&q=80&auto=format&fit=facearea&facepad=2)" }} />
              <div className="team-name">Erick Leonardo</div>
              <div className="team-role">Consultor</div>
              <div className="team-creci">CRECI-RJ 51.507</div>
            </div>
            <div className="team-card">
              <div className="team-photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=facearea&facepad=2)" }} />
              <div className="team-name">Camila Reis</div>
              <div className="team-role">Marketing & Captação</div>
              <div className="team-creci">RJ · Barra da Tijuca</div>
            </div>
          </div>
        </section>

        <section className="page-section reveal">
          <div className="page-section-head">
            <h2>Onde <em>nos encontrar</em></h2>
            <p>Atendimento presencial com hora marcada. Visitas em todo o Rio de Janeiro.</p>
          </div>
          <div className="matriz">
            <div className="matriz-info">
              <h4>Matriz · Barra da Tijuca</h4>
              <h3>New Home Imóveis</h3>
              <address>
                <b>Avenida Embaixador Abelardo Bueno, 3500</b><br/>
                Sala 1022 · Barra da Tijuca<br/>
                Rio de Janeiro / RJ
              </address>
              <ul>
                <li><a href="tel:+5521997220589">(21) 99722-0589</a></li>
                <li><a href="tel:+5521964586464">(21) 96458-6464</a></li>
                <li><a href="mailto:contato@newhomeimoveis.com.br">contato@newhomeimoveis.com.br</a></li>
              </ul>
              <div className="matriz-meta">
                <span>CRECI-RJ 7609 J</span>
                <span>Seg–Sex · 09h–19h</span>
              </div>
            </div>
            <div className="matriz-map">
              <div className="map-grid" />
              <div className="road r1" />
              <div className="road r2" />
              <div className="road r3" />
              <div className="pin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="pin-label">Av. Abelardo Bueno, 3500</div>
            </div>
          </div>
        </section>
      </div>

      <section className="page-cta reveal">
        <div>
          <h3>Vamos <em>conversar</em>?</h3>
          <p>Conte para nós o que procura. Um consultor da New Home retorna em até um dia útil com uma seleção desenhada para o seu momento.</p>
        </div>
        <div className="page-cta-actions">
          <a className="primary" href="https://wa.me/5521997220589" target="_blank" rel="noopener">Falar no WhatsApp</a>
          <a className="ghost" href="index.html#contato">Enviar mensagem</a>
        </div>
      </section>
    </main>
  );
}

function QuemSomosApp() {
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
      <QuemSomos />
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

ReactDOM.createRoot(document.getElementById("root")).render(<QuemSomosApp />);
