"use client";

import AnimatedHero from "../blocks/hero";
import { GridBackground } from "../shared/grid-background";
import { TextSwap } from "../shared/text-swap";

export default function Hero() {
  return (
    <section className="-mt-16 lg:-mt-32">
      <GridBackground>
        <AnimatedHero
          id="home"
          className="lg:min-h-[55vh]"
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
        </AnimatedHero>
      </GridBackground>
    </section>
  );
}
