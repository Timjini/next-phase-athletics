import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Toaster } from "@/components/ui/sonner";
// import { ScrollToTopOnRouteChange } from "./ScrollToTopOnRouteChange";
// import { ClientOnly } from "./components/ClientOnly";
import { ClerkProvider } from "@clerk/nextjs";
import { LoadingProvider } from "./context/LoadingContext";

export const metadata: Metadata = {
  title: "NextPhase",
  description: "NextPhase",
  icons: {
    icon: [
      { url: "/favicon-16x16.png" },
      { url: "/favicon-32x32.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

// Configure Open Sans for paragraphs
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <ClerkProvider>
          <Navigation />
          <main>
            {/* <ClientOnly>
            <ScrollToTopOnRouteChange />
          </ClientOnly> */}
            <LoadingProvider>{children}</LoadingProvider>
          </main>
          <Toaster />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
