import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import { Montserrat, Open_Sans } from 'next/font/google';


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <nav style={{ padding: 16, borderBottom: '1px solid #ccc' }} className="hidden">
          <Link href="/">Home</Link> | <Link href="/camps">Camps</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
