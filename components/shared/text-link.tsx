import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type TextLinkProps = ComponentProps<"a"> & {
  asChild?: boolean;
};

export const TextLink = ({
  asChild = false,
  className,
  ...props
}: TextLinkProps) => {
  const Component = asChild ? Slot : "a";
  return (
    <Component
      className={cn(
        "text-blue underline decoration-1 underline-offset-[5px] hover:decoration-2",
        className,
      )}
      {...props}
    />
  );
};
