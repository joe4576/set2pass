import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const topSpacingClasses = {
  default:
    "[--section-padding-top:60px] min-[700px]:[--section-padding-top:80px]",
  compact:
    "[--section-padding-top:28px] min-[700px]:[--section-padding-top:40px]",
  none: "scroll-mt-8 [--section-padding-top:0px] min-[700px]:[--section-padding-top:0px]",
};

type SectionProps = ComponentProps<"section"> & {
  containerClassName?: string;
  muted?: boolean;
  spacing?: "default" | "spacious";
  topSpacing?: keyof typeof topSpacingClasses;
};

export const Section = ({
  children,
  className,
  containerClassName,
  muted,
  spacing = "default",
  topSpacing = "default",
  ...props
}: SectionProps) => (
  <section
    className={cn(
      "pt-(--section-padding-top) pb-[60px] min-[700px]:pb-20 max-[1100px]:scroll-mt-[calc(2rem-var(--section-padding-top))]",
      topSpacingClasses[topSpacing],
      spacing === "spacious" &&
        "[--section-padding-top:80px] pb-20 min-[700px]:[--section-padding-top:112px] min-[700px]:pb-28",
      muted && "bg-secondary",
      className,
    )}
    {...props}
  >
    <Container className={containerClassName}>{children}</Container>
  </section>
);
