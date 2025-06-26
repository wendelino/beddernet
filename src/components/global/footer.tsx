import { config } from "@/lib/config";
import WidthWrapper from "../shared/width-wrapper";
import Image from "next/image";

export default function Footer() {
  const { company, pages_links } = config;
  return (
    <footer className="bg-company-foreground text-white mt-16">
      <WidthWrapper className="py-12">
        <div className="grid gap-8 md:gap-16 sm:grid-cols-2 md:grid-cols-3">
          <div className=" ">
            <Image
              src={config.logo}
              alt="Logo"
              width={128}
              height={128}
              className=" w-32 h-32 object-cover mb-4   min-w-16 bg-background/70 rounded-2xl"
            />

            <h3 className="text-lg font-bold mb-2">{config.name}</h3>
            <p className="text-company mb-4">
              {config.footer.text}{" "}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-company">
              {pages_links.map((page) => (
                <li key={page.label}>
                  <a
                    href={page.href}
                    className="hover:text-white  transition-colors"
                  >
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <address className="not-italic text-company ">
              <p>
                {config.name}
                <br />
                {config.company.owner}
                <br />
                {company.strasse}
                <br />
                {company.plz} {company.ort}
              </p>
              <br />
              Tel: {company.phone}
              <br />
              E-Mail: {company.mail}
            </address>
          </div>{" "}
        </div>

        <div className="mt-12 border-t border-company/50   pt-6 text-center text-sm text-company">
          <p>
            © {new Date().getFullYear()} {config.name}. Alle Rechte vorbehalten.
          </p>
          <div className="mt-2 flex justify-center space-x-4 ">
            <a
              href="/impressum"
              className="hover:text-white  transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hover:text-white  transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </WidthWrapper>
    </footer>
  );
}
