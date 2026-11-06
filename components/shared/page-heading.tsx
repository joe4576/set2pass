import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const headingVariants = {
  hero: "text-[clamp(3.25rem,7vw,6rem)] leading-[1.02] tracking-[-0.015em] min-[1024px]:text-[clamp(4rem,6.2vw,5.75rem)]",
  compact: "text-[clamp(3.5rem,9vw,6.75rem)] min-[1024px]:text-[4rem]",
};

type PageHeadingProps = ComponentProps<"h1"> & {
  variant?: keyof typeof headingVariants;
};

export const PageHeading = ({
  className,
  variant = "hero",
  ...props
}: PageHeadingProps) => (
  <h1 className={cn(headingVariants[variant], className)} {...props} />
);
