export type TermSectionProps = {
  items: string[];
  title: string;
};

export const TermSection = ({ items, title }: TermSectionProps) => (
  <section className="border-b border-border py-7">
    <h2 className="text-[28px]">{title}</h2>
    <ul className="mt-5 flex list-disc flex-col gap-3.5 pl-5">
      {items.map((item) => (
        <li className="pl-1 [overflow-wrap:anywhere]" key={item}>
          {item}
        </li>
      ))}
    </ul>
  </section>
);
