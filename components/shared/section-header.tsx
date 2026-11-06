import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type SectionHeaderProps = ComponentProps<"h2"> & {
  title: string;
};

export const SectionHeader = ({
  className,
  title,
  ...props
}: SectionHeaderProps) => (
  <h2 className={cn("mb-[30px]", className)} {...props}>
    {title}
  </h2>
);
