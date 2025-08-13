import { useMemo, useState } from "react";
import { MENU_ITEMS } from "../data/menu";

export default function Menu() {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Breakfast", "Lunch", "Dinner"];

  const items = useMemo(() => {
    const base =
      tab === "All" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.type === tab);
    return base.filter((i) =>
      i.name.toLowerCase().includes(q.trim().toLowerCase())
    );
  }, [q, tab]);

  return (
    <section
      id="menu"
      className="bg-gradient-to-br from-black via-purple-900 to-black py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-300 drop-shadow-[0_0_5px_#a855f7]">
              Our Menu
            </h2>
            <p className="text-purple-200 mt-1">
              Balanced plates with a clear nutrition snapshot.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes (e.g., paneer)"
              className="w-full sm:w-72 px-4 py-2 rounded-lg bg-purple-950/40 border border-purple-500/40 text-purple-100 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                tab === t
                  ? "bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-500/40"
                  : "border-purple-500/30 text-purple-200 hover:border-purple-400 hover:text-purple-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-purple-950/30 rounded-xl overflow-hidden shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 border border-purple-500/20 backdrop-blur-md transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-purple-900/40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-purple-200">
                    {item.name}
                  </h3>
                  <span
                    className={`w-3 h-3 rounded-full inline-block ${
                      item.veg ? "bg-green-500" : "bg-red-500"
                    }`}
                    title={item.veg ? "Vegetarian" : "Non-Vegetarian"}
                    aria-label={item.veg ? "Vegetarian" : "Non-Vegetarian"}
                  />
                </div>
                <p className="text-purple-400 text-sm">{item.type}</p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-purple-300">
                    ₹{item.price}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-800 text-purple-200 border border-purple-500/40">
                    {item.kcal} kcal
                  </span>
                </div>

                <button
                  className="mt-4 w-full px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
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
