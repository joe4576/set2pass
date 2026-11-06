import { AppStoreButton } from "@/components/apps/app-store-button";
import { ActionGroup } from "@/components/shared/action-group";
import { Section } from "@/components/shared/section";
import { TextLink } from "@/components/shared/text-link";

type AppCtaSectionProps = {
  appStoreLink: string;
  buttonText: string;
  description: string;
  privacyPolicyLink: string;
  title: string;
};

export const AppCtaSection = ({
  appStoreLink,
  buttonText,
  description,
  privacyPolicyLink,
  title,
}: AppCtaSectionProps) => (
  <Section>
    <h2 className="max-w-[700px]">{title}</h2>
    <p className="mt-[22px] max-w-[620px]">{description}</p>
    <ActionGroup className="mt-7 flex-col items-stretch gap-x-[30px] gap-y-5 min-[700px]:flex-row min-[700px]:items-center">
      <AppStoreButton href={appStoreLink}>{buttonText}</AppStoreButton>
      <TextLink
        href={privacyPolicyLink}
        className="inline-flex min-h-11 items-center justify-center"
      >
        View privacy policy
      </TextLink>
    </ActionGroup>
  </Section>
);
