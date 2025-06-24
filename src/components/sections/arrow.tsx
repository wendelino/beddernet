"use client";

import { useAnimationController } from "@/lib/hooks/use-animation-controller";
import { motion } from "framer-motion";

export default function AnimatedArrow() {
  const { defaultAnimation } = useAnimationController();
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const tailVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 43.1 85.9"
      className="size-40   stroke-company-foreground"
      {...defaultAnimation}
      initial="hidden" 
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        fill="none"
        d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
        variants={pathVariants}
      />
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        fill="none"
        style={{ pathOffset: 1 }}
        d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
        variants={tailVariants}
      />
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        fill="none"
        style={{ pathOffset: 1 }}
        d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
        variants={tailVariants}
      />
    </motion.svg>
  );
}
