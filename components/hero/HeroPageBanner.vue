<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";

const { smAndDown } = useDisplay();
const hasMounted = ref(false);

defineProps<{
  title: string;
}>();

onMounted(() => {
  hasMounted.value = true;
});
</script>

<template>
  <hero-base
    v-if="hasMounted"
    :height="smAndDown ? '200px' : '350px'"
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
