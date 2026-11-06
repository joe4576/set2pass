import { AppleIcon } from "@/components/apps/apple-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type AppStoreButtonProps = ComponentProps<"a">;

export const AppStoreButton = ({
  children = "Download on the App Store",
  className,
  ...props
}: AppStoreButtonProps) => (
  <Button
    asChild
    size="cta"
    variant="cta"
    className={cn("w-full min-[700px]:w-auto", className)}
  >
    <a target="_blank" rel="noopener noreferrer" {...props}>
      <AppleIcon className="size-[21px] shrink-0" />
      {children}
    </a>
  </Button>
);
