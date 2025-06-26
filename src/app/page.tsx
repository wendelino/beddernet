import { Header } from "@/components/blocks/header";
import FAQ from "@/components/sections/faq";
import HeroLanding from "@/components/sections/hero-landing";
import ResponsiveHero from "@/components/sections/responsive-hero";
import WebsiteBenefits from "@/components/sections/website-benefits";
import { ContactForm } from "@/components/shared/ContactForm";
import WidthWrapper from "@/components/shared/width-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col gap-32"> 
      <HeroLanding />
      <WebsiteBenefits />
      <ResponsiveHero />
      <FAQ />
      <WidthWrapper>
        <Header
          id="kontakt"
          className="text-center mb-8"
          title="Jetzt $Kontakt$ aufnehmen"
          subtitle="Schnell, unverbindlich und persönlich – wir freuen uns auf Ihre Anfrage!"
        />
        <ContactForm />
      </WidthWrapper>
    </div>
  );
}
