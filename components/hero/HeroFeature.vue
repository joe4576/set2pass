<script setup lang="ts">
import { useDisplay } from "vuetify";

interface HeroFeatureProps {
  imageUrl: string;
  imagePosition?: "left" | "right";
}

const { smAndDown, mdAndUp } = useDisplay();

const props = withDefaults(defineProps<HeroFeatureProps>(), {
  imagePosition: "left",
});

const imageColumnOrder = computed((): number => {
  if (smAndDown.value || props.imagePosition === "left") {
    return 0;
  }

  return 1;
});
</script>

<template>
  <hero-base v-bind="$attrs" container-width="950px">
    <v-row class="justify-center">
      <v-col class="d-flex" cols="12" md="5" :order="imageColumnOrder">
        <img class="feature-img" :src="imageUrl" />
      </v-col>
      <v-col class="d-flex justify-center flex-column" cols="12" md="7">
        <h3
          :class="{
            'text-h3': mdAndUp,
            'text-h4': smAndDown,
          }"
          class="mb-4"
        >
          <slot name="title" />
        </h3>
        <slot name="body" />
      </v-col>
    </v-row>
  </hero-base>
</template>

<style scoped>
.feature-img {
  max-width: 100%;
  height: 300px;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
