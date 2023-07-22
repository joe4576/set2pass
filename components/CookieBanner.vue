<script setup lang="ts">
const { enable, disable } = useAnalytics();

const showBanner = ref(false);

const cookieKey = "cookies-accepted";

onMounted(() => {
  const userHasAcceptedCookies = localStorage.getItem(cookieKey);

  if (userHasAcceptedCookies === null) {
    showBanner.value = true;
  }

  if (userHasAcceptedCookies === "true") {
    enable();
  }
});

const accept = () => {
  enable();
  localStorage.setItem(cookieKey, "true");
  showBanner.value = false;
};

const reject = () => {
  disable();
  localStorage.setItem(cookieKey, "false");
  showBanner.value = false;
};
</script>

<template>
  <v-card
    v-if="showBanner"
    v-bind="$attrs"
    class="cookie-banner"
    elevation="24"
  >
    <v-card-text>
      <v-container class="py-0 max-width">
        <v-row class="justify-space-between align-center text-center">
          <v-col cols="12" md="auto">
            Set2Pass uses cookies to track how the website is used. This helps
            us improve the user experience.
          </v-col>
          <v-col cols="12" md="auto" class="d-flex justify-center">
            <v-btn variant="text" color="red" @click="reject">Reject</v-btn>
            <v-btn class="ml-3" color="green" @click="accept">Accept</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
