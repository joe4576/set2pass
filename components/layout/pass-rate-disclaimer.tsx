"use client";

import { Container } from "@/components/shared/container";
import { passRates } from "@/lib/constants";
import { usePathname } from "next/navigation";

export const PassRateDisclaimer = () => {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <Container className="mt-4">
      <p className="text-[14px] leading-[1.5] text-muted-foreground">
        *Nikki's pass rate is based on DVSA data for the preceding 12-month
        reporting period. National average: {passRates.nationalAverage}.
      </p>
    </Container>
  );
};
