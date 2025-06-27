import WidthWrapper from "@/components/shared/width-wrapper";
import ImpressumComp from "./impressum";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen zu BedderNet, Ihrem Experten für IT-Dienstleistungen, Webentwicklung und IT-Support in Halle (Saale).",
};
export default function page() {
  return (
    <WidthWrapper>
      <ImpressumComp />
    </WidthWrapper>
  );
}
