import { Section } from "@/components/common/section";
import { passRates } from "@/lib/constants";
import { Clock, MapPin, PoundSterling, Trophy } from "lucide-react";
import { ElementType } from "react";

type Stat = {
  Icon: ElementType;
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    Icon: Trophy,
    value: passRates.nikki,
    label: "Pass Rate",
  },
  {
    Icon: Clock,
    value: "90 min",
    label: "Lesson Duration",
  },
  {
    Icon: PoundSterling,
    value: "£40",
    label: "Per Hour",
  },
  {
    Icon: MapPin,
    value: "Locks Heath",
    label: "Coverage Area",
  },
];

export const Stats = () => {
  return (
    <Section className="py-16">
      <div className="flex justify-around items-center gap-10 flex-wrap max-w-4xl mx-auto">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </Section>
  );
};

const StatCard = ({ label, value, Icon }: Stat) => {
  return (
    <div className="flex flex-col items-center text-center w-48">
      <div className="flex justify-center items-center mb-2">
        <Icon className="size-5 text-primary" />
      </div>

      <span
        className="text-2xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {value}
      </span>

      <span className="mt-1 text-sm font-medium text-foreground">{label}</span>
    </div>
  );
};
