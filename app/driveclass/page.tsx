import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Database,
  MapPin,
  Share2,
  Smartphone,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DriveClass | Set2Pass",
  description:
    "DriveClass is an iOS app that displays driving style on a colour coded route map. Every manoeuvre is recorded - braking, acceleration and left/right turns.",
};

const features = [
  {
    icon: MapPin,
    title: "Visual Feedback with Interactive Maps",
    description:
      "Using the interactive map view, you can view your route and see exactly how well you or your student drove. Zoom in and see the small details, down to the exact corner.",
  },
  {
    icon: Users,
    title: "Developed with Professional Instructors",
    description:
      "Calibrated and thoroughly tested by driving instructors with real students to ensure accurate readings.",
  },
  {
    icon: Smartphone,
    title: "No Additional Hardware Needed",
    description:
      "DriveClass can be used in any vehicle and by any user. No additional hardware is needed - just your phone. DriveClass is not associated with any insurance companies.",
  },
  {
    icon: Share2,
    title: "Share Your Journey",
    description:
      "Export and view your journey on any Google Earth or Maps app. Detailed manoeuvre statistics are provided in a spreadsheet file.",
  },
  {
    icon: Database,
    title: "Student Database",
    description:
      "Keep records of how your students are progressing over every lesson. Track improvement over time with detailed history.",
  },
  {
    icon: BarChart3,
    title: "Every Manoeuvre Recorded",
    description:
      "Braking, acceleration and left/right turns are all recorded and colour coded so you can instantly see areas for improvement.",
  },
];

export default function DriveClassPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)/0.06,transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:py-32">
          <div className="flex-1">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              iOS App
            </span>
            <h1
              className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              DriveClass
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              DriveClass is an iOS app that displays driving style on a colour
              coded route map. Every manoeuvre is recorded — braking,
              acceleration and left/right turns.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a
                  href="https://apps.apple.com/gb/app/driveclass/id1495536306"
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
                src="/images/driveclass.webp"
                alt="DriveClass app showing a colour coded route map on an iPhone"
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
              Enhance Your Driving Lessons
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              DriveClass brings data-driven insights to every lesson, helping
              instructors and learners improve faster.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            Ready to track your driving?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Download DriveClass from the App Store and start getting visual
            feedback on every lesson.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a
                href="https://apps.apple.com/gb/app/driveclass/id1495536306"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Get DriveClass
              </a>
            </Button>
          </div>

          <div className="mt-8">
            <Link
              href="/driveclass/privacy-policy"
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
