import { motion } from "motion/react";

export const Specials = () => {
  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Circular Special Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 bg-brand-rust rounded-full shadow-2xl flex flex-col items-center justify-center text-white p-12 text-center ring-12 ring-brand-rust/20">
                    <h3 className="text-xs font-bold tracking-widest mb-4">DAILY SPECIALS</h3>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">1. Rib Eye</h2>
                    <p className="text-sm opacity-90 leading-relaxed mb-6 font-light">
                        Premium Prime Rib Eye steak, aged for 28 days, served with truffle butter and seasonal herb roasted root vegetables.
                    </p>
                    <div className="text-4xl font-serif font-bold mb-6">
                        <span className="text-lg">$</span>29<span className="text-lg">.99</span>
                    </div>
                    <button className="bg-white text-brand-rust px-8 py-2 rounded-full font-bold text-xs tracking-widest hover:bg-brand-dark hover:text-white transition-all uppercase">
                        Order Now
                    </button>
                </div>
                
                {/* Visual accents like in the image */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                    New
                </div>
            </div>
          </motion.div>

          {/* About Section Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-4">
               <div className="h-[1px] w-12 bg-brand-rust" />
               <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-rust">About ANKKH</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
               Crafting Culinary<br/>Masterpieces
            </h2>
            <p className="text-brand-dark/70 leading-loose text-lg">
                ANKKH is more than a restaurant; it's a sanctuary of taste. Inspired by ancient luxury and modern refinement, we bring you a dining experience that transcends the ordinary. Every ingredient is hand-selected, every dish is a hand-crafted work of art.
            </p>
            <button className="bg-brand-rust text-white px-10 py-4 rounded font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-dark transition-all shadow-lg">
                Read More
            </button>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                   <h4 className="text-3xl font-serif font-bold mb-2">15+</h4>
                   <p className="text-xs tracking-widest text-brand-dark/50 uppercase font-bold">Years of Excellence</p>
                </div>
                <div>
                   <h4 className="text-3xl font-serif font-bold mb-2">240</h4>
                   <p className="text-xs tracking-widest text-brand-dark/50 uppercase font-bold">Signature Dishes</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
