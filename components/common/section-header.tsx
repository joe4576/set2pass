import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-20", className)}>
      <h2
        className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <div className="mx-auto mt-4 max-w-xl">
          {typeof subtitle === "string" ? (
            <p className="text-muted-foreground">{subtitle}</p>
          ) : (
            subtitle
          )}
        </div>
      )}
    </div>
  );
};
