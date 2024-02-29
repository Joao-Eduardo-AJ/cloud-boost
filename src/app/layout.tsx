import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TextsProvider } from "@/translation";

const texts = TextsProvider.get();

const inter = Inter({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Cloud Boost",
  description: texts.DESCRIPTION,
  openGraph: {
    title: "Cloud Boost",
    description: texts.DESCRIPTION,
    url: "",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-gray-950`}
    >
      <body>{children}</body>
    </html>
  );
}
