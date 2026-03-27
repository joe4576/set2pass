import { Footer } from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "@/providers/posthog-provider";
import { ReviewCountProvider } from "@/providers/review-count-provider";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Set2Pass Driving School | Learn to Drive in Locks Heath";
const description =
  "Professional driving lessons in Locks Heath and surrounding areas. Automatic and manual lessons available.";
const url = "https://set2pass.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Set2Pass preview image",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
      },
    ],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(dmSans.variable, inter.variable, "scroll-smooth")}
    >
      <body className="font-sans antialiased">
        <PostHogProvider>
          <ReviewCountProvider>
            <Navbar />
            {children}
            <Footer />
          </ReviewCountProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
