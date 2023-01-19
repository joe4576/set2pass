import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const theme: ThemeDefinition = {
    dark: false,
    colors: {
      background: "#E8EAF6",
      primary: "#0d47a1",
      secondary: "#4db6ac",
    },
  };

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        theme,
      },
      defaultTheme: "theme",
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
