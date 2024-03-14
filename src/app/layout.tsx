import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Spacedev.codes",
  description: "Spacedev.codes spacedev.codes spacedev.codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <title>Spacedev.codes</title>
          <meta name="description" content="React next landing page" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="spacedev.codes" /> 
          {/* add keywords */}
          <meta name="theme-color" content="#000000" />
          <meta charSet="utf-8" />
          <link rel="icon" href="./favicon.ico" />
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
