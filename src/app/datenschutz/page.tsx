import WidthWrapper from "@/components/shared/width-wrapper";
import DatenschutzComp from "./dsgvo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzrichtlinien von BedderNet, Ihrem Experten für IT-Dienstleistungen, Webentwicklung und IT-Support in Halle (Saale). Erfahren Sie, wie wir Ihre Daten schützen.",
};
export default function page() {
  return (
    <WidthWrapper>
      <DatenschutzComp />
    </WidthWrapper>
  );
}
