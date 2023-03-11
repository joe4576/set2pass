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
      "Lessons are £40/hour. I teach 90 minute lessons, so that will be £60 per lesson.",
    icon: "mdi-currency-usd",
    buttonLocation: {
      name: "pricing",
    },
    buttonText: "View pricing",
  },
  {
    title: "Do you offer automatic lessons?",
    content: "Yes. I offer automatic and manual lessons.",
    icon: "mdi-car",
  },
  {
    title: "Which areas do you cover?",
    content: "Locks Heath and surrounding areas.",
    icon: "mdi-map-marker",
  },
  {
    title: "How long is your waiting list?",
    content: "My waiting list is typically 4-6 months.",
    icon: "mdi-calendar",
  },
  {
    title: "Can I book multiple lessons at once?",
    content:
      "Yes. I offer a 5% discount if you book 10 90 minute lessons in advanced.",
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
