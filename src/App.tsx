/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Specials } from "./components/Specials";
import { DishesGrid } from "./components/DishesGrid";
import { Environment } from "./components/Environment";
import { MenuSection } from "./components/MenuSection";
import { Reservation } from "./components/Reservation";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-rust z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
           <Specials />
        </div>

        <DishesGrid />

        <Environment />

        <div className="relative">
           <div className="zigzag-border absolute top-0 left-0 z-10" />
           <MenuSection />
           <div className="zigzag-border-bottom absolute bottom-0 left-0 z-10" />
        </div>

        <Reservation />
      </main>

      <Footer />
    </div>
  );
}
