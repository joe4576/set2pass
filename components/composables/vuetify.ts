import { useContext } from "@nuxtjs/composition-api";
import { Framework } from "vuetify";

export function useVuetify() {
  // @ts-ignore
  const { $vuetify } = useContext();

  return {
    vuetify: $vuetify as Framework,
  };
}
