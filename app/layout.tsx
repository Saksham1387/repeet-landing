import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Repeet — Turn accepted LeetCode solves into long-term memory";
const description =
  "A local-first Chrome extension that passively saves every accepted LeetCode submission and resurfaces it with Anki-style spaced repetition. Reflect once, remember for good.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Repeet",
  keywords: [
    "LeetCode",
    "DSA revision",
    "spaced repetition",
    "Chrome extension",
    "SM-2",
    "Anki",
    "interview preparation",
    "coding interview",
  ],
  authors: [{ name: "Saksham", url: "https://github.com/Saksham1387" }],
  creator: "Saksham",
  alternates: {
    canonical: "https://github.com/Saksham1387/Repeet",
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Repeet",
    locale: "en_US",
    url: "https://github.com/Saksham1387/Repeet",
    images: [
      {
        url: "https://raw.githubusercontent.com/Saksham1387/Repeet/main/icons/repeet-logo.png",
        width: 512,
        height: 512,
        alt: "Repeet logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    creator: "@Saksham1184122",
    images: [
      "https://raw.githubusercontent.com/Saksham1387/Repeet/main/icons/repeet-logo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#171412",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
