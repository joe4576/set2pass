import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
};

export const Container = ({
  children,
  className,
  as: Component = "div",
  id,
}: ContainerProps) => {
  return (
    <Component id={id} className={cn("mx-auto max-w-6xl px-6", className)}>
      {children}
    </Component>
  );
};
