import { ReactNode } from "react";

export type TermSection = {
  title: string;
  note?: string;
  items: string[];
};

type TermsProps = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: TermSection[];
  footer?: ReactNode;
};

export const Terms = (props: TermsProps) => {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h1
            className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {props.title}
          </h1>

          {props.subtitle && (
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              {props.subtitle}
            </p>
          )}

          {props.lastUpdated && (
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: {props.lastUpdated}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col gap-12">
            {props.sections.map((section, idx) => (
              <div key={section.title}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {idx + 1}
                  </span>
                  <h2
                    className="text-xl font-semibold text-foreground md:text-2xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {section.title}
                  </h2>
                </div>

                {section.note && (
                  <p className="mb-4 rounded-xl border border-border bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {section.note}
                  </p>
                )}

                <ul className="flex flex-col gap-3 pl-11">
                  {section.items.map((item) => {
                    const colonIdx = item.indexOf(": ");
                    const hasLabel = colonIdx !== -1 && colonIdx < 40;
                    return (
                      <li
                        key={item}
                        className="relative text-sm leading-relaxed text-muted-foreground before:absolute before:-left-5 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/40"
                      >
                        {hasLabel ? (
                          <>
                            <span className="font-medium text-foreground">
                              {item.slice(0, colonIdx)}:
                            </span>
                            {item.slice(colonIdx + 1)}
                          </>
                        ) : (
                          item
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {props.footer}
        </div>
      </section>
    </>
  );
};
