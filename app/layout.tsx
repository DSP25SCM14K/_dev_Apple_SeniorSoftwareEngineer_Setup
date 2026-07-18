import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const base = "https://dsp25scm14k.github.io/_dev_Apple_SeniorSoftwareEngineer_Setup/";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "Dev Kumar | Senior Software Engineer · Setup",
  description: "Staff-level Apple platform and systems engineer building resilient first-run experiences, thoughtful platform APIs, and quality at every step.",
  icons: { icon: "/_dev_Apple_SeniorSoftwareEngineer_Setup/favicon.svg" },
  openGraph: {
    title: "Dev Kumar | The first moment sets the standard.",
    description: "Apple platforms · system software · setup",
    url: base,
    type: "website",
    images: [{ url: "/_dev_Apple_SeniorSoftwareEngineer_Setup/og.png", width: 1200, height: 630, alt: "Dev Kumar — senior software engineer portfolio" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
