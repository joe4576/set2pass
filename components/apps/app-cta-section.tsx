import { AppleIcon } from "@/components/apps/apple-icon";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type AppCtaSectionProps = {
  title: string;
  description: string;
  privacyPolicyLink: string;
  buttonText: string;
  appStoreLink: string;
};

export const AppCtaSection = ({
  title,
  description,
  privacyPolicyLink,
  buttonText,
  appStoreLink,
}: AppCtaSectionProps) => {
  return (
    <Section containerClassName="max-w-2xl text-center">
      <SectionHeader title={title} subtitle={description} className="mb-6" />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg" className="rounded-full">
          <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
            <AppleIcon className="size-5" />
            {buttonText}
          </a>
        </Button>
      </div>

      <div className="mt-8">
        <Link
          href={privacyPolicyLink}
          className="text-sm font-medium text-primary mt-8 underline"
        >
          View privacy policy
        </Link>
      </div>
    </Section>
  );
};
