import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="https://img.icons8.com/color/48/000000/restaurant.png"
            alt="logo"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="font-extrabold text-xl text-black tracking-wide transition-colors duration-300 group-hover:text-green-600">
            Simply<span className="text-green-600">True</span>Foods
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          {["Why Us", "Menu", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                className="relative hover:text-green-600 transition-colors duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
                href={`#${item.toLowerCase().replace(" ", "")}`}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#menu"
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
            >
              Order Now
            </a>
          </li>
        </ul>

        <button
  aria-label="Toggle Menu"
  className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-200 transition-all duration-300"
  onClick={() => setOpen((v) => !v)}
>
  {open ? (
    <AiOutlineClose size={24} className="text-black" />
  ) : (
    <AiOutlineMenu size={24} className="text-black" />
  )}
</button>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="px-4 pb-4 space-y-3 font-medium">
          {["Why Us", "Menu", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                className="block p-2 rounded hover:bg-green-50 transition-all duration-300"
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="block text-center p-2 rounded bg-green-600 text-white hover:bg-green-700 transition-all duration-300"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
