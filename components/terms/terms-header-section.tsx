type TermsHeaderSectionProps = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
};

export const TermsHeaderSection = ({
  title,
  subtitle,
  lastUpdated,
}: TermsHeaderSectionProps) => {
  return (
    <section className="bg-muted/50">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <h1
          className="text-balance text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {subtitle}
          </p>
        )}

        {lastUpdated && (
          <p className="mt-8 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>
    </section>
  );
};
