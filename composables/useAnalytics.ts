import { useState } from "vue-gtag-next";
import Cookies from "js-cookie";

export function useAnalytics() {
  const { isEnabled } = useState();
  const { gaMeasurementId } = useRuntimeConfig();

  const enable = () => {
    if (isEnabled !== undefined) {
      isEnabled.value = true;
      (window as any)[`ga-disable-${gaMeasurementId}`] = false;
    }
  };

  const disable = () => {
    if (isEnabled !== undefined) {
      isEnabled.value = false;
      (window as any)[`ga-disable-${gaMeasurementId}`] = true;

      // remove all GA cookies
      Object.keys(Cookies.get())
        .filter((cookie) => /^(_ga)/.test(cookie))
        .forEach((cookie) => Cookies.remove(cookie));
    }
  };

  return {
    enable,
    disable,
  };
}
