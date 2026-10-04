import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: { default: `${COMPANY.name} — Professional Cleaning Services`, template: `%s | ${COMPANY.name}` },
  description: "Quality, consistent, and trustworthy cleaning services for residential, commercial, and industrial clients across Seremban and Melaka.",
  keywords: ["cleaning services Seremban", "cleaning services Melaka", "swimming pool cleaning Malaysia", "landscape maintenance Negeri Sembilan"],
  openGraph: {
    title: `${COMPANY.name} — Professional Cleaning Services`,
    description: "Trusted by MR D.I.Y., Grand Residence, Silverscape Residence, and more across Seremban and Melaka.",
    locale: "en_MY",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
