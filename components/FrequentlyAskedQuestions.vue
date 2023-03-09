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
    buttonText: "Contact us now",
    buttonLocation: {
      name: "contact",
    },
  },
];
</script>

<template>
  <v-container class="pb-0">
    <v-row>
      <v-col cols="12" md="7">
        <v-card elevation="4">
          <v-card-text>
            <v-row v-for="(faq, i) in faqs" :key="faq.title">
              <v-col cols="12" class="pb-0">
                <h5 class="text-h5">
                  {{ faq.title }}
                </h5>
              </v-col>
              <v-col cols="12" class="pt-0">
                <p class="text-body-1">
                  {{ faq.content }}
                </p>
              </v-col>
              <v-col
                v-if="faq.buttonLocation && faq.buttonText"
                :class="{
                  // don't remove padding if button is last faq
                  'py-0': i !== faqs.length - 1,
                }"
              >
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
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="5" class="d-flex justify-center mt-8">
        <img
          src="/icon/question-icon.svg"
          alt="Question Mark Icon"
          style="width: 335px"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
