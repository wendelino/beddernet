import HeroLanding from "@/components/sections/hero-landing";
import ResponsiveHero from "@/components/sections/responsive-hero";
import WebsiteBenefits from "@/components/sections/website-benefits";
import { ContactForm } from "@/components/shared/ContactForm";
import WidthWrapper from "@/components/shared/width-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HeroLanding />
      <WebsiteBenefits />
      <ResponsiveHero />
      <WidthWrapper>
        <ContactForm />
      </WidthWrapper>
    </div>
  );
}
