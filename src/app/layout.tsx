import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist_Mono, Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toast";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Nexora",
  title: {
    default: "Nexora",
    template: "%s | Nexora",
  },
  description:
    "Nexora is a polished voice generation workspace for creating, refining, and managing text-to-speech projects.",
  keywords: [
    "Nexora",
    "text to speech",
    "voice generation",
    "voice cloning",
    "audio workspace",
  ],
  authors: [{ name: "Nexora" }],
  creator: "Nexora",
  publisher: "Nexora",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Nexora",
    description:
      "Create and manage voice generation workflows in a clean, focused workspace.",
    siteName: "Nexora",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Nexora logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nexora",
    description:
      "Create and manage voice generation workflows in a clean, focused workspace.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="flex min-h-full flex-col">
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
