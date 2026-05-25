// New Home Imóveis — floating chat with consultor

function Chat({ brand }) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [unread, setUnread] = React.useState(1);
  const [messages, setMessages] = React.useState([
    {
      from: "agent",
      text: "Olá! Sou a Beatriz, consultora da New Home. Posso te ajudar a encontrar o imóvel ideal — comprar, alugar ou anunciar?",
      time: "agora",
    },
  ]);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, open]);

  React.useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  const QUICK = [
    "Quero comprar um imóvel",
    "Quero alugar",
    "Anunciar meu imóvel",
    "Falar com um humano",
  ];

  async function send(text) {
    const trimmed = (text || "").trim();
    if (!trimmed) return;
    setInput("");
    const next = [...messages, { from: "user", text: trimmed, time: "agora" }];
    setMessages(next);
    setTyping(true);

    // Build conversational prompt
    const history = next
      .map((m) => `${m.from === "agent" ? "Beatriz" : "Cliente"}: ${m.text}`)
      .join("\n");

    const prompt =
      "Você é Beatriz, consultora imobiliária da New Home Imóveis, uma imobiliária de alto padrão no Rio de Janeiro. " +
      "Atende clientes em busca de imóveis de luxo (apartamentos, coberturas, casas em condomínio) em bairros como Barra da Tijuca, Leblon, Ipanema, Lagoa, Joá, Itanhangá. " +
      "Tom: cordial, profissional, discreto, em português brasileiro. Curto: 1 a 2 frases por resposta. Faça uma única pergunta de qualificação por vez (região? quartos? orçamento? momento?). " +
      "Nunca invente preços ou imóveis específicos. Se o cliente pedir para falar com humano, diga que vai conectar via WhatsApp +55 21 99999-9999.\n\n" +
      "Conversa até aqui:\n" + history + "\n\nBeatriz:";

    let reply = "";
    try {
      reply = await window.claude.complete(prompt);
      reply = (reply || "").replace(/^Beatriz:\s*/i, "").trim();
    } catch (e) {
      reply = "Desculpe, tive um problema técnico. Pode me chamar no WhatsApp +55 21 99999-9999?";
    }
    if (!reply) reply = "Pode me contar um pouco mais sobre o que você procura?";

    // small natural delay
    await new Promise((r) => setTimeout(r, 350));
    setTyping(false);
    setMessages((m) => [...m, { from: "agent", text: reply, time: "agora" }]);
  }

  return (
    <>
      <button
        className={`chat-fab ${open ? "open" : ""}`}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="chat-fab-icon chat-fab-chat">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>
        <span className="chat-fab-icon chat-fab-close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </span>
        {unread > 0 && !open && <span className="chat-badge">{unread}</span>}
      </button>

      <div className={`chat-panel ${open ? "show" : ""}`} role="dialog" aria-label="Chat com consultor">
        <header className="chat-head">
          <div className="chat-avatar">
            <span>BS</span>
            <span className="chat-status" />
          </div>
          <div className="chat-who">
            <div className="chat-name">Beatriz Sá <span className="chat-creci">CRECI-RJ 78.402</span></div>
            <div className="chat-role">
              <span className="chat-dot" /> Online agora · responde em poucos minutos
            </div>
          </div>
          <button className="chat-x" onClick={() => setOpen(false)} aria-label="Fechar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </header>

        <div className="chat-body" ref={scrollRef}>
          <div className="chat-day">Hoje</div>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              <div className="chat-bubble">{m.text}</div>
              <div className="chat-time">{m.time}</div>
            </div>
          ))}
          {typing && (
            <div className="chat-msg agent">
              <div className="chat-bubble chat-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          {messages.length === 1 && !typing && (
            <div className="chat-quick">
              {QUICK.map((q) => (
                <button key={q} onClick={() => send(q)}>{q}</button>
              ))}
            </div>
          )}
        </div>

        <form
          className="chat-input"
          onSubmit={(e) => { e.preventDefault(); send(input); }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escreva uma mensagem…"
            aria-label="Mensagem"
          />
          <button type="submit" aria-label="Enviar" disabled={!input.trim()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        <footer className="chat-foot">
          Prefere outro canal?
          <a href="https://wa.me/5521999999999" target="_blank" rel="noopener">WhatsApp</a>
          ·
          <a href="tel:+5521999999999">Ligar</a>
        </footer>
      </div>
    </>
  );
}

window.Chat = Chat;
