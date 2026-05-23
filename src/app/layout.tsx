import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { SiteDock } from "@/components/dock/site-dock";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cristian Cirje — Software and AI engineer",
  description:
    "Portfolio of Cristian Cirje. Computer Science student building production-grade AI and web systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-sans">
        <Providers>
          {children}
          <SiteDock />
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}
