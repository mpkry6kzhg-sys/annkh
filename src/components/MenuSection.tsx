import { motion } from "motion/react";

const menuItems = [
  {
    category: "STARTERS",
    items: [
      { name: "Calamari Fritti", price: "14", desc: "Lightly battered squid with spicy marinara." },
      { name: "Caprese Boutique", price: "16", desc: "Heirloom tomatoes, buffalo mozzarella, basil foam." },
      { name: "ANKKH Mezze", price: "22", desc: "Artisanal hummus, spiced olives, house-made pita." },
    ]
  },
  {
    category: "MAIN COURSES",
    items: [
      { name: "Wagyu Gold Rib Eye", price: "85", desc: "A4 Wagyu, garlic emulsion, asparagus." },
      { name: "Sea Bass En Papillote", price: "42", desc: "Fresh catch, seasonal greens, lemon butter." },
      { name: "Wild Mushroom Gnocchi", price: "28", desc: "Hand-rolled gnocchi, porcini, parmesan crisp." },
    ]
  },
  {
    category: "DESSERTS",
    items: [
      { name: "Saffron Cheesecake", price: "12", desc: "Middle-eastern twist, honey glaze." },
      { name: "Dark Chocolate Fondant", price: "14", desc: "70% cacao, vanilla bean gelato." },
    ]
  }
];

export const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-brand-cream relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-brand-rust mb-4">GASTRONOMY</h3>
            <h2 className="text-5xl font-serif font-bold">The Menu</h2>
        </div>

        <div className="space-y-16">
          {menuItems.map((cat, idx) => (
            <motion.div 
              key={cat.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                 <h4 className="text-xs font-bold tracking-widest text-brand-rust uppercase">{cat.category}</h4>
                 <div className="flex-1 h-[1px] bg-brand-dark/10" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                {cat.items.map((item) => (
                  <div key={item.name} className="group cursor-pointer">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xl font-serif font-bold group-hover:text-brand-rust transition-colors">{item.name}</span>
                        <div className="flex-1 border-b border-dotted border-brand-dark/20 mx-4 mb-1" />
                        <span className="font-bold text-brand-rust">${item.price}</span>
                    </div>
                    <p className="text-sm text-brand-dark/50 italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="border-2 border-brand-rust text-brand-rust px-10 py-3 rounded font-bold text-xs tracking-widest uppercase hover:bg-brand-rust hover:text-white transition-all">
                Download PDF Menu
            </button>
        </div>
      </div>
    </section>
  );
};
