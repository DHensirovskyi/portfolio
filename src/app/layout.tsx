import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import '@mantine/carousel/styles.css';
import '@mantine/carousel/styles.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { MantineProvider } from "@mantine/core";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";

const geist = Geist({
  subsets: ['latin'],
  weight: ['300' ,'400', '500','600', '700','800'],
  display: 'swap',
  variable: '--font-geist'
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500','600', '700','800', '900'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: "DHensirovskyi",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <ReactLenis root>
        <body className="flex flex-col min-h-screen">
          <ScrollToTop />
          <MantineProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </MantineProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
