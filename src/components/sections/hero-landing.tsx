"use client";

import Image from "next/image";
import AnimatedHero from "../blocks/hero";
import { GridBackground } from "../shared/grid-background";
import { TextSwap } from "../shared/text-swap";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="-mt-16 lg:-mt-32">
      <GridBackground>
        <AnimatedHero
          id="home"
          title={
            <TextSwap
              words={[
                "aut vertrauen",
                "enutzerfreundlich",
                "ezahlbar",
                "esser vernetzt",
                "litzschnell",
                "arrierefrei",
                "etreuung inklusive",
                "lickfang",
              ]}
            />
          }
          description="Wir entwickeln moderne, responsive Websites und Web-Anwendungen. Speziell für Startups, kleine Unternehmen und Selbstständige."
          action_buttons={[
            {
              label: "Projekt starten",
              variant: "default",
              href: "/anfrage",
            },
            {
              label: "Leistungen ansehen",
              variant: "outline",
              href: "#leistungen",
            },
          ]}
          direction="rtl"
        >
          <Image
            src={siteConfig.logo}
            alt="Logo"
            width={256}
            height={256}
            className=" size-48 lg:size-64 object-cover mx-auto border rounded-2xl shadow-2xl"
          />
        </AnimatedHero>
      </GridBackground>
    </section>
  );
}
