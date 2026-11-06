export type StudentReviewProps = {
  img: string;
  instructor: string;
  name: string;
  text: string;
};

export const StudentReview = ({
  img,
  instructor,
  name,
  text,
}: StudentReviewProps) => (
  <article className="border-t border-border py-6 min-[700px]:py-7">
    <div className="mb-[18px] flex items-center gap-4">
      <img
        className="size-[60px] rounded-xl object-cover"
        src={img}
        alt=""
        width="100"
        height="100"
        loading="lazy"
      />
      <div>
        <h3 className="text-[25px]">{name}</h3>
        <p className="mt-[3px] text-[14px] text-muted-foreground">
          Student of {instructor}
        </p>
      </div>
    </div>
    <blockquote className="m-0 max-w-[65ch] text-[16px] leading-[1.75]">
      {text}
    </blockquote>
  </article>
);
