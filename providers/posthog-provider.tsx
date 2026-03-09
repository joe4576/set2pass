"use client";

import posthog from "posthog-js";
import { PostHogProvider as PhProvider } from "posthog-js/react";
import { ReactNode, useEffect } from "react";

type PostHogProviderProps = {
  children: ReactNode;
};

export const PostHogProvider = ({ children }: PostHogProviderProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      return;
    }

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: "2026-01-30",
      cookieless_mode: "always",
    });
  }, []);

  return <PhProvider client={posthog}>{children}</PhProvider>;
};
