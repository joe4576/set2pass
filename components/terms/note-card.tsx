import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type NoteCardProps = ComponentProps<"div">;

export const NoteCard = ({ className, ...props }: NoteCardProps) => (
  <div
    className={cn("py-6 [overflow-wrap:anywhere] [&_a]:text-blue", className)}
    {...props}
  />
);
