import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Menu from "./components/Menu";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const text = "Deeveloped with ❤️ by Afroz....";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(typing);
    }, 100);

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3100);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 overflow-hidden">
          <h1 className="text-3xl md:text-5xl font-bold text-white neon-glow animate-fade-out">
            {displayText}
          </h1>
          <style>
            {`
              @keyframes neonPulse {
                0%, 100% { text-shadow: 0 0 5px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff; }
                50% { text-shadow: 0 0 10px #ff33ff, 0 0 30px #ff33ff, 0 0 60px #ff33ff; }
              }
              @keyframes fadeOut {
                0% { opacity: 1; }
                80% { opacity: 1; }
                100% { opacity: 0; }
              }
              .neon-glow {
                animation: neonPulse 1.5s infinite alternate;
              }
              .animate-fade-out {
                animation: fadeOut 3.1s forwards;
              }
            `}
          </style>
        </div>
      ) : (
        <div className="animate-main-fade-in">
          <Navbar />
          <Hero />
          <WhyChooseUs />
          <Menu />
          <Footer />
          <ChatWidget />

          <style>
            {`
              @keyframes mainFadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-main-fade-in {
                animation: mainFadeIn 0.8s ease-out forwards;
              }
            `}
          </style>
        </div>
      )}
    </>
  );
}
