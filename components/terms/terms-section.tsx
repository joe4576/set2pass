import { ReactNode } from "react";

export type Term = {
  title: string;
  items: string[];
};

type TermsListSectionProps = {
  terms: Term[];
  header?: ReactNode;
  footer?: ReactNode;
};

export const TermsListSection = ({
  terms,
  header,
  footer,
}: TermsListSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col gap-12 mx-auto max-w-3xl px-6">
        {header}

        <div className="flex flex-col gap-12">
          {terms.map((term, idx) => (
            <Section key={term.title} {...term} number={idx + 1} />
          ))}
        </div>

        {footer}
      </div>
    </section>
  );
};

type SectionProps = Term & {
  number: number;
};

const Section = ({ title, items, number }: SectionProps) => {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex justify-center items-center size-8 rounded-lg bg-primary/10 text-sm font-bold text-primary">
          {number}
        </span>

        <h2
          className="text-xl md:text-2xl font-semibold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h2>
      </div>

      <ul className="flex flex-col gap-3 pl-11">
        {items.map((item) => {
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
  );
};
