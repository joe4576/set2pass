import { AppStoreButton } from "@/components/apps/app-store-button";
import { Container } from "@/components/shared/container";

type AppHeaderSectionProps = {
  altText: string;
  appStoreLink: string;
  description: string;
  imageHeight: number;
  imageWidth: number;
  img: string;
  title: string;
};

export const AppHeaderSection = ({
  altText,
  appStoreLink,
  description,
  imageHeight,
  imageWidth,
  img,
  title,
}: AppHeaderSectionProps) => (
  <section className="py-10 min-[700px]:py-[60px]">
    <Container className="min-[700px]:grid min-[700px]:grid-cols-2 min-[700px]:items-center min-[700px]:gap-[50px]">
      <div>
        <h1 className="text-[clamp(4rem,8vw,6rem)]">{title}</h1>
        <p className="my-6 max-w-[530px]">{description}</p>
        <AppStoreButton href={appStoreLink} />
      </div>
      <div className="mt-8 bg-secondary p-6 min-[700px]:m-0 min-[700px]:p-7">
        <img
          className="max-h-[430px] w-full object-contain"
          src={img}
          alt={altText}
          width={imageWidth}
          height={imageHeight}
          fetchPriority="high"
        />
      </div>
    </Container>
  </section>
);
