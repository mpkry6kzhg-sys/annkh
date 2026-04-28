import { motion } from "motion/react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1550966841-396ad886fe5c?auto=format&fit=crop&q=80&w=800",
    title: "Crystal Dining",
    desc: "A glass-roofed sanctuary for midday brilliance."
  },
  {
    url: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800",
    title: "Terrace Night",
    desc: "String lights and stardust for unforgettable evenings."
  },
  {
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    title: "The Mezzanine",
    desc: "Intimate overlooking of our grand culinary stage."
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    title: "Grand Hall",
    desc: "Where history and luxury meet at your table."
  }
];

export const Environment = () => {
  return (
    <section id="environment" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-brand-rust mb-4">THE AMBIANCE</h3>
            <h2 className="text-5xl font-serif font-bold">Immersive Environment</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-20">
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] group overflow-hidden"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h4 className="text-white font-serif text-2xl mb-2">{img.title}</h4>
                  <p className="text-white/70 text-sm italic">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Descriptive Text Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center pt-24 border-t border-brand-dark/10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-4xl font-serif font-bold mb-8">A Symphony of Light & Space</h3>
                <p className="text-brand-dark/70 leading-relaxed text-lg mb-8">
                    Our spaces are designed to provide a perfect backdrop for every occasion. From the intimate mezzanine levels with hand-painted murals to the breath-taking rooftop terrace illuminated by hundreds of fairy lights, ANKKH offers an environment that stimulates every sense.
                </p>
                <div className="flex space-x-12">
                    <div>
                        <span className="block text-brand-rust font-serif text-3xl font-bold">450m²</span>
                        <span className="text-[10px] font-bold tracking-widest text-brand-dark/40 uppercase">Total Space</span>
                    </div>
                    <div>
                        <span className="block text-brand-rust font-serif text-3xl font-bold">3 Rooms</span>
                        <span className="text-[10px] font-bold tracking-widest text-brand-dark/40 uppercase">Dining Areas</span>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] bg-white p-4 shadow-2xl skew-y-1"
            >
                 <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
                    alt="Atmosphere" 
                    className="w-full h-full object-cover grayscale contrast-125"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-rust -z-10" />
            </motion.div>
        </div>
      </div>
    </section>
  );
};
