import { motion } from "motion/react";
import { Calendar, Users, Clock } from "lucide-react";

export const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-brand-dark text-brand-cream relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-brand-gold/30 p-8 md:p-16 relative"
        >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-dark px-8">
               <h3 className="text-xs font-bold tracking-[0.5em] uppercase text-brand-gold">Online Table Reservation</h3>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12">Secure Your Seat</h2>
            
            <form className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-brand-cream/5 border border-brand-gold/20 p-4 focus:border-brand-gold outline-none transition-colors" />
                </div>
                <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Phone Number</label>
                    <input type="tel" placeholder="Your Phone" className="w-full bg-brand-cream/5 border border-brand-gold/20 p-4 focus:border-brand-gold outline-none transition-colors" />
                </div>
                <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Date</label>
                    <div className="relative">
                        <input type="date" className="w-full bg-brand-cream/5 border border-brand-gold/20 p-4 focus:border-brand-gold outline-none transition-colors appearance-none" />
                        <Calendar className="absolute right-4 top-4 w-5 h-5 text-brand-gold/50" />
                    </div>
                </div>
                <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Guests</label>
                    <div className="relative">
                        <select className="w-full bg-brand-cream/5 border border-brand-gold/20 p-4 focus:border-brand-gold outline-none transition-colors appearance-none uppercase text-sm">
                            <option>2 Person</option>
                            <option>4 Person</option>
                            <option>6+ Person</option>
                        </select>
                        <Users className="absolute right-4 top-4 w-5 h-5 text-brand-gold/50" />
                    </div>
                </div>
                
                <div className="md:col-span-2 pt-8">
                   <button className="w-full bg-brand-gold text-brand-dark font-bold py-5 tracking-[0.3em] uppercase hover:bg-white transition-all shadow-xl">
                       Request Reservation
                   </button>
                   <p className="mt-4 text-xs text-brand-cream/40 italic">
                       * We will contact you via phone to confirm your table.
                   </p>
                </div>
            </form>
        </motion.div>
      </div>
    </section>
  );
};
