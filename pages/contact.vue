<script setup lang="ts">
useMetadata({
  title: "Contact | Set2Pass",
  description: "Contact us today to enquire about driving lessons",
});
</script>

<template>
  <hero-base color="background" class="py-12">
    <div class="d-flex justify-center">
      <icon-card
        icon-url="/icon/speech-bubble-icon.svg"
        title="Lessons & Enquiries"
      >
        <a class="section" href="https://facebook.com/Set2Pass" target="_blank">
          <img
            src="/icon/facebook-icon.svg"
            style="width: 33px"
            class="Facebook Icon"
          />
          <div class="section-body">
            <span class="font-weight-bold">Facebook</span>
            <span class="font-weight-light">Message us on Facebook</span>
          </div>
        </a>
        <a class="section" href="tel:07719997000">
          <v-icon style="" size="x-large">mdi-phone</v-icon>
          <div class="section-body">
            <div class="section-body">
              <span class="font-weight-bold">Phone</span>
              <span class="font-weight-light">0771 999 7000</span>
            </div>
          </div>
        </a>
        <a class="section" href="mailto:set2pass@outlook.com">
          <v-icon style="" size="x-large">mdi-email</v-icon>
          <div class="section-body">
            <span class="font-weight-bold">Email</span>
            <span class="font-weight-light">set2pass@outlook.com</span>
          </div>
        </a>
      </icon-card>
    </div>
  </hero-base>
</template>

<style scoped>
.section {
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 1rem;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  height: 75px;
}

@media (hover: hover) {
  .section:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}

.section-body {
  display: flex;
  flex-direction: column;
}
</style>
