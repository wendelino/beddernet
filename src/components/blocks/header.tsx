"use client";

import { useAnimationController } from "@/lib/hooks/use-animation-controller";
import { cn, parseHighlightedText } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: string;
  className?: string;
  id?: string;
  subtitle?: string;
}

export const Header = ({ title, className, id, subtitle }: Props) => {
  const { defaultAnimation, variants, transition } = useAnimationController();

  const spans = parseHighlightedText(title);

  return (
    <motion.div
      id={id}
      {...defaultAnimation}
      variants={variants.default}
      transition={transition.children}
      className={cn(
        " text-4xl md:text-6xl font-bold  leading-tight",
        className
      )}
    >
      {spans.map((word, index) => (
        <motion.span
          key={index}
          variants={variants.fadeIn_small}
          className={cn(
            "inline-block mr-2 md:mr-3 last:mr-0",
            word.highlight &&
              "bg-gradient-to-r from-company-foreground to-purple-600 bg-clip-text text-transparent"
          )}
        >
          {word.text + " "}
        </motion.span>
      ))}
      {subtitle && (
        <motion.p
          variants={variants.fadeIn_small}
          className="mt-4 text-balance font-medium text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
