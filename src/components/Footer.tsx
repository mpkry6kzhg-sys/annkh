import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-brand-dark text-brand-cream pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="font-serif text-3xl font-bold tracking-widest">ANKKH</div>
            <p className="text-brand-cream/50 text-sm leading-relaxed max-w-xs">
                Excellence in dining since 2011. Bringing the spirit of luxury and ancestral flavors to the heart of the city.
            </p>
            <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                    <MapPin className="w-5 h-5 text-brand-rust" />
                    <span>1234 N. Dining Street, Little Italy, New York</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <Phone className="w-5 h-5 text-brand-rust" />
                    <span>123-456-7891</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <Mail className="w-5 h-5 text-brand-rust" />
                    <span>reservations@ankkh.com</span>
                </div>
            </div>
          </div>

          {/* Map / Image placeholder */}
          <div className="relative group">
             <div className="aspect-square bg-brand-cream/10 border border-brand-gold/20 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" 
                    alt="Map Location" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-brand-rust text-white p-4 rounded-full shadow-2xl animate-pulse">
                        <MapPin className="w-8 h-8" />
                    </div>
                </div>
             </div>
             <p className="mt-4 text-center text-xs tracking-widest font-bold text-brand-gold uppercase">New York Dining Park</p>
          </div>

          {/* Opening Hours & Social */}
          <div className="space-y-8 text-right md:text-right">
             <h3 className="text-xl font-serif font-bold">Opening Hours</h3>
             <ul className="space-y-4 text-sm text-brand-cream/70">
                <li className="flex justify-between md:justify-end md:space-x-8">
                    <span className="font-bold text-brand-gold">Mon - Fri</span>
                    <span>10:45 am - 10:00 pm</span>
                </li>
                <li className="flex justify-between md:justify-end md:space-x-8">
                    <span className="font-bold text-brand-gold">Sat - Sun</span>
                    <span>11:00 am - 12:00 pm</span>
                </li>
             </ul>
             
             <div className="pt-8">
                <h3 className="text-xl font-serif font-bold mb-6">Latest Updates</h3>
                <div className="flex justify-end space-x-6">
                    <Facebook className="w-6 h-6 hover:text-brand-rust cursor-pointer transition-colors" />
                    <Twitter className="w-6 h-6 hover:text-brand-rust cursor-pointer transition-colors" />
                    <Instagram className="w-6 h-6 hover:text-brand-rust cursor-pointer transition-colors" />
                </div>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-brand-cream/30">
            <p>© 2026 ANKKH RESTAURANT. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-brand-rust">Privacy Policy</a>
                <a href="#" className="hover:text-brand-rust">Terms of Service</a>
            </div>
        </div>
      </div>
      
      {/* Scroll to Top Mock */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center cursor-pointer shadow-2xl z-50 text-brand-dark"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.div>
    </footer>
  );
};

const ChevronUp = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 15-6-6-6 6"/></svg>
)
