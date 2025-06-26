"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Search, TrendingUp, Users } from "lucide-react";
import { Header } from "../blocks/header";
import WidthWrapper from "../shared/width-wrapper";
import AnimatedArrow from "./arrow";
import BentoGrid from "./bentogrid";

export default function WebsiteBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Kunden gewinnen",
      description:
        "Erreichen Sie kaufbereite Interessenten in Ihrer Region und gewinnen Sie lukrative Aufträge.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Fachkräfte finden",
      description:
        "Finden Sie qualifizierte Unterstützung aus Ihrer Region, die zu Ihrem Unternehmen passen.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Search,
      title: "Regionale Bekanntheit",
      description:
        "Steigern Sie Ihre Sichtbarkeit und werden Sie zur ersten Wahl in Ihrer Region.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <WidthWrapper>
      {/* Hero Section */}
      <Header
        className="text-center mb-8"
        title="Warum Sie eine $professionelle Webseite$ brauchen"
        subtitle="Drei entscheidende Vorteile für Ihr Unternehmen"
      />

      {/* Benefits Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-company-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-3">
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 shadow-md rounded-full bg-gradient-to-br from-company to-company-foreground flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-slate-800">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="pb-8 md:pb-0 pt-12 lg:pt-16 ">
        <AnimatedArrow />
      </div>
      <Header className="text-center mb-8" title="Unsere $Lösung$" />
      <BentoGrid />
    </WidthWrapper>
  );
}
