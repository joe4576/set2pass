import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type LogoProps = ComponentProps<"a">;

export const Logo = ({ className, ...props }: LogoProps) => (
  <a
    href="/"
    className={cn(
      "inline-block w-[166px] shrink-0 min-[1100px]:w-[190px]",
      className,
    )}
    aria-label="Set2Pass home"
    {...props}
  >
    <img
      className="w-full"
      src="/images/set2pass.webp"
      alt="Set2Pass"
      width="1300"
      height="275"
    />
  </a>
);
