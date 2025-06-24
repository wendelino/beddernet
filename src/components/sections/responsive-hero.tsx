"use client";

import { motion } from "framer-motion";
import AnimatedHero from "../blocks/hero";
import DeviceAnimation from "../shared/device-layouts/device-animation";

export default function ResponsiveHero() {
  return (
    <AnimatedHero
      id="responsive"
      title={
        <>
          <span className="text-company-foreground">Responsives</span> Layout
          für jeden Bildschirm
        </>
      }
      description="Ein durchdachtes, responsives Layout, das höchste Flexibilität und Benutzerfreundlichkeit auf allen Endgeräten gewährleistet. Für einen konsistenten und überzeugenden Auftritt, unabhängig von Bildschirmgröße oder Plattform."
      direction="rtl"
      className=" border p-8 rounded-2xl shadow-xl"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center justify-center h-full w-full"
      >
        <DeviceAnimation />
      </motion.div>
    </AnimatedHero>
  );
}
