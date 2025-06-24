"use client";

import { motion } from "framer-motion";
import AnimatedHero from "../blocks/hero";

export default function Hero() {
  return (
    <AnimatedHero id="home" className="min-h-[66vh]"
      title={
        <>
          Ihre digitale <span className="text-company-foreground">Präsenz</span> beginnt
          hier
        </>
      }
      description="Wir entwickeln moderne, responsive Websites und Web-Anwendungen. Speziell für Startups, kleine Unternehmen und Selbstständige."
      action_buttons={[
        {
          label: "Projekt starten",
          variant: "default",
          href: "#contact",
        },
        {
          label: "Portfolio ansehen",
          variant: "outline",
          href: "/portfolio",
        },
      ]}
      direction="ltr"
    >
      {" "}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="bg-background rounded-2xl border shadow-2xl p-8"
          >
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded animate-pulse"></div>
              <div className="h-4 bg-company rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="h-20 bg-gradient-to-br from-company to-company-foreground/50 rounded-lg"></div>
                <div className="h-20 bg-gradient-to-br from-company to-company-foreground/50 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background decorations */}
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </motion.div>
    </AnimatedHero>
  );
}
