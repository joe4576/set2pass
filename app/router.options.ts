import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 0,
        behavior: "smooth",
      };
    }

    if (to.path !== from.path) {
      return { top: 0 };
    }

    return { top: 0, behavior: "smooth" };
  },
} as RouterConfig;
