import { EB_Garamond, Lato, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MadeWithBadge } from "@/components/made-with-badge/made-with-badge";
import { metadata } from "@/components/root-metadata";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export { metadata }

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${lato.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MadeWithBadge />
      </body>
    </html>
  );
}
