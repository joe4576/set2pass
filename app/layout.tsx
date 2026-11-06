import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "@/providers/posthog-provider";
import { ReviewCountProvider } from "@/providers/review-count-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

const bodyFont = localFont({
  src: [
    {
      path: "../public/fonts/barlow-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/barlow-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-barlow",
  display: "swap",
});

const headingFont = localFont({
  src: "../public/fonts/barlow-condensed-bold.woff2",
  weight: "700",
  variable: "--font-barlow-condensed",
  display: "swap",
});

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

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={cn(bodyFont.variable, headingFont.variable)}>
      <body>
        <a
          className="fixed -top-[100px] left-5 z-100 bg-blue px-5 py-3 text-white focus:top-3"
          href="#main-content"
        >
          Skip to content
        </a>
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
};

export default RootLayout;
