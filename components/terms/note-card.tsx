import { ReactNode } from "react";

type NoteCardProps = {
  children: ReactNode;
};

export const NoteCard = ({ children }: NoteCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-6 text-muted-foreground text-sm">
      {children}
    </div>
  );
};
