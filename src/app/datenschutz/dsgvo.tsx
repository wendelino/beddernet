import { siteConfig as config } from "@/lib/siteConfig";

export default function DatenschutzComp() {
  const { company } = config;
  return (
    <div className="space-y-16">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          1. Datenschutz auf einen Blick
        </h2>

        <h3 className="text-xl font-medium">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>

        <h3 className="text-xl font-medium">
          Datenerfassung auf dieser Website
        </h3>
        <p>
          <strong>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </strong>
        </p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle&quot; in dieser
          Datenschutzerklärung entnehmen.
        </p>

        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong>
        </p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie diese Website betreten.
        </p>

        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong>
        </p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>

        <p>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
        </p>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Hosting</h2>

        <h3 className="text-xl font-medium">Externes Hosting</h3>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die über eine Website generiert werden, handeln.
        </p>
        <p>
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber
          unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b
          DSGVO) und im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung unseres Online-Angebots durch einen professionellen
          Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
          Erfüllung seiner Leistungspflichten erforderlich ist und unsere
          Weisungen in Bezug auf diese Daten befolgen.
        </p>
        <p>
          <strong>Wir setzen folgenden Hoster ein:</strong>
        </p>
        <div className="ml-4 space-y-1">
          <p>netcup GmbH</p>
          <p>Daimlerstraße 25</p>
          <p>76185 Karlsruhe</p>
          <p>Deutschland</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          3. Allgemeine Hinweise und Pflichtinformationen
        </h2>

        <h3 className="text-xl font-medium">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </p>

        <h3 className="text-xl font-medium">
          Hinweis zur verantwortlichen Stelle
        </h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <div className="ml-4 space-y-1">
          <p>
            <strong>{config.name}</strong>
          </p>
          <p>{company.owner}</p>
          <p>{company.strasse}</p>
          <p>
            {company.plz} {company.ort}
          </p>
          <p>Deutschland</p>
          <p>
            <strong>Telefon:</strong> {company.phone}
          </p>
          <p>
            <strong>E-Mail:</strong> {company.mail}
          </p>
        </div>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>

        <h3 className="text-xl font-medium">Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>

        <h3 className="text-xl font-medium">
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3 className="text-xl font-medium">
          Beschwerderecht bei der zuständigen Aufsichtsbehörde
        </h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>

        <h3 className="text-xl font-medium">Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>

        <h3 className="text-xl font-medium">
          Auskunft, Löschung und Berichtigung
        </h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>

        <h3 className="text-xl font-medium">
          Recht auf Einschränkung der Verarbeitung
        </h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
            um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah/geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
            jedoch zur Ausübung, Verteidigung oder Geltendmachung von
            Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abwägung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          4. Datenerfassung auf dieser Website
        </h2>

        <h3 className="text-xl font-medium">Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
          Interesse an der technisch fehlerfreien Darstellung und der
          Optimierung seiner Website – hierzu müssen die Server-Log-Files
          erfasst werden.
        </p>

        <h3 className="text-xl font-medium">Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Formular inklusive der von Ihnen angegebenen
          Kontaktdaten (z. B. Name, E-Mail-Adresse, Telefonnummer) bei uns
          gespeichert, um Ihre Anfrage zu bearbeiten und für mögliche
          Anschlussfragen.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          oder vorvertraglicher Maßnahmen zusammenhängt. In allen anderen Fällen
          erfolgt die Verarbeitung auf Grundlage Ihrer Einwilligung (Art. 6 Abs.
          1 lit. a DSGVO) und/oder unseres berechtigten Interesses an einer
          effizienten Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
          lit. f DSGVO).
        </p>
        <p>
          Ihre Daten verbleiben bei uns, bis der Zweck für die Datenverarbeitung
          entfällt oder Sie uns zur Löschung auffordern. Gesetzliche
          Aufbewahrungsfristen bleiben unberührt.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Plugins und Tools</h2>

        <h3 className="text-xl font-medium">Umami (Webanalyse)</h3>
        <p>
          Diese Website verwendet den datenschutzfreundlichen Webanalysedienst
          <strong> Umami</strong>. Umami ermöglicht uns, anonyme
          Nutzungsstatistiken der Website zu erfassen – ohne dabei Cookies zu
          verwenden oder personenbezogene Daten zu speichern.
        </p>
        <p>
          Die erfassten Informationen umfassen z. B. die aufgerufenen Seiten,
          verwendete Browsertypen oder Bildschirmgrößen. IP-Adressen werden
          anonymisiert verarbeitet und lassen keine Rückschlüsse auf einzelne
          Nutzer zu.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          – dem berechtigten Interesse an der anonymisierten Analyse des
          Nutzerverhaltens, um sowohl unser Webangebot als auch dessen
          Nutzerfreundlichkeit zu verbessern.
        </p>
        <p>
          Umami wird selbst gehostet, die Daten verbleiben vollständig auf
          unserem Server in Deutschland.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          6. Cookies und Einwilligungsmanagement
        </h2>
        <p>
          Unsere Website verwendet keine Cookies zur Nutzerverfolgung oder
          Werbezwecken. Es werden ausschließlich technisch notwendige Cookies
          verwendet, z. B. um Ihre Einwilligungen zu speichern.
        </p>
        <p>
          Ein separates Einwilligungsmanagement ist derzeit nicht erforderlich,
          da keine zustimmungspflichtigen Cookies (z. B. Tracking oder
          Marketing) eingesetzt werden.
        </p>
      </section>

      <div className="text-sm text-muted-foreground mt-8 pt-4 border-t">
        <p>Stand: 27-06-2025</p>
      </div>
    </div>
  );
}
