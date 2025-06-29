import Footer from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";
import { ThemeProvider } from "@/components/global/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BedderNet | Web-Dienstleistungen",
    template: "%s | BedderNet",
  },
  description:
    "BedderNet ist Ihr Partner für Webentwicklung, IT-Dienstleistungen, Cloud-Lösungen und Beratung in Halle (Saale).",
  keywords: [
    "Wendelin Beddermann",
    "Webentwicklung Halle Saale",
    "IT Dienstleistungen Halle",
    "IT Support Halle",
    "Webdesign Halle",
    "IT Firma Halle Saale",
    "Cloud Lösungen",
    "Netzwerktechnik",
    "IT Beratung",
    "Halle (Saale)",
    "BedderNet",
  ],
  metadataBase: new URL("https://beddernet.de"),
  openGraph: {
    title: "BedderNet | Web-Dienstleistungen",
    description:
      "Moderne Webentwicklung, IT Support und Netzwerklösungen aus Halle (Saale) für Unternehmen in Sachsen-Anhalt und deutschlandweit.",
    url: "https://beddernet.de",
    siteName: "BedderNet",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BedderNet | Web-Dienstleistungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BedderNet – Web-Dienstleistungen in Halle (Saale)",
    description:
      "Ihr Ansprechpartner für Webdesign, IT-Infrastruktur und Support in Halle (Saale).",
    images: ["/og-image.jpg"],
  },
  authors: [{ name: "BedderNet GmbH", url: "https://beddernet.de" }],
  creator: "BedderNet GmbH",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://umami.prod1.lnio.de/script.js"
          data-website-id="5e0542db-934f-4baa-955f-b1da287e77b7"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-[20vh] pt-32 lg:pt-48">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
