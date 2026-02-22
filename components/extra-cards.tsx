"use client";

import { Button } from "@/components/ui/button";
import { useReviewCount } from "@/providers/review-count-provider";
import { Award, BookOpen, ExternalLink, Star } from "lucide-react";

export function ExtraCards() {
  const reviewCount = useReviewCount();

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-2">
        {/* FreeIndex Card */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-primary/5 p-8 md:p-10">
          <div className="relative">
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Award className="size-6 text-primary" />
            </div>

            <h3
              className="text-2xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Rated 5 Stars on FreeIndex
            </h3>

            <div className="mt-3 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm font-medium text-muted-foreground">
                {reviewCount} verified reviews
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are proud to be one of the highest-rated driving schools in our
              area. Our students consistently rate us 5 stars for patient,
              professional instruction that gets results.
            </p>

            <Button asChild variant="outline" className="mt-6 rounded-full">
              <a
                href="https://www.freeindex.co.uk/profile(set2pass)_809203.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Our Reviews
                <ExternalLink className="ml-2 size-3.5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Theory Test Pro Card */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <div className="relative">
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/15">
              <BookOpen className="size-6 text-primary" />
            </div>

            <div className="mb-3 flex items-center gap-3">
              <h3
                className="text-2xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Free Theory Training
              </h3>
              <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                Included
              </span>
            </div>

            <p className="text-sm font-medium text-primary">
              Powered by Theory Test Pro
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              All Set2Pass students get free access to{" "}
              <a href="https://www.theorytestpro.co.uk/" target="_blank">
                <strong className="text-foreground underline">
                  Theory Test Pro
                </strong>
              </a>
              , the UK{"'"}s leading online theory test training platform.
              Learners using Theory Test Pro are twice as likely to pass than
              the national average.
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "Full mock theory tests and hazard perception",
                "Track your progress and weak areas",
                "Completely free for all Set2Pass students",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-foreground"
                >
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg
                      className="size-3 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              Ask your instructor for access details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
