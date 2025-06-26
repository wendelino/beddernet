import { Header } from "@/components/blocks/header";
import { ContactForm } from "@/components/shared/ContactForm";
import WidthWrapper from "@/components/shared/width-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit BedderNet auf – Ihrem Experten für IT-Dienstleistungen, Webentwicklung und IT-Support in Halle (Saale). Individuelle Beratung & maßgeschneiderte Lösungen.",

  keywords: [
    "BedderNet",
    "Wendelin Beddermann",
    "Kontakt IT Halle",
    "Webentwicklung Halle Saale",
    "Webdesign Halle",
    "IT Dienstleistungen Halle",
    "IT Support Halle",
    "IT Firma Halle (Saale)",
    "Cloud Lösungen Halle",
    "Netzwerktechnik Halle",
    "IT Beratung Halle",
    "Digitale Lösungen Halle",
    "Managed Services Halle",
  ],
};

export default function page() {
  return (
    <WidthWrapper>
      <Header
        id="kontakt"
        className="text-center mb-8"
        title="Jetzt $Kontakt$ aufnehmen"
        subtitle="Schnell, unverbindlich und persönlich – wir freuen uns auf Ihre Anfrage!"
      />
      <ContactForm />
    </WidthWrapper>
  );
}
