import { useEffect, useRef, useState } from "react";
import type { BookingDraft, BookingStep, ChatMessage } from "../../types";
import Icon from "../ui/Icon";
import {
  ASSISTANT_NAME,
  SUGGESTED_QUESTIONS,
  WELCOME_MESSAGE,
  getAssistantReply,
} from "./chatEngine";

let idCounter = 0;
const nextId = () => `msg-${++idCounter}`;

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: nextId(), role: "assistant", text: WELCOME_MESSAGE, lang: "en" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [bookingStep, setBookingStep] = useState<BookingStep>("idle");
  const [bookingDraft, setBookingDraft] = useState<BookingDraft>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  function openAssistant() {
    setIsOpen(true);
    setHasOpenedOnce(true);
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: nextId(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulated "thinking" delay so the assistant feels alive.
    // Replace this whole block with a real async call when wiring a live AI
    // backend (see chatEngine.ts header comment for the recommended shape).
    window.setTimeout(() => {
      const reply = getAssistantReply(trimmed, bookingStep, bookingDraft);
      setBookingStep(reply.bookingStep);
      setBookingDraft(reply.bookingDraft);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "assistant", text: reply.text, lang: reply.lang },
      ]);
      setIsTyping(false);
    }, 700 + Math.random() * 500);
  }

  return (
    <>
      {/* Floating launcher button */}
      {!isOpen && (
        <button
          onClick={openAssistant}
          aria-label="Open PearlCare AI Assistant"
          className="fixed z-40 bottom-5 right-5 sm:bottom-6 sm:right-6 group"
        >
          <span className="absolute inset-0 rounded-full animate-pulse-glow" />
          <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-jade to-ink text-white shadow-soft animate-float-slow group-hover:scale-105 transition-transform duration-200 backdrop-blur">
            <Icon name="chat" className="w-6 h-6" />
            {!hasOpenedOnce && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-sand border-2 border-cream" />
            )}
          </span>
          <span className="hidden sm:block absolute bottom-1/2 translate-y-1/2 right-full mr-3 whitespace-nowrap bg-ink text-cream text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with PearlCare AI
          </span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="PearlCare AI Assistant chat"
          className="fixed z-50 inset-x-0 bottom-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full sm:w-[380px] h-[85vh] sm:h-[560px] max-h-[640px] flex flex-col bg-surface sm:rounded-2xl2 shadow-soft border border-line overflow-hidden animate-pop-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 bg-ink text-cream">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-jade/30 border border-jade/40 flex items-center justify-center">
                <Icon name="chat" className="w-5 h-5" />
              </span>
              <div>
                <p className="font-semibold text-sm leading-tight">{ASSISTANT_NAME}</p>
                <p className="text-[11px] text-cream/60">English • اردو • Roman Urdu</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chat"
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Icon name="minimize" className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-cream/40">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-slide-up`}
              >
                <div
                  dir={m.lang === "ur" ? "rtl" : "ltr"}
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-jade text-white rounded-br-sm"
                      : "bg-surface border border-line text-ink rounded-bl-sm shadow-card"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-surface border border-line rounded-2xl rounded-bl-sm px-4 py-3 shadow-card flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-ink-500/50 animate-typing-dot"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions */}
          {messages.length <= 2 && !isTyping && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-jade/30 text-jade-600 hover:bg-jade-100 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 px-4 py-3 border-t border-line bg-surface"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type in English, اردو, or Roman Urdu…"
              className="flex-1 rounded-full border border-line px-4 py-2.5 text-sm bg-cream/60 focus:bg-surface focus:border-jade transition-colors"
              aria-label="Message the AI assistant"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim()}
              className="w-10 h-10 shrink-0 rounded-full bg-jade text-white flex items-center justify-center disabled:opacity-40 hover:bg-jade-600 transition-colors"
            >
              <Icon name="send" className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
