import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default (phase) => {
  // The static export uses public/_redirects on Cloudflare. Mirror those rules
  // in the Next.js development server so the old URLs also work on localhost.
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      async redirects() {
        return [
          {
            source: "/driveclass/:path*",
            destination: "/apps/driveclass/:path*",
            permanent: true,
          },
          {
            source: "/mispeedo/:path*",
            destination: "/apps/mi-speedo/:path*",
            permanent: true,
          },
        ];
      },
    };
  }

  return nextConfig;
};
