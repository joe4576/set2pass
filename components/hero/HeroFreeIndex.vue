<script setup lang="ts">
type FreeIndexApiResponse = {
  numberOfReviews: number;
};

const numberOfReviews = ref(75);

onMounted(async () => {
  const baseUrl = import.meta.env.VITE_FREEINDEX_API_BASE_URL;

  const result = await fetch(
    `${baseUrl}/freeindex/profile(set2pass)_809203.htm`
  );

  if (!result.ok) {
    return;
  }

  const json = (await result.json()) as FreeIndexApiResponse;

  numberOfReviews.value = json.numberOfReviews;
});
</script>

<template>
  <hero-base color="teal-lighten-4">
    <v-row class="align-center justify-center">
      <v-col cols="auto">
        <a
          href="https://www.freeindex.co.uk/profile(set2pass)_809203.htm"
          target="_blank"
          aria-label="See Set2Pass' other reviews on FreeIndex"
        >
          <img
            src="/img/freeindex.webp"
            style="width: 100px"
            alt="FreeIndex Logo"
          />
        </a>
      </v-col>
      <v-col cols="auto">
        <p class="font-weight-bold text-center">
          You can see more reviews on FreeIndex - we're rated 5⭐️ with
          {{ numberOfReviews }}
          reviews!
        </p>
      </v-col>
    </v-row>
  </hero-base>
</template>
