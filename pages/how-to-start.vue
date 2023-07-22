<script setup lang="ts">
interface TimelineItem {
  icon?: string;
  title: string;
  body: string;
  href?: string;
  nuxt?: {
    to: string;
  };
  target?: "_self" | "_blank" | "_parent" | "_top";
  buttonText?: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: "Check that you're allowed to drive",
    body: "Most people can learn to drive after they turn 17. You need to check the government website to check that there are no other factors that affect whether you will be allowed to drive.",
    href: "https://www.gov.uk/learn-to-drive-a-car#check-you-re-allowed-to-drive",
  },
  {
    title: "Get a Provisional Licence",
    body: "You are legally not allowed to take driving lessons without a provisional licence. Your instructor will check if your licence is valid on your first driving lesson, but please make sure you double check first.",
    href: "https://www.gov.uk/apply-first-provisional-driving-licence?step-by-step-nav=e01e924b-9c7c-4c71-8241-66a575c2f61f",
  },
  {
    title: "Book your driving lessons",
    body: "Once you know you're allowed to drive, and you have a valid provisional licence, please get in touch with us to arrange driving lessons!",
    nuxt: {
      to: "contact",
    },
    buttonText: "Contact us",
  },
  {
    title: "Prepare for your Theory Test",
    body: "Preparation for your theory test can begin as early as you'd like! Your instructor will also advise you when they think you should start to prepare. We also offer a free Theory Test Pro subscription to all of our students.",
    href: "https://www.gov.uk/learn-to-drive-a-car#prepare-for-your-theory-test",
    buttonText: "How to prepare",
  },
  {
    title: "Book your Theory Test",
    body: "Once you feel you are suitably prepared, you can book your theory test through the government website.",
    href: "https://www.gov.uk/learn-to-drive-a-car#book-and-manage-your-theory-test",
    buttonText: "Book now",
  },
  {
    title: "Book your Practical Test",
    body: "Once you have passed your theory test, and your instructor lets you know that you're ready, you can book your practical test through the government website.",
    href: "https://www.gov.uk/learn-to-drive-a-car#book-and-manage-your-driving-test",
    buttonText: "Book now",
  },
];

useMetadata({
  title: "How to Start | Set2Pass",
  description:
    "Learn about the steps you need to take to become a full license holder.",
});
</script>

<template>
  <hero-page-banner title="How to get started" />
  <hero-base color="background" class="py-3">
    <v-timeline side="end">
      <v-timeline-item
        v-for="(item, idx) in timelineItems"
        :key="idx"
        :dot-color="idx % 2 === 0 ? 'primary' : 'secondary'"
        :icon="item.icon ?? 'mdi-check'"
        max-width="600px"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props" class="mx-2" :elevation="isHovering ? 4 : 2">
            <v-card-text>
              <p class="text-h6 mb-1">{{ item.title }}</p>
              <p>{{ item.body }}</p>
            </v-card-text>
            <v-card-actions v-if="item.href || item.nuxt">
              <template v-if="item.nuxt">
                <v-btn nuxt :to="item.nuxt.to" color="primary">
                  {{ item.buttonText ?? "Find out more" }}
                </v-btn>
              </template>
              <template v-else-if="item.href">
                <v-btn
                  :href="item.href"
                  color="primary"
                  :target="item.target ?? '_blank'"
                >
                  {{ item.buttonText ?? "Find out more" }}
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-timeline-item>
    </v-timeline>
  </hero-base>

  <hero-book-now />
</template>
