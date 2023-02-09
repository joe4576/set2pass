<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";
import { BackgroundTypeProps } from "~~/components/hero/base/HeroBase.vue";

const { smAndDown } = useDisplay();
const hasMounted = ref(false);

interface HeroPageBannerProps extends BackgroundTypeProps {
  title: string;
}

defineProps<HeroPageBannerProps>();

onMounted(() => {
  hasMounted.value = true;
});
</script>

<template>
  <hero-base
    v-if="hasMounted"
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
