import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Next Phase Athletics",
  description: "Next Phase Athletics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="antialiased">
        <nav style={{ padding: 16, borderBottom: '1px solid #ccc' }}>
          <Link href="/">Home</Link> | <Link href="/camps">Camps</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
