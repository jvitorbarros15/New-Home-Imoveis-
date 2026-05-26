// New Home Imóveis — floating chat with consultor

const CHAT_URL = "https://dtagjkqubrduxpurssin.supabase.co/functions/v1/chat";
const CHAT_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0YWdqa3F1YnJkdXhwdXJzc2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MjY0MzgsImV4cCI6MjA5NTMwMjQzOH0.yDbBSZn03WwmyDy4chwH91cWJJw1whirq49EPVgwPFE";

export function Chat({ brand }) {
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

    // Convert message history to API format (skip the initial greeting)
    const history = next
      .slice(1)    // skip initial agent greeting — it's in the system prompt
      .slice(0, -1) // exclude the message just added (sent as "message")
      .map(m => ({
        role: m.from === "agent" ? "assistant" : "user",
        content: m.text,
      }));

    let reply = "";
    try {
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${CHAT_KEY}`,
        },
        body: JSON.stringify({ message: trimmed, history }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      reply = data.answer || "";
    } catch {
      reply = "Desculpe, tive um problema técnico. Pode me chamar no WhatsApp +55 21 99722-0589?";
    }
    if (!reply) reply = "Pode me contar um pouco mais sobre o que você procura?";

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
          <a href="https://wa.me/5521997220589" target="_blank" rel="noopener">WhatsApp</a>
          ·
          <a href="tel:+5521997220589">Ligar</a>
        </footer>
      </div>
    </>
  );
}
