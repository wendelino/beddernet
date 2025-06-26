"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WidthWrapper from "../shared/width-wrapper";
import { Section } from "./section";
import { cn } from "@/lib/utils";

interface ActionButton {
  label: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

interface HeroProps {
  title: React.ReactNode;
  id?: string;
  description: string;
  action_buttons?: ActionButton[];
  children?: React.ReactNode;
  direction?: "ltr" | "rtl";
  className?: string;
}

export default function AnimatedHero({
  title,
  description,
  action_buttons = [],
  children,
  direction = "ltr",
  className = "",
  id,
}: HeroProps) {
  // Split title into individual characters while preserving spaces
  const titleChars = description.split(" ").map((char, index) => ({
    char: char + " ", // Use non-breaking space
    index,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentOrder =
    direction === "ltr" ? "lg:grid-cols-2" : "lg:grid-cols-2";

  const textOrder = direction === "ltr" ? "" : "lg:order-2";

  const imageOrder = direction === "ltr" ? "" : "lg:order-1";

  const textAnimation =
    direction === "ltr" ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 };

  const imageAnimation =
    direction === "ltr" ? { opacity: 0, x: 50 } : { opacity: 0, x: -50 };

  return (
    <Section id={id}>
      <WidthWrapper>
        <div
          className={cn(
            `grid ${contentOrder} gap-16 items-center min-h-[50vh]`,
            className
          )}
        >
          <motion.div
            initial={textAnimation}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-8 ${textOrder}`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold  leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:text-lg  text-muted-foreground leading-relaxed"
            >
              {titleChars.map(({ char, index }) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className="inline-block mr-1"
                >
                  {char}{" "}
                </motion.span>
              ))}
            </motion.p>

            {action_buttons.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {action_buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={button.variant || "default"}
                    onClick={button.onClick}
                    className={
                      button.variant === "default" || !button.variant
                        ? "bg-company-foreground hover:bg-company-foreground/80 group"
                        : button.variant === "outline"
                        ? "border-company-foreground text-company-foreground hover:bg-company/20"
                        : ""
                    }
                  >
                    {button.label}
                    {button.icon && (
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        {button.icon}
                      </span>
                    )}
                  </Button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {children && (
            <motion.div
              initial={imageAnimation}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative ${imageOrder}`}
            >
              {children}
            </motion.div>
          )}
        </div>
      </WidthWrapper>
    </Section>
  );
}
