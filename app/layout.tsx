import type { Metadata } from "next";
import "./globals.css";
import { Clicker_Script, Playfair_Display } from 'next/font/google'

const clicker = Clicker_Script({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-clicker',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: "Bean Scene",
  description: "Bean Scene Coffie shop Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clicker.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
