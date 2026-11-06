import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return (
    <div className={cn("w-full px-20", className)}>
      <div className="h-px bg-gray-300"></div>
    </div>
  );
};
