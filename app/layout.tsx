import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/nav/nav";
import FooterContent from "@/components/FooterContent";
import Bg from "@/components/bg/bg";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
});

export const metadata: Metadata = {
  title: "Ajay n - Portfolio",
  description:
    "Portfolio of ajay",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          "h-0 min-h-screen overflow-x-hidden bg-background font-space_grotesk text-foreground antialiased relative",
          montserrat.variable,
          space_grotesk.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NavBar />
          <main>
            <div className="fixed inset-0 opacity-10 dark:opacity-30 pointer-events-none">
              <Bg />
            </div>
            {children}
          </main>
          <footer>
            <FooterContent />
          </footer>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
