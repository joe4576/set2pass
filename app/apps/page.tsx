import { AppCard } from "@/components/apps/app-card";
import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our apps | Set2Pass",
  description:
    "Explore DriveClass and MiSpeedo, driving apps from Set2Pass for route feedback and tracking your speed, direction and distance.",
};

const apps = [
  {
    name: "DriveClass",
    href: "/apps/driveclass",
    image: "/images/driveclass.webp",
    imageWidth: 483,
    imageHeight: 483,
    imageAlt: "DriveClass app showing a colour coded route map on an iPhone",
    description:
      "Review your driving with a colour coded route map. See braking, acceleration and turns to find areas to work on in your next lesson.",
  },
  {
    name: "MiSpeedo",
    href: "/apps/mi-speedo",
    image: "/images/mispeedo.webp",
    imageWidth: 1280,
    imageHeight: 853,
    imageAlt: "MiSpeedo app showing a digital speedometer on an iPhone",
    description:
      "Track your speed, direction and distance in one place. Choose your display colours and calibrate the GPS speed to match your vehicle's speedometer.",
  },
];

const AppsPage = () => (
  <main id="main-content" tabIndex={-1}>
    <section
      className="py-10 min-[700px]:py-[60px]"
      aria-labelledby="apps-title"
    >
      <Container>
        <PageHeading id="apps-title" variant="compact">
          Our apps
        </PageHeading>
        <p className="mt-6 max-w-[620px]">
          Driving apps from Set2Pass, built to help you review your lessons and
          keep track of your journeys.
        </p>
        <div className="mt-10 grid gap-8 min-[700px]:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.href} {...app} />
          ))}
        </div>
      </Container>
    </section>
  </main>
);

export default AppsPage;
