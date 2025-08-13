import { useMemo, useState } from "react";
import { MENU_ITEMS } from "../data/menu";


export default function Menu() {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Breakfast", "Lunch", "Dinner"];

  const items = useMemo(() => {
    const base = tab === "All" ? MENU_ITEMS : MENU_ITEMS.filter(i => i.type === tab);
    return base.filter(i =>
      i.name.toLowerCase().includes(q.trim().toLowerCase())
    );
  }, [q, tab]);

  return (
    <section id="menu" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">Our Menu</h2>
            <p className="text-gray-600 mt-1">Balanced plates with a clear nutrition snapshot.</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes (e.g., paneer)"
              className="w-full sm:w-72 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full border transition ${
                tab === t ? "bg-black text-white border-black" : "border-gray-300 hover:border-black"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <article key={item.id} className="bg-kora rounded-xl overflow-hidden shadow-card hover:shadow-lg transition">
              <div className="aspect-[4/3] bg-gray-100">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                 
                  <span
                    className={`w-3 h-3 rounded-full inline-block ${item.veg ? "bg-green-600" : "bg-red-600"}`}
                    title={item.veg ? "Vegetarian" : "Non-Vegetarian"}
                    aria-label={item.veg ? "Vegetarian" : "Non-Vegetarian"}
                  />
                </div>
                <p className="text-gray-600 text-sm">{item.type}</p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-black">₹{item.price}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-pista text-black border border-black/20">
                    {item.kcal} kcal
                  </span>
                </div>

                <button
                  className="mt-4 w-full px-4 py-2 rounded-lg bg-saffron text-white hover:bg-kesar transition"
                  aria-label={`Add ${item.name}`}
                >
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
