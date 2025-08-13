import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { by: "bot", text: "Namaste! I'm your meal buddy. Vegan? High-protein? Tell me your vibe." }
  ]);
  const [inp, setInp] = useState("");
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const reply = (t) => {
    const s = t.toLowerCase();
    if (s.includes("breakfast"))  return "Try Idli Sambar or Masala Oats — light & energizing!";
    if (s.includes("vegan"))      return "Chana Salad and Dal Khichdi fit perfectly.";
    if (s.includes("protein"))    return "Paneer Tikka Bowl or Grilled Chicken Thali are protein-packed.";
    if (s.includes("budget") || s.includes("cheap")) return "Meals start at ₹99. Idli Sambar is a great pick!";
    return "You can say things like: 'vegan', 'high protein', or 'breakfast'.";
  };

  const send = () => {
    const text = inp.trim();
    if (!text) return;
    setMsgs(m => [...m, { by: "user", text }]);
    setInp("");
    setTimeout(() => setMsgs(m => [...m, { by: "bot", text: reply(text) }]), 450);
  };

  return (
    <>
     
      <button
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-black text-white shadow-card hover:opacity-90 focus:outline-none"
        onClick={() => setOpen(v => !v)}
      >
        {open ? "×" : "💬"}
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          className="fixed bottom-24 right-5 z-50 w-[90vw] sm:w-96 rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
        >
          <div className="px-4 py-3 bg-black text-white flex items-center justify-between">
            <div className="font-semibold">Chat with SimplyTrueFoods</div>
            <button aria-label="Close chat" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="h-72 overflow-y-auto p-3 space-y-2 scroll-thin">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] px-3 py-2 rounded-lg ${m.by==="bot" ? "bg-pista text-black" : "bg-kora ml-auto"}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              value={inp}
              onChange={(e)=>setInp(e.target.value)}
              onKeyDown={(e)=> e.key==="Enter" && send()}
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Ask e.g. 'vegan breakfast'"
              aria-label="Type your message"
            />
            <button
              onClick={send}
              className="px-3 py-2 rounded-lg bg-saffron text-white hover:bg-kesar transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
