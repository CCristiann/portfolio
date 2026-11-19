import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

import { Analytics } from "@vercel/analytics/next";

import { AsciiWake } from "@/components/AsciiWake";

<AsciiWake glyphs="Classic" size={10} reach={60} trail={1.2} pull={40} />;

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
    default: "Cristian Cirje",
    template: "%s · Cristian Cirje",
  },
  description:
    "Computer & AI Engineering student at Roma Tre. Projects and more about me.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full w-full overflow-x-clip">
        <Analytics />
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full">
            {children}
            <div className="w-full mx-auto flex items-center justify-center pb-20 pt-10">
              <AsciiWake
                glyphs="Classic"
                size={10}
                reach={60}
                trail={1.2}
                pull={40}
              />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
