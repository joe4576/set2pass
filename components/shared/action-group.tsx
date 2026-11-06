import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type ActionGroupProps = ComponentProps<"div">;

export const ActionGroup = ({ className, ...props }: ActionGroupProps) => (
  <div className={cn("flex flex-wrap items-center", className)} {...props} />
);
