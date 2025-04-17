import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Open_Sans } from 'next/font/google';
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";
import { Toaster } from "@/components/ui/sonner"
// import { ScrollToTopOnRouteChange } from "./ScrollToTopOnRouteChange";
// import { ClientOnly } from "./components/ClientOnly";
import { ClerkProvider } from '@clerk/nextjs'





export const metadata: Metadata = {
  title: "Next Phase Athletics",
  description: "Next Phase Athletics",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

// Configure Open Sans for paragraphs
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  weight: ['400', '500', '600'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
  >
      <body className="antialiased">
        <main>
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </ClerkProvider>
    </html>

  )
}
