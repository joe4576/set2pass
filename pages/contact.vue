<script setup lang="ts">
useMetadata({
  title: "Contact | Set2Pass",
  description: "Contact us today to enquire about driving lessons",
});
</script>

<template>
  <hero-page-banner title="Contact us" />
  <hero-base color="background" class="py-12">
    <div class="d-flex justify-center">
      <icon-card icon-url="/icon/speech-bubble-icon.svg" title="Get in touch">
        <v-row class="pt-4">
          <v-col cols="auto">
            <img
              src="/icon/facebook-icon.svg"
              style="width: 33px"
              class="Facebook Icon"
            />
          </v-col>
          <v-col cols="auto" class="text-h6">
            <a href="https://www.facebook.com/Set2Pass/"
              >facebook.com/Set2Pass</a
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-icon style="padding-left: 4px" size="x-large">mdi-phone</v-icon>
          </v-col>
          <v-col cols="auto" class="text-h6">
            <a href="tel:07719997000">0771 999 7000</a>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-icon style="padding-left: 4px" size="x-large">mdi-email</v-icon>
          </v-col>
          <v-col cols="auto" class="text-h6">
            <a href="mailto:set2pass@outlook.com">set2pass@outlook.com</a>
          </v-col>
        </v-row>
      </icon-card>
    </div>
  </hero-base>
</template>
