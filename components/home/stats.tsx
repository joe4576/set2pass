import { Container } from "@/components/shared/container";
import { Stat } from "@/components/shared/stat";
import { passRates, prices, lessonDetails } from "@/lib/constants";

export const Stats = () => (
  <div className="bg-secondary">
    <Container>
      <dl className="m-0 grid grid-cols-1 gap-y-6 py-6 text-center min-[700px]:grid-cols-4 min-[700px]:items-center min-[700px]:gap-y-0 min-[700px]:py-10">
        <Stat label="Per hour" value={prices.hourly} />
        <Stat
          className="min-[700px]:border-l min-[700px]:border-border"
          label="Lesson duration"
          value={<>{lessonDetails.durationMinutes} min</>}
        />
        <Stat
          className="min-[700px]:border-l min-[700px]:border-border"
          label="Pass rate*"
          value={passRates.nikki}
        />
        <Stat
          className="min-[700px]:border-l min-[700px]:border-border [&>dt]:hidden"
          description=" & surrounding areas"
          label="Our local area"
          value={lessonDetails.area}
        />
      </dl>
    </Container>
  </div>
);
