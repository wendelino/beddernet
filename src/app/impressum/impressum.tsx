import { siteConfig as config } from "@/lib/siteConfig";
export default function ImpressumComp() {

  const { company } = config;
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
        <div className="space-y-2">
          <p><strong>{config.name}</strong></p>
          <p>{company.owner}</p>
          <p>{company.strasse}</p>
          <p>{company.plz} {company.ort}</p>
          <p>Deutschland</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
        <div className="space-y-2">
          <p><strong>Telefon:</strong> {company.phone}</p>
          <p><strong>E-Mail:</strong> {company.mail}</p>
          <p><strong>Website:</strong> {config.url}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
        <p>{company.ust}</p>
      </section>
 

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <div className="space-y-2"> 
          <p>{company.owner}</p>
          <p>{company.strasse}</p>
          <p>{company.plz} {company.ort}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
          an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
          unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
          der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
          einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
          Links umgehend entfernen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
          deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
          außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors 
          bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
          Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
          Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
          auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </section>
    </div>
  )
}
