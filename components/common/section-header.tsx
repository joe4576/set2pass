import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  miniTitle?: string;
  className?: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  miniTitle,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-20", className)}>
      {miniTitle && (
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {miniTitle}
        </span>
      )}

      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl",
          miniTitle && "mt-3",
        )}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
};
