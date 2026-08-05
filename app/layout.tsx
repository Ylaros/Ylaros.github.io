import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ylaros.github.io"),
  title: "Aloyr — Sistemas, automação e dados",
  description: "Portfólio de análise de sistemas, automação, dados, integrações e engenharia de produto B2B.",
  openGraph: {
    title: "Aloyr — Sistemas personalizados para necessidades reais",
    description: "Análise de sistemas, automação, dados, integrações e engenharia de produto B2B.",
    images: [{ url: "/og-custom.png", width: 1536, height: 1024, alt: "Aloyr — sistemas personalizados para necessidades reais" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-custom.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
