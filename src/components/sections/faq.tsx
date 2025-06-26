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
      "Die Dauer hängt vom Umfang und den Anforderungen des Projekts ab. Eine einfache One-Pager-Seite kann in wenigen Tagen umgesetzt werden, während größere Unternehmensseiten mit individuellen Funktionen mehrere Wochen in Anspruch nehmen können. Nach einem Erstgespräch geben wir eine realistische Einschätzung.",
  },
  {
    id: "item-2",
    question: "Wird auch Hosting angeboten?",
    answer:
      "Ja, auf Wunsch bieten wir ein Komplettpaket inklusive Hosting an – entweder über unsere empfohlenen Anbieter oder über bestehende Hosting-Accounts. Gerne beraten wir, welche Lösung am besten passt.",
  },
  {
    id: "item-3",
    question: "Was kostet eine Webseite?",
    answer:
      "Das hängt vom Umfang, Design und den gewünschten Funktionen ab. Kleine Webseiten starten ab etwa 600 €, individuelle Lösungen mit CMS oder Shop-Funktionalität entsprechend höher. Nach einem unverbindlichen Gespräch erstellen wir ein transparentes Angebot.",
  },
  {
    id: "item-4",
    question: "Kann die Webseite später selbst gepflegt werden?",
    answer:
      "Ja, auf Wunsch integrieren wir ein benutzerfreundliches CMS (z. B. WordPress oder ein Headless CMS). Alternativ bieten wir Wartungspakete an und übernehmen technische Updates, Backups und Änderungen.",
  },
  {
    id: "item-5",
    question: "Wird Suchmaschinenoptimierung (SEO) angeboten?",
    answer:
      "Ja, bei allen Projekten achten wir auf technische SEO-Grundlagen wie Ladezeit, mobile Optimierung und sauberes HTML. Zusätzlich bieten wir auf Wunsch OnPage-SEO, Keyword-Optimierung und Performance-Analysen an.",
  },
  {
    id: "item-6",
    question: "Welche Technologien werden bei der Entwicklung verwendet?",
    answer:
      "Wir setzen auf moderne Webtechnologien wie Next.js, React, Tailwind CSS und Node.js. Je nach Projekt nutzen wir auch Headless CMS-Lösungen oder integrieren bestehende Systeme – immer mit Blick auf Performance, Sicherheit und Skalierbarkeit.",
  },
  {
    id: "item-7",
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Nach einem ersten Gespräch erstellen wir ein individuelles Angebot. Anschließend starten wir mit dem Design und der technischen Umsetzung. Während der Entwicklung geben wir regelmäßig Einblicke und holen Feedback ein.",
  },
  {
    id: "item-8",
    question: "Ist die Webseite später sicher vor Angriffen?",
    answer:
      "Ja, Sicherheit hat für uns höchste Priorität. Dazu gehören regelmäßige Updates, HTTPS-Verschlüsselung, sichere Formularverarbeitung und serverseitige Validierungen. Bei Bedarf richten wir auch automatische Backups und Monitoring ein.",
  },
  {
    id: "item-9",
    question: "Können bestehende Inhalte oder eine alte Seite übernommen werden?",
    answer:
      "Ja, Inhalte von bestehenden Seiten können übernommen und modernisiert werden. Das spart Zeit und sorgt für ein konsistentes Nutzererlebnis.",
  },
  {
    id: "item-10",
    question: "Wird auch Support nach dem Launch angeboten?",
    answer:
      "Selbstverständlich. Wir stehen auch nach dem Projekt für technische Fragen, Wartung oder Erweiterungen zur Verfügung – flexibel nach Bedarf oder im Rahmen eines Support-Pakets.",
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
