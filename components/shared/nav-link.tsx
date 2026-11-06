import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type NavLinkProps = ComponentProps<"a">;

export const NavLink = ({ className, ...props }: NavLinkProps) => (
  <a
    className={cn(
      "text-[16px] font-semibold hover:underline hover:underline-offset-[6px]",
      className,
    )}
    {...props}
  />
);
