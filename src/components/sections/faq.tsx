import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WidthWrapper from "../shared/width-wrapper";
import { Header } from "../blocks/header";

const faqData = [
  {
    id: "item-1",
    question: "Wie lange dauert die Entwicklung einer Webseite?",
    answer:
      "Die Dauer hängt vom Umfang und den Anforderungen des Projekts ab. Eine einfache One-Pager-Seite kann in wenigen Tagen umgesetzt werden, während größere Unternehmensseiten mit individuellen Funktionen mehrere Wochen in Anspruch nehmen können. Nach einem Erstgespräch erhalten Sie eine realistische Einschätzung.",
  },
  {
    id: "item-2",
    question: "Bieten Sie auch Hosting an?",
    answer:
      "Ja, ich biete Ihnen auf Wunsch ein Komplettpaket inklusive Hosting an – entweder über meine empfohlenen Anbieter oder direkt über Ihren bestehenden Hosting-Account. Gerne berate ich Sie, welche Lösung für Ihr Projekt am besten passt.",
  },
  {
    id: "item-3",
    question: "Was kostet eine Webseite?",
    answer:
      "Das hängt vom Umfang, Design und den gewünschten Funktionen ab. Kleine Webseiten starten ab etwa 600 €, individuelle Lösungen mit CMS oder Shop-Funktionalität entsprechend höher. Nach einem unverbindlichen Gespräch erhalten Sie ein transparentes Angebot.",
  },
  {
    id: "item-4",
    question: "Kann ich meine Webseite später selbst pflegen?",
    answer:
      "Ja, wenn gewünscht, integriere ich ein benutzerfreundliches CMS (z. B. WordPress oder ein Headless CMS). Alternativ biete ich Wartungspakete an, bei denen ich technische Updates, Backups und Änderungen für Sie übernehme.",
  },
  {
    id: "item-5",
    question: "Bieten Sie auch Suchmaschinenoptimierung (SEO) an?",
    answer:
      "Ja, bei allen Projekten achte ich auf technische SEO-Grundlagen (Ladezeit, mobile Optimierung, sauberes HTML). Auf Wunsch kann ich auch OnPage-SEO, Keyword-Optimierung und Performance-Analysen anbieten.",
  },
  {
    id: "item-6",
    question: "Welche Technologien verwenden Sie bei der Entwicklung?",
    answer:
      "Ich setze auf moderne Webtechnologien wie Next.js, React, Tailwind CSS und Node.js. Je nach Projekt nutze ich auch Headless CMS-Lösungen oder integriere bestehende Systeme – immer mit Blick auf Performance, Sicherheit und Skalierbarkeit.",
  },
  {
    id: "item-7",
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Nach einem ersten Gespräch erhalten Sie ein individuelles Angebot. Anschließend beginnen wir mit dem Design und der technischen Umsetzung. Während der Entwicklung erhalten Sie regelmäßig Einblicke und können Feedback geben.",
  },
  {
    id: "item-8",
    question: "Ist meine Webseite später sicher vor Angriffen?",
    answer:
      "Ja, ich lege großen Wert auf Sicherheit. Dazu gehören regelmäßige Updates, HTTPS-Verschlüsselung, sichere Formularverarbeitung und serverseitige Validierungen. Bei Bedarf richte ich auch automatische Backups und Monitoring ein.",
  },
  {
    id: "item-9",
    question: "Kann ich bestehende Inhalte oder eine alte Seite übernehmen?",
    answer:
      "Ja, Inhalte von bestehenden Seiten können in die neue Webseite übernommen und modernisiert werden. Das spart Zeit und sorgt für ein konsistentes Nutzererlebnis.",
  },
  {
    id: "item-10",
    question: "Bieten Sie auch Support nach dem Launch an?",
    answer:
      "Selbstverständlich. Ich stehe Ihnen auch nach dem Projekt für technische Fragen, Wartung oder Erweiterungen zur Verfügung – flexibel nach Bedarf oder im Rahmen eines Support-Pakets.",
  },
];

export default function FAQ() {
  return (
    <WidthWrapper>
      <section id="faq">
      <Header
        title="Häufig gestellte $Fragen$"
        subtitle="Hier finden Sie Antworten auf die am häufigsten gestellten Fragen.
          Falls Sie weitere Hilfe benötigen, kontaktieren Sie uns gerne."
      />
        <Accordion type="single" collapsible className="w-full py-8">
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </WidthWrapper>
  );
}
