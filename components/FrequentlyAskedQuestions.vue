<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

interface Faq {
  title: string;
  content: string;
  icon: string;
  buttonText?: string;
  buttonLocation?: string | RouteLocationRaw;
}

const faqs: Faq[] = [
  {
    title: "How much do lessons cost?",
    content:
      "Check out pricing page to get the latest prices that we offer for driving lessons",
    icon: "mdi-currency-usd",
    buttonLocation: {
      name: "pricing",
    },
    buttonText: "View pricing",
  },
  {
    title: "Do you offer automatic lessons?",
    content: "Yes, we offer both manual and automatic lessons.\nHello :)",
    icon: "mdi-car",
  },
  {
    title: "Which areas do you cover?",
    content: "We currently cover the Locks Heath and park gate areas.",
    icon: "mdi-map-marker",
  },
  {
    title: "How long is your waiting list?",
    content: `It varies, but typically you will be on the waiting list for a few months.\n
      You will remain on my books and I will contact you as soon as I have an availability`,
    icon: "mdi-calendar",
  },
  {
    title: "How long are the lessons?",
    content:
      "Each lesson is 90 minutes long.\nI have found that this is the optimimal time for students",
    icon: "mdi-clock-outline",
  },
  {
    title: "Can I book multiple lessons at once?",
    content: "Yes, you can buy lessons in bulk",
    icon: "mdi-bookmark-outline",
  },
  {
    title: "What is the Theory Test Pro app?",
    content: "The Theory Test Pro app is....",
    buttonText: "Find out more",
    buttonLocation: {
      name: "how-to-start",
      hash: "#theory-test-pro",
    },
    icon: "mdi-cellphone",
  },
];
</script>

<template>
  <v-expansion-panels multiple class="px-1">
    <v-expansion-panel v-for="faq in faqs" :key="faq.title" elevation="5">
      <v-expansion-panel-title>
        <p class="text-body-1">
          <v-icon v-if="faq.icon" class="mr-2 ml-n2" color="primary">
            {{ faq.icon }}
          </v-icon>
          {{ faq.title }}
        </p>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <p
          v-for="(line, idx) in faq.content.split('\n')"
          :key="idx"
          class="text-body-1"
        >
          {{ line }}
        </p>
        <template v-if="faq.buttonText && faq.buttonLocation">
          <v-divider class="my-4" />
          <v-row>
            <v-spacer />
            <v-col cols="auto">
              <v-btn
                color="primary"
                nuxt
                :to="faq.buttonLocation"
                variant="text"
              >
                {{ faq.buttonText }}
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
