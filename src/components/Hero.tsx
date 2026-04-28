import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "WELCOME TO ANKKH",
    subtitle: "THE IDEAL PLACE FOR YOUR TEMPTATIONS",
  },
  {
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "ROOFTOP ELEGANCE",
    subtitle: "DINE UNDER THE NEW YORK SKYLINE",
  },
  {
    image: "https://images.unsplash.com/photo-1550966841-396ad886fe5c?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "A GOLDEN EXPERIENCE",
    subtitle: "LUXURY IN EVERY BITE AND BREATH",
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slides[current].image}
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 text-center px-4">
        <motion.p
          key={`subtitle-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/80 text-sm md:text-lg font-serif italic mb-4 tracking-wider"
        >
          {slides[current].subtitle}
        </motion.p>
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white text-5xl md:text-8xl font-serif font-bold tracking-widest mb-8 leading-tight"
        >
          {slides[current].title}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-full border-2 border-brand-rust flex items-center justify-center cursor-pointer hover:bg-brand-rust transition-all group overflow-hidden">
             <div className="text-white text-[10px] font-bold tracking-widest leading-none text-center">
                SEE<br/>CARD
             </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-12">
        <button onClick={prev} className="text-white/50 hover:text-white transition-colors">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button onClick={next} className="text-white/50 hover:text-white transition-colors">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full z-30">
        <div className="zigzag-border opacity-50" />
      </div>
    </section>
  );
};
