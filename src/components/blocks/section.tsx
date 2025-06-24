"use client";

import type React from "react";

import { useAnimationController } from "@/lib/hooks/use-animation-controller";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  const { defaultAnimation } = useAnimationController();

  return (
    <motion.section
      id={id}
      {...defaultAnimation}
      className={cn("py-12 md:py-24 lg:py-32", className)}
    >
      {children}
    </motion.section>
  );
};
