import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Gauge, Palette, SlidersHorizontal, Zap } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MiSpeedo | Set2Pass",
  description:
    "MiSpeedo is an intuitive app developed by Set2Pass Driving School, designed to keep you informed about your speed, course, and distance while you drive.",
};

const features = [
  {
    icon: Gauge,
    title: "Introducing MiSpeedo",
    description:
      "MiSpeedo is an intuitive app developed by Set2Pass Driving School, designed to keep you informed about your speed in various units while you drive. It also offers essential details about your direction (course) and diligently tracks the total distance you cover on your journey.",
  },
  {
    icon: Palette,
    title: "Customise",
    description:
      "With MiSpeedo, you'll always stay on track with accurate address information, regularly updated every 10 seconds. Plus, you have the freedom to customise the app's display colour theme to your liking, ensuring a personalised and enjoyable experience.",
  },
  {
    icon: SlidersHorizontal,
    title: "Calibrate",
    description:
      "Fine-tune the GPS speed displayed by the app to match your vehicle's speedometer. This is useful because many vehicle speedometers show a slightly faster speed than your actual travel speed. With MiSpeedo's calibration, you'll have the confidence of knowing your displayed speed aligns with your vehicle's performance.",
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description:
      "Whether you're on a road trip or just commuting, MiSpeedo is the reliable driving companion that keeps you informed, safe, and in control throughout your journey. Enjoy a smoother, more informed ride with MiSpeedo!",
  },
];

export default function MiSpeedoPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-primary)/0.06,transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:py-32">
          <div className="flex-1">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              iOS App
            </span>
            <h1
              className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              MiSpeedo
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              An intuitive speedometer app developed by Set2Pass Driving School.
              Track your speed, direction, and distance — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a
                  href="https://apps.apple.com/app/mispeedo/id1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on the App Store
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-primary/5 blur-2xl" />
              <Image
                src="/images/mispeedo.webp"
                alt="MiSpeedo app showing a digital speedometer on an iPhone"
                width={400}
                height={500}
                className="relative rounded-2xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your Reliable Driving Companion
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Stay informed about your speed, direction, and distance with
              accurate GPS tracking and a customisable display.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3
                  className="text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2
            className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Track your speed with confidence
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Download MiSpeedo from the App Store and enjoy a smoother, more
            informed ride.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a
                href="https://apps.apple.com/app/mispeedo/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Get MiSpeedo
              </a>
            </Button>
          </div>
          <div className="mt-8">
            <Link
              href="/mispeedo/privacy-policy"
              className="text-sm font-medium text-primary mt-8 underline"
            >
              View privacy policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
