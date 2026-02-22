import { AppleIcon } from "@/components/apps/apple-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type AppHeaderSectionProps = {
  img: string;
  altText: string;
  title: string;
  description: string;
  appStoreLink: string;
};

export const AppHeaderSection = ({
  img,
  altText,
  title,
  description,
  appStoreLink,
}: AppHeaderSectionProps) => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto p-6 lg:py-32">
        <div className="flex-1">
          <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary hidden lg:inline-block">
            iOS App
          </span>

          <h1
            className="mt-5 text-balance text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground text-center lg:text-left">
            {description}
          </p>

          <div className="mt-8 flex justify-center lg:justify-start items-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                <AppleIcon className="size-5" />
                Download on the App Store
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={img}
            alt={altText}
            width={400}
            height={500}
            className="rounded-2xl shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};
