import { Clock, MapPin, PoundSterling, Trophy } from "lucide-react";

const stats = [
  {
    Icon: Trophy,
    value: "84%",
    label: "Pass Rate",
    detail: "vs 49.9% national average",
  },
  {
    Icon: Clock,
    value: "90 min",
    label: "Lesson Duration",
    detail: "Quality instruction every session",
  },
  {
    Icon: PoundSterling,
    value: "£60",
    label: "Per Lesson",
    detail: "5% off when you book 10 lessons",
  },
  {
    Icon: MapPin,
    value: "Locks Heath",
    label: "Coverage Area",
    detail: "And surrounding areas",
  },
];

export function Stats() {
  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-5xl px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, detail, Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-lg"
          >
            <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="size-5 text-primary" />
            </div>
            <span
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {value}
            </span>
            <span className="mt-1 text-sm font-medium text-foreground">
              {label}
            </span>
            <span className="mt-0.5 text-xs text-muted-foreground">
              {detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
