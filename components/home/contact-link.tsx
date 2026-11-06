import type { ComponentProps } from "react";

type ContactLinkProps = ComponentProps<"a"> & {
  label: string;
};

export const ContactLink = ({
  children,
  label,
  ...props
}: ContactLinkProps) => (
  <a
    className="group flex min-h-16 flex-wrap items-center justify-between gap-x-3.5 gap-y-1 border-b border-[#6286b2] py-4 text-[16px]"
    {...props}
  >
    <span>{label}</span>
    <span className="group-hover:underline group-hover:underline-offset-[5px]">
      {children}
    </span>
  </a>
);
