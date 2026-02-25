import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  muted?: boolean;
};

export const Section = ({
  children,
  id,
  muted,
  className,
  containerClassName,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-20 scroll-my-16", muted && "bg-muted/50", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};
