import { ArrowRight } from "lucide-react";

export type AppCardProps = {
  name: string;
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  description: string;
};

export const AppCard = ({
  name,
  href,
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  description,
}: AppCardProps) => (
  <a
    href={href}
    aria-labelledby={`${name}-title`}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-colors hover:border-blue focus-visible:border-blue"
  >
    <div className="flex h-[260px] items-center justify-center bg-secondary p-6 min-[700px]:h-[320px] min-[700px]:p-8">
      <img
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="h-full w-full object-contain"
      />
    </div>
    <div className="flex flex-1 flex-col p-6 min-[700px]:p-8">
      <h2 id={`${name}-title`} className="text-[2.35rem]">
        {name}
      </h2>
      <p className="mt-4 mb-6">{description}</p>
      <span className="mt-auto inline-flex items-center gap-2 font-semibold text-blue group-hover:underline group-hover:underline-offset-4">
        Explore {name}
        <ArrowRight size={18} aria-hidden="true" />
      </span>
    </div>
  </a>
);
