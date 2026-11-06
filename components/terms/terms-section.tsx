import { Container } from "@/components/shared/container";
import {
  TermSection,
  type TermSectionProps,
} from "@/components/terms/term-section";
import type { ReactNode } from "react";

export type Term = TermSectionProps;

type TermsListSectionProps = {
  footer?: ReactNode;
  header?: ReactNode;
  terms: Term[];
};

export const TermsListSection = ({
  footer,
  header,
  terms,
}: TermsListSectionProps) => (
  <section className="pt-8 pb-16 min-[700px]:pt-10 min-[700px]:pb-20">
    <Container size="reading">
      {header}
      {terms.map((term) => (
        <TermSection key={term.title} {...term} />
      ))}
      {footer}
    </Container>
  </section>
);
