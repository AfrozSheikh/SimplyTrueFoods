import { useEffect, useRef, useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { IoMdRestaurant } from "react-icons/io";
import { BsArrowUp } from "react-icons/bs";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { 
      by: "bot", 
      text: "👋 Namaste! I'm your meal buddy at SimplyTrueFoods. What are you craving today?",
      options: ["Breakfast", "Lunch", "Dinner", "Vegan", "High Protein"]
    }
  ]);
  const [inp, setInp] = useState("");
  const [isPulsing, setIsPulsing] = useState(false);
  const panelRef = useRef(null);
  const messagesEndRef = useRef(null);

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  
  useEffect(() => {
    if (!open) {
      const pulseInterval = setInterval(() => {
        setIsPulsing(v => !v);
      }, 2000);
      return () => clearInterval(pulseInterval);
    } else {
      setIsPulsing(false);
    }
  }, [open]);


  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  
  const reply = (userInput) => {
    const input = userInput.toLowerCase();
    const responses = {
      breakfast: {
        text: "🥗 **Breakfast Specials**:\n- Masala Dosa (₹120)\n- Poha with Peanuts (₹80)\n- Smoothie Bowl (₹150)\n\nWhich one tempts you?",
        options: ["Order Masala Dosa", "See Lunch Menu"]
      },
      lunch: {
        text: "🍛 **Lunch Combos**:\n- Thali (Veg/Non-Veg) ₹199\n- Biryani + Curd ₹160\n- Meal Box (3 Roti + Sabzi) ₹110",
        options: ["Order Thali", "Budget Options"]
      },
      dinner: {
        text: "🌙 **Dinner Recommendations**:\n- Dal Tadka + Rice (₹130)\n- Paneer Butter Masala (₹180)\n- Grilled Chicken (₹220)",
        options: ["I'm Vegan", "Show Snacks"]
      },
      vegan: {
        text: "🌱 **Vegan Delights**:\n- Vegan Buddha Bowl (₹160)\n- Coconut Curry (₹140)\n- Lentil Soup (₹90)\n\nAll 100% plant-based!",
        options: ["Order Now", "See Desserts"]
      },
      protein: {
        text: "💪 **High-Protein Picks**:\n- Chicken Tikka (₹220)\n- Soya Chilli (₹150)\n- Sprouts Salad (₹110)\n\nProtein-packed for fitness lovers!",
        options: ["Add to Cart", "Customize"]
      },
      default: {
        text: "Ask me about:\n• Menu items 🍽️\n• Dietary preferences (vegan/gluten-free)\n• Pricing 💰\n• Delivery time ⏱️",
        options: ["Breakfast", "Lunch", "Dinner", "Contact Support"]
      }
    };

    if (input.includes("breakfast")) return responses.breakfast;
    if (input.includes("lunch")) return responses.lunch;
    if (input.includes("dinner")) return responses.dinner;
    if (input.includes("vegan")) return responses.vegan;
    if (input.includes("protein")) return responses.protein;
    return responses.default;
  };

  const send = (textOverride) => {
    const text = textOverride || inp.trim();
    if (!text) return;
    
    setMsgs(m => [...m, { by: "user", text }]);
    setInp("");
    
    setTimeout(() => {
      const botResponse = reply(text);
      setMsgs(m => [...m, { 
        by: "bot", 
        text: botResponse.text,
        options: botResponse.options 
      }]);
    }, 800);
  };

  return (
    <>
      
      <button
        aria-label="Open chat"
        onClick={() => setOpen(v => !v)}
        className={`fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300
          ${open ? "bg-red-500 rotate-90" : "bg-gradient-to-br from-purple-600 to-black"}
          ${isPulsing && !open ? "animate-bounce" : ""}`}
      >
        {open ? (
          <FiX className="text-white text-2xl" />
        ) : (
          <div className="relative">
            <IoMdRestaurant className="text-white text-3xl" />
            <BsArrowUp className="absolute -top-2 -right-2 text-yellow-300 animate-float" />
          </div>
        )}
      </button>

     
      {open && (
        <div
          ref={panelRef}
          className="fixed bottom-28 right-6 z-50 w-[90vw] sm:w-96 h-[70vh] rounded-t-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white flex flex-col"
        >
          
          <div className="bg-gradient-to-r from-purple-600 to-black p-4 text-white flex justify-between items-center">
            <div className="font-bold flex items-center gap-2">
              <IoMdRestaurant /> SimplyTrueFoods Assistant
            </div>
            <button onClick={() => setOpen(false)} className="text-white">
              <FiX size={20} />
            </button>
          </div>

         
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {msgs.map((msg, i) => (
              <div key={i} className={`mb-4 flex ${msg.by === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${msg.by === "bot" 
                    ? "bg-purple-100 text-gray-800 rounded-bl-none" 
                    : "bg-purple-600 text-white rounded-br-none"}`}
                >
                  {msg.text.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          
          {msgs[msgs.length - 1]?.options && (
            <div className="p-3 bg-white border-t flex flex-wrap gap-2">
              {msgs[msgs.length - 1].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => send(option)}
                  className="px-3 py-1.5 text-sm rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

         
          <div className="p-3 bg-white border-t flex items-center gap-2">
            <input
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={() => send()}
              className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}

  
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-float {
          animation: float 1.5s infinite;
        }
      `}</style>
    </>
  );
}