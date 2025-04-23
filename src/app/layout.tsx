import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Toaster } from "@/components/ui/sonner";
// import { ClerkProvider } from "@clerk/nextjs";
import { LoadingProvider } from "./context/LoadingContext";
// import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "NextPhase",
  description: "NextPhase",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

// Font optimizations
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
      <html 
        lang="en" 
        className={`${montserrat.variable} ${openSans.variable} font-sans`}
        suppressHydrationWarning
      >
        <body className="min-h-screen antialiased bg-background text-foreground">
          <LoadingProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster position="top-center" richColors />
          </LoadingProvider>
        </body>
        {/* <GoogleAnalytics gaId="G-K6RWFJ7MTF" /> */}
      </html>
    // </ClerkProvider>
  );
}