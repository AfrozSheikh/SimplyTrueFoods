import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { by: "bot", text: "👋 Namaste! I'm your meal buddy at SimplyTrueFoods. What are you in the mood for today?" }
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
    if (s.includes("breakfast"))  return "🥗 Breakfast Ideas: Idli Sambar, Masala Oats, or Poha for a healthy start!";
    if (s.includes("vegan"))      return "🌱 Vegan Options: Dal Khichdi, Veg Pulao, Tofu Curry, and Fresh Salads.";
    if (s.includes("protein"))    return "💪 High Protein: Paneer Tikka Bowl, Grilled Chicken Thali, or Chana Salad.";
    if (s.includes("snack"))      return "🍪 Snacks: Soya Cutlets, Veg Wraps, or Masala Papad for light cravings.";
    if (s.includes("lunch"))      return "🍛 Lunch: Rajma Chawal, Paneer Butter Masala with Roti, or Veg Biryani.";
    if (s.includes("dinner"))     return "🌙 Dinner: Dal Tadka with Jeera Rice, Veg Korma, or Stuffed Paratha.";
    if (s.includes("budget") || s.includes("cheap")) return "💸 Budget Meals start at ₹99 — try our Idli Sambar or Veg Thali!";
    return "You can ask for: 'breakfast', 'vegan', 'protein', 'lunch', 'dinner', or 'snacks'.";
  };

  const send = (textOverride) => {
    const text = textOverride || inp.trim();
    if (!text) return;
    setMsgs(m => [...m, { by: "user", text }]);
    setInp("");
    setTimeout(() => setMsgs(m => [...m, { by: "bot", text: reply(text) }]), 450);
  };

  const quickReplies = ["Breakfast", "Vegan", "Protein", "Snacks", "Lunch", "Dinner", "Budget Meals"];

  return (
    <>
     
      <button
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full bg-black text-white text-2xl shadow-card hover:opacity-90 focus:outline-none"
        onClick={() => setOpen(v => !v)}
      >
        {open ? "×" : "💬"}
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          className="fixed bottom-24 right-5 z-50 w-[90vw] sm:w-96 rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-black text-white flex items-center justify-between">
            <div className="font-semibold">💬 SimplyTrueFoods Chat</div>
            <button aria-label="Close chat" onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-3 space-y-2 scroll-thin bg-gray-50">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] px-3 py-2 rounded-lg ${m.by==="bot" ? "bg-pista text-black" : "bg-kora ml-auto"}`}>
                {m.text}
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="flex flex-wrap gap-2 px-3 py-2 border-t bg-white">
            {quickReplies.map((qr, idx) => (
              <button
                key={idx}
                onClick={() => send(qr)}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-kesar transition"
              >
                {qr}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2 bg-white">
            <input
              value={inp}
              onChange={(e)=>setInp(e.target.value)}
              onKeyDown={(e)=> e.key==="Enter" && send()}
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button
              onClick={() => send()}
              className="px-3 py-2 rounded-lg bg-purple-300 font-bold text-black hover:bg-kesar transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
