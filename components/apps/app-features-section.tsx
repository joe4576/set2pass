import { Card } from "@/components/common/card";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";
import { ElementType } from "react";

export type Feature = {
  Icon: ElementType;
  title: string;
  description: string;
};

type AppFeaturesSectionProps = {
  features: Feature[];
  title: string;
  description: string;
  dense?: boolean;
};

export const AppFeaturesSection = ({
  features,
  title,
  description,
  dense = true,
}: AppFeaturesSectionProps) => {
  return (
    <Section muted>
      <SectionHeader title={title} subtitle={description} />

      <div
        className={cn("grid gap-8 sm:grid-cols-2", dense && "lg:grid-cols-3")}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
};

const FeatureCard = ({ Icon, title, description }: Feature) => {
  return (
    <Card className="h-72">
      <div className="mb-4 flex justify-center items-center size-11 rounded-xl bg-primary/10">
        <Icon className="size-5 text-primary" />
      </div>

      <h3
        className="text-lg font-semibold text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Card>
  );
};
