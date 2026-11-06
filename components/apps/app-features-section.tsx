import {
  AppFeature,
  type AppFeatureProps,
} from "@/components/apps/app-feature";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";

export type Feature = AppFeatureProps;

type AppFeaturesSectionProps = {
  features: Feature[];
  title: string;
};

export const AppFeaturesSection = ({
  features,
  title,
}: AppFeaturesSectionProps) => (
  <Section muted>
    <SectionHeader title={title} />
    <div>
      {features.map((feature) => (
        <AppFeature key={feature.title} {...feature} />
      ))}
    </div>
  </Section>
);
