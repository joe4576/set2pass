import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type CheckListProps = ComponentProps<"ul">;

export const CheckList = ({ className, ...props }: CheckListProps) => (
  <ul className={cn("m-0 list-none p-0", className)} {...props} />
);

type CheckListItemProps = ComponentProps<"li">;

export const CheckListItem = ({ className, ...props }: CheckListItemProps) => (
  <li
    className={cn(
      "relative border-t border-border py-[15px] pl-[25px] leading-[1.5] before:absolute before:top-[23px] before:left-0.5 before:h-[11px] before:w-[7px] before:rotate-45 before:border-r-2 before:border-b-2 before:border-primary before:content-[''] last:border-b",
      className,
    )}
    {...props}
  />
);
