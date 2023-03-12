/**
 * Wrapper for Nuxt's `useHead` composable
 */
export function useMetadata(options: {
  title: string;
  description: string;
}): void {
  useHead({
    title: options.title,
    meta: [
      {
        name: "description",
        content: options.description,
      },
    ],
  });
}
