import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Spacedev.codes",
  description: "Spacedev.codes spacedev.codes spacedev.codes",
  keywords: "spacedev.codes",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
