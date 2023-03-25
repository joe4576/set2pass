import { useDisplay, type DisplayInstance } from "vuetify";
import type { Ref } from "vue";

type UnwrappedDisplayInstance = {
  [K in keyof DisplayInstance]: DisplayInstance[K] extends Ref<infer U>
    ? U
    : DisplayInstance[K];
};

type BreakpointKeys = Extract<
  keyof UnwrappedDisplayInstance,
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "smAndDown"
  | "smAndUp"
  | "mdAndDown"
  | "mdAndUp"
  | "lgAndDown"
  | "lgAndUp"
>;

type Breakpoints = {
  [K in BreakpointKeys]: UnwrappedDisplayInstance[K];
};

/**
 * Access Vuetify display breakpoints in a way that prevents
 * hydration mismatch between client and server rendered code
 */
export function useVuetifyBreakpoints() {
  const display = useDisplay();

  const breakpoints = reactive<Breakpoints>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    smAndDown: false,
    smAndUp: false,
    mdAndDown: false,
    mdAndUp: false,
    lgAndDown: false,
    lgAndUp: false,
  });

  onMounted(() => {
    watchEffect(() => {
      Object.keys(breakpoints).forEach((key) => {
        const typedKey = key as keyof Breakpoints;
        breakpoints[typedKey] = display[typedKey].value;
      });
    });
  });

  return {
    ...toRefs(breakpoints),
  };
}
