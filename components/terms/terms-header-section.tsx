import { Container } from "@/components/shared/container";

type TermsHeaderSectionProps = {
  lastUpdated?: string;
  subtitle?: string;
  title: string;
};

export const TermsHeaderSection = ({
  lastUpdated,
  subtitle,
  title,
}: TermsHeaderSectionProps) => (
  <section className="bg-secondary pt-11 pb-9 min-[700px]:pt-[65px] min-[700px]:pb-[50px]">
    <Container size="reading">
      <h1 className="text-[clamp(3rem,7vw,4.5rem)]">{title}</h1>
      {lastUpdated && (
        <p className="mt-[22px] text-[14px] text-muted-foreground">
          Last updated: {lastUpdated}
        </p>
      )}
      {subtitle && <p className="mt-[22px]">{subtitle}</p>}
    </Container>
  </section>
);
