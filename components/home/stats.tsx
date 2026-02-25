import { Card } from "@/components/common/card";
import { Container } from "@/components/common/container";
import { passRates } from "@/lib/constants";
import { Clock, MapPin, PoundSterling, Trophy } from "lucide-react";
import { ElementType } from "react";

type Stat = {
  Icon: ElementType;
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    Icon: Trophy,
    value: passRates.nikki,
    label: "Pass Rate",
    detail: `vs ${passRates.nationalAverage} national average`,
  },
  {
    Icon: Clock,
    value: "90 min",
    label: "Lesson Duration",
    detail: "Quality instruction every session",
  },
  {
    Icon: PoundSterling,
    value: "£40",
    label: "Per Hour",
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
    <Container as="section" className="relative z-20 -mt-16 max-w-5xl">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </Container>
  );
}

const StatCard = ({ label, value, detail, Icon }: Stat) => {
  return (
    <Card className="flex flex-col items-center text-center">
      <div className="mb-3 flex justify-center items-center size-11 rounded-xl bg-primary/10">
        <Icon className="size-5 text-primary" />
      </div>

      <span
        className="text-2xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {value}
      </span>

      <span className="mt-1 text-sm font-medium text-foreground">{label}</span>

      <span className="mt-0.5 text-xs text-muted-foreground">{detail}</span>
    </Card>
  );
};
