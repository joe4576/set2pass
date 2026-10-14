"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useRef, useState } from "react";

type InfoTooltipProps = {
  label: string;
  text: string;
};

export const InfoTooltip = ({ label, text }: InfoTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <span className="inline-flex items-center gap-1">
      {label}
      <TooltipProvider>
        <Tooltip open={isOpen} onOpenChange={setIsOpen}>
          <TooltipTrigger
            ref={triggerRef}
            type="button"
            aria-label={`About ${label.toLowerCase()}`}
            className="inline-flex size-8 justify-center items-center rounded-full text-muted-foreground hover:text-primary"
            onPointerDown={(event) => {
              if (event.pointerType === "touch") {
                event.preventDefault();
              }
            }}
            onClick={(event) => {
              event.preventDefault();
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <Info className="size-4" aria-hidden="true" />
          </TooltipTrigger>
          <TooltipContent
            sideOffset={8}
            collisionPadding={16}
            className="max-w-64 text-center"
            onPointerDownOutside={(event) => {
              if (triggerRef.current?.contains(event.target as Node)) {
                event.preventDefault();
              }
            }}
          >
            {text}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  );
};
