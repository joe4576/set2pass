import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type DisclosureProps = ComponentProps<"details"> & {
  summary: ReactNode;
  summaryClassName?: string;
};

export const Disclosure = ({
  children,
  className,
  summary,
  summaryClassName,
  ...props
}: DisclosureProps) => (
  <details className={cn("group border-b border-border", className)} {...props}>
    <summary
      className={cn(
        "flex min-h-14 list-none items-center justify-between gap-5 py-4 font-semibold leading-[1.5] hover:text-blue [&::-webkit-details-marker]:hidden",
        summaryClassName,
      )}
    >
      {summary}
      <span
        className="shrink-0 text-[23px] font-normal leading-none group-open:rotate-45"
        aria-hidden="true"
      >
        +
      </span>
    </summary>
    {children}
  </details>
);
