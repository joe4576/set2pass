import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type StatProps = ComponentProps<"div"> & {
  description?: ReactNode;
  label: string;
  value: ReactNode;
};

export const Stat = ({
  className,
  description,
  label,
  value,
  ...props
}: StatProps) => (
  <div className={cn("flex flex-col", className)} {...props}>
    <dt className="order-1 text-[15px] text-muted-foreground">{label}</dt>
    <dd className="m-0 font-heading text-[34px] font-bold leading-[1.25] text-blue min-[700px]:text-[30px] min-[900px]:text-[38px] min-[1000px]:text-[42px]">
      {value}
      {description && (
        <span className="block font-sans text-[14px] font-normal text-muted-foreground">
          {description}
        </span>
      )}
    </dd>
  </div>
);
