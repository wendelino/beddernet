"use client";

import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useAnimationController = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px 0px 0px 0px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const variants = {
    default: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeIn: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn_small: {
      hidden: { opacity: 0, y: 20, scale: 0.6 },
      visible: { opacity: 1, y: 0, scale: 1 },
    },
  };

  const transition = {
    default: {
      duration: 0.6,
      delay: 0.1,
      ease: "easeOut",
    },
    long: {
      duration: 0.9,
      delay: 0.2,
      ease: "easeOut",
    },
    children: {
      staggerChildren: 0.25,
      // delayChildren: 0.2,
      ease: "easeOut",
    }
  };

  const defaultAnimation = {
    ref,
    animate: controls,
    initial: "hidden",
    transition: transition.default,
    variants: variants.fadeIn,
  };

  return { controls, ref, variants, transition, defaultAnimation };
};
