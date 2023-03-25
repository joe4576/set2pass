<script setup lang="ts">
import { BackgroundTypeProps } from "@/components/hero/base/HeroBase.vue";

const { smAndDown } = useVuetifyBreakpoints();

interface HeroPageBannerProps extends BackgroundTypeProps {
  title: string;
}

defineProps<HeroPageBannerProps>();
</script>

<template>
  <hero-base
    :height="smAndDown ? '200px' : '250px'"
    :background-type="'green-gradient'"
  >
    <v-row class="align-center" style="height: 100%" no-gutters>
      <v-col cols="12" class="pa-0 text-center">
        <h1 class="text-h2 text-white">
          {{ title }}
        </h1>
      </v-col>
    </v-row>
  </hero-base>
</template>
