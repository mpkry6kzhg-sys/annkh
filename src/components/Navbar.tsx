import { motion } from "motion/react";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "MENU", href: "#menu" },
    { name: "GALLERY", href: "#gallery" },
    { name: "RESERVATIONS", href: "#reservation" },
    { name: "CONTACT", href: "#footer" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <span className="text-3xl font-serif font-bold tracking-widest text-brand-dark">ANKKH</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xs font-semibold tracking-[0.2em] text-brand-dark hover:text-brand-rust transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Facebook className="w-4 h-4 text-brand-dark hover:text-brand-rust cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 text-brand-dark hover:text-brand-rust cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-brand-dark hover:text-brand-rust cursor-pointer transition-colors" />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-brand-cream border-t border-brand-dark/10 p-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-semibold tracking-widest text-brand-dark hover:text-brand-rust"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
