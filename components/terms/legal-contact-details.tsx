import { NoteCard } from "@/components/terms/note-card";
import { contactDetails } from "@/lib/constants";

type LegalContactDetailsProps = {
  showPhone?: boolean;
};

export const LegalContactDetails = ({
  showPhone = false,
}: LegalContactDetailsProps) => (
  <NoteCard>
    <h2 className="font-heading text-[28px] leading-[1.4] font-semibold text-foreground">
      Contact Details
    </h2>
    <div className="mt-4 flex flex-col gap-2 text-muted-foreground">
      <p>
        <span className="font-medium text-foreground">Name:</span> Nikki Brown
      </p>
      {showPhone && (
        <p>
          <span className="font-medium text-foreground">Phone:</span>{" "}
          <a
            href={contactDetails.phoneLink}
            className="underline underline-offset-2 transition-colors hover:text-blue"
          >
            {contactDetails.phone}
          </a>
        </p>
      )}
      <p>
        <span className="font-medium text-foreground">Email:</span>{" "}
        <a
          href={`mailto:${contactDetails.email}`}
          className="underline underline-offset-2 transition-colors hover:text-blue"
        >
          {contactDetails.email}
        </a>
      </p>
      <p>
        <span className="font-medium text-foreground">Web:</span>{" "}
        <a
          href="https://www.set2pass.co.uk"
          className="underline underline-offset-2 transition-colors hover:text-blue"
        >
          www.set2pass.co.uk
        </a>
      </p>
    </div>
  </NoteCard>
);
