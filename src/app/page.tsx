import HeroLanding from "@/components/sections/hero-landing";
import Powered from "@/components/sections/powered";
import ResponsiveHero from "@/components/sections/responsive-hero";
import WebsiteBenefits from "@/components/sections/website-benefits";

export default function Home() {
  return (
    <div className="flex flex-col gap-16"> 
 
      <HeroLanding /> 
      <WebsiteBenefits/>
      <ResponsiveHero /> 
      <Powered />
    </div>
  );
}
