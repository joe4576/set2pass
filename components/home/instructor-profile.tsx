export type InstructorProfileProps = {
  bio: string;
  image: string;
  name: string;
  qualifications: string[];
  role: string;
  type: string;
};

export const InstructorProfile = ({
  bio,
  image,
  name,
  qualifications,
  role,
  type,
}: InstructorProfileProps) => (
  <article className="not-first:border-t not-first:border-[#bdcfdc] not-first:pt-9 min-[700px]:grid min-[700px]:grid-cols-[300px_1fr] min-[700px]:gap-10 min-[700px]:not-first:pt-10">
    <div className="mb-6 flex items-center gap-5 min-[700px]:m-0 min-[700px]:flex-col min-[700px]:items-start">
      <img
        className="h-[125px] w-[110px] rounded-xl object-cover min-[700px]:size-40"
        src={image}
        alt={name}
        width="200"
        height="200"
        loading="lazy"
      />
      <div>
        <h3 className="text-[30px]">{name}</h3>
        <p className="mt-1.5 text-[14px]">{role}</p>
        <p className="mt-1.5 text-[16px] font-semibold text-primary">
          {type} lessons
        </p>
      </div>
    </div>
    <div className="min-[700px]:pt-2">
      <p className="max-w-[660px]">{bio}</p>
      <div className="mt-[22px]">
        <h4 className="py-4 font-sans text-[17px] font-semibold leading-[1.5]">
          Qualifications
        </h4>
        <ul className="m-0 flex list-disc flex-col gap-2 pb-5 pl-5 text-[15px]">
          {qualifications.map((qualification) => (
            <li key={qualification}>{qualification}</li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);
