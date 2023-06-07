import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const { gaMeasurementId } = useRuntimeConfig();
  const router = useRouter();

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: gaMeasurementId,
    },
    isEnabled: false,
  });

  trackRouter(router);
});
