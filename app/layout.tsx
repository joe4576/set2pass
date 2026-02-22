import { ReviewCountProvider } from "@/providers/review-count-provider";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const _dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Set2Pass Driving School | Learn to Drive in Locks Heath",
  description:
    "Professional driving lessons in Locks Heath and surrounding areas. Automatic and manual lessons available.",
  icons: {
    icon: [
      {
        url: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${_dmSans.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased">
        <ReviewCountProvider>{children}</ReviewCountProvider>
      </body>
    </html>
  );
}
