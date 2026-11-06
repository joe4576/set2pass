export type AppFeatureProps = {
  description: string;
  title: string;
};

export const AppFeature = ({ description, title }: AppFeatureProps) => (
  <article className="border-t border-[#bdcfdc] py-6 min-[700px]:grid min-[700px]:grid-cols-[1fr_1.5fr] min-[700px]:gap-[60px] min-[700px]:py-[30px]">
    <h3 className="mb-3.5 text-[27px] min-[700px]:m-0">{title}</h3>
    <p className="max-w-[65ch]">{description}</p>
  </article>
);
