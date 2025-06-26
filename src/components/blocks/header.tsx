"use client";

import { useAnimationController } from "@/lib/hooks/use-animation-controller";
import { cn, parseHighlightedText } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import type { JSX } from "react/jsx-runtime"; // Import JSX to fix undeclared variable error

interface Props {
  title: string;
  className?: string;
  id?: string;
  subtitle?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  centered?: boolean;
}

export const Header = ({
  title,
  className,
  id,
  subtitle,
  level = 1,
  centered = true,
}: Props) => {
  const { defaultAnimation, variants, transition } = useAnimationController();

  const spans = parseHighlightedText(title);

  // Create the appropriate heading element
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  // Responsive text sizes based on heading level
  const getHeadingSize = (level: number) => {
    const sizes = {
      1: "text-4xl md:text-5xl lg:text-6xl",
      2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
      3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
      4: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
      5: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
      6: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
    };
    return sizes[level as keyof typeof sizes] || sizes[1];
  };

  return (
    <motion.header
      id={id}
      {...defaultAnimation}
      variants={variants.default}
      transition={transition.children}
      className={cn("mx-auto", centered && "text-center", className)}
      role="banner" 
    >
      <HeadingTag
        className={cn(
          getHeadingSize(level),
          "font-bold leading-tight tracking-tight", 
          centered && "text-center",
          // Focus styles for keyboard navigation
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        )}
        tabIndex={-1} // Allow programmatic focus
        aria-label={`${title}${subtitle ? `. ${subtitle}` : ""}`}
      >
        {spans.map((word, index) => (
          <motion.span
            key={`${word.text}-${index}`}
            variants={variants.fadeIn_small}
            className={cn(
              "inline-block mr-2 md:mr-3 last:mr-0",
              word.highlight && [
                "bg-gradient-to-r from-company-foreground via-purple-600 to-purple-700",
                "bg-clip-text text-transparent",
                // High contrast mode support
                "forced-colors:text-[Highlight]",
                // Fallback for better accessibility
                "supports-[not(background-clip:text)]:text-company-foreground",
              ]
            )} 
          >
            {word.text}
            {index < spans.length - 1 && " "}
          </motion.span>
        ))}
      </HeadingTag>
      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base md:text-lg lg:text-xl",
            "mt-2 sm:mt-3 md:mt-4 lg:mt-6",
            "max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl",
            "text-balance font-medium text-muted-foreground",
            centered && "mx-auto text-center",
            "contrast-more:text-foreground"
          )}
          aria-describedby={id}
          role="doc-subtitle"
        >
          {subtitle}
        </p>
      )}
      <span className="sr-only">{`Heading level ${level}: ${title}${
        subtitle ? `. Subtitle: ${subtitle}` : ""
      }`}</span>
    </motion.header>
  );
};
