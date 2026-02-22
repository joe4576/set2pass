import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Tailored lessons to match your unique learning style",
  "Patient, friendly instructors who build confidence",
  "Both automatic and manual lessons available",
  "Free online theory training via Theory Test Pro",
  "Flexible scheduling, including evenings and weekends",
  "5% discount when you book 10 lessons in advance",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="[&_p]:mt-4 leading-relaxed text-muted-foreground">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </span>
          <h2
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            More than passing your test
          </h2>
          <p>
            At Set2Pass, we take immense pride in delivering top-notch driving
            instruction that goes beyond helping you pass your test. Our focus
            is on equipping you with the skills for a lifetime of safe and
            confident driving.
          </p>
          <p>
            Whether you're a beginner or have some driving experience, our
            expert instructors ensure that you are at the center of every
            lesson. We understand that everyone learns differently, so we tailor
            our teaching approach to match your unique needs and learning style.
          </p>
          <p>
            With Set2Pass Driving School, you'll find yourself in the driver's
            seat, taking control of your learning journey. Get ready for an
            empowering and enjoyable driving experience with us!
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
              <span className="text-sm leading-snug text-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
