import { motion } from "motion/react";

const dishes = [
  {
    id: 1,
    name: "Golden Oysters",
    price: 18,
    description: "Fresh Atlantic oysters with champagne foam and gold flake.",
    image: "https://images.unsplash.com/photo-1553247407-23251ce81f59?auto=format&fit=crop&q=80&w=800",
    cat: "Starters"
  },
  {
    id: 2,
    name: "Truffle Risotto",
    price: 32,
    description: "Creamy arborio rice infused with black winter truffle.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
    cat: "Main Course"
  },
  {
     id: 3,
     name: "Lamb Cutlets",
     price: 45,
     description: "Herb-crusted lamb rack with pomegranate reduction.",
     image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800",
     cat: "Main Course"
  }
];

export const DishesGrid = () => {
  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
        <div className="zigzag-border-bottom opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="mb-16">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-brand-rust mb-4">OUR KITCHEN</h3>
            <h2 className="text-5xl font-serif font-bold">Chef's Signature</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-brand-cream border border-brand-dark/5 shadow-sm">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-rust text-white text-xl font-serif font-bold w-12 h-12 flex items-center justify-center rounded-sm shadow-lg">
                  ${dish.price}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-brand-rust transition-colors">{dish.name}</h3>
              <p className="text-brand-dark/60 text-sm italic mb-4">{dish.description}</p>
              <button className="bg-brand-rust text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-brand-dark transition-all">
                  Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
