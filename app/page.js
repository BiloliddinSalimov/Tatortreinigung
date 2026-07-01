"use client";
import { useState } from "react";
import { s } from "../lib/style";
import Hover from "../components/Hover";
import BackgroundLayers from "../components/BackgroundLayers";
import HomeCard from "../components/HomeCard";
import AboutModal from "../components/modals/AboutModal";
import PortfolioModal from "../components/modals/PortfolioModal";
import FaqModal from "../components/modals/FaqModal";
import ChatModal from "../components/modals/ChatModal";
import { PhoneIcon } from "../components/icons";
import { PHONE } from "../lib/siteConfig";

export default function Page() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [aiDraft, setAiDraft] = useState("");
  const [chatDraft, setChatDraft] = useState("");
  const [messages, setMessages] = useState([]);
  const [sending, setSending] = useState(false);

  async function ask(text) {
    const t = (text || "").trim();
    if (!t || sending) return;
    const history = [...messages, { role: "user", text: t }];
    setMessages(history);
    setSending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      const reply = (
        data.text ||
        data.error ||
        "Entschuldigung, bitte versuchen Sie es erneut."
      ).trim();
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "Es gab ein Verbindungsproblem. Bitte rufen Sie uns direkt an: +43 660 8313103.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  const sendFromBar = () => {
    const t = aiDraft;
    if (!t.trim()) return;
    setChatOpen(true);
    setAiDraft("");
    ask(t);
  };
  const sendChat = () => {
    const t = chatDraft;
    if (!t.trim()) return;
    setChatDraft("");
    ask(t);
  };

  return (
    <div
      className="app-shell"
      style={s(
        "position:relative; margin:0 auto; overflow:hidden; font-family:var(--font-sans),system-ui,sans-serif; background:#050f19;",
      )}
    >
      <BackgroundLayers />

      {/* centered glass card */}
      <div
        style={s(
          "position:relative; z-index:2; height:100%; display:flex; align-items:center; justify-content:center; padding:22px 15px;",
        )}
      >
        <HomeCard
          aiDraft={aiDraft}
          setAiDraft={setAiDraft}
          onSendAi={sendFromBar}
          onOpenAbout={() => setAboutOpen(true)}
          onOpenPortfolio={() => setPortfolioOpen(true)}
          onOpenFaq={() => setFaqOpen(true)}
        />
      </div>

      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
      {portfolioOpen && (
        <PortfolioModal onClose={() => setPortfolioOpen(false)} />
      )}
      {faqOpen && <FaqModal onClose={() => setFaqOpen(false)} />}
      {chatOpen && (
        <ChatModal
          messages={messages}
          sending={sending}
          draft={chatDraft}
          setDraft={setChatDraft}
          onSend={sendChat}
          onClose={() => setChatOpen(false)}
        />
      )}

      {/* floating call button */}
      <div
        style={s(
          "position:absolute; right:18px; bottom:24px; z-index:5; width:62px; height:62px;",
        )}
      >
        <span
          style={s(
            "position:absolute; inset:0; border-radius:50%; animation:callpulse 2.6s ease-out infinite;",
          )}
        />
        <Hover
          as="a"
          href={"tel:" + PHONE}
          aria-label="Jetzt anrufen"
          base="position:relative; display:flex; align-items:center; justify-content:center; width:62px; height:62px; border-radius:50%; background:linear-gradient(180deg,#22996A 0%,#1E8A5F 100%); box-shadow:0 14px 30px rgba(30,138,95,0.5), inset 0 1px 0 rgba(255,255,255,0.25); transition:filter .16s ease, transform .16s ease;"
          hover="filter:brightness(1.08); transform:translateY(-2px);"
        >
          <PhoneIcon w={27} />
        </Hover>
      </div>
    </div>
  );
}
