import type { ComponentProps } from "react";

type HeroPortraitProps = ComponentProps<"a"> & {
  image: string;
  lessonType: string;
  name: string;
};

export const HeroPortrait = ({
  image,
  lessonType,
  name,
  ...props
}: HeroPortraitProps) => (
  <a
    className="block min-w-0 flex-[1_1_0] min-[480px]:flex-[0_1_138px]"
    href="#instructors"
    {...props}
  >
    <figure className="m-0 min-w-0">
      <img
        className="block aspect-square h-auto w-full max-w-[200px] rounded-xl object-cover [@media(max-width:479px)]:max-w-none"
        src={image}
        alt=""
        width="200"
        height="200"
        fetchPriority="high"
      />
      <figcaption className="mt-3 leading-[1.5]">
        <span className="block text-[17px] font-semibold text-blue">
          {name}
        </span>
        <span className="block text-[14px] text-muted-foreground">
          {`${lessonType} lessons`}
        </span>
      </figcaption>
    </figure>
  </a>
);
