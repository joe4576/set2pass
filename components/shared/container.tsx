import { cn } from "@/lib/utils";
import type { AriaAttributes, ElementType, ReactNode } from "react";

type ContainerProps = AriaAttributes & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "reading";
};

export const Container = ({
  as: Component = "div",
  children,
  className,
  id,
  size = "default",
  ...props
}: ContainerProps) => (
  <Component
    id={id}
    className={cn(
      "mx-auto w-[calc(100%-40px)] min-[700px]:w-[calc(100%-80px)]",
      size === "reading"
        ? "max-w-[760px]"
        : "max-w-[1180px] min-[640px]:max-w-[640px] min-[768px]:max-w-[768px] min-[1024px]:max-w-[1024px] min-[1280px]:max-w-[1180px]",
      className,
    )}
    {...props}
  >
    {children}
  </Component>
);
