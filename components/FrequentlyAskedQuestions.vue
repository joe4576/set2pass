<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";
import { VCard, VCardText } from "vuetify/components";

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
    content: "Each lesson is 90 minutes. Nikki and Sean charge £60/lesson.",
    icon: "mdi-currency-usd",
    buttonLocation: {
      name: "pricing",
    },
    buttonText: "View pricing",
  },
  {
    title: "Do you offer automatic lessons?",
    content: "Yes. Nikki offers automatic lessons.",
    icon: "mdi-car",
  },
  {
    title: "Which areas do you cover?",
    content: "Locks Heath and surrounding areas.",
    icon: "mdi-map-marker",
  },
  {
    title: "How long is your waiting list?",
    content:
      "Our waiting list depends on your which days and times you are available. Lessons during the day mid-week are available sooner than evenings and weekends.",
    icon: "mdi-calendar",
  },
  {
    title: "Can I book multiple lessons at once?",
    content: "Yes. We offer a 5% discount if you book 10 lessons in advanced.",
    icon: "mdi-bookmark-outline",
    buttonText: "Contact us now",
    buttonLocation: {
      name: "contact",
    },
  },
];
</script>

<template>
  <v-container class="py-0">
    <v-row>
      <v-col cols="12" md="7">
        <component
          :is="$vuetify.display.smAndDown ? 'div' : VCard"
          elevation="4"
        >
          <component :is="$vuetify.display.smAndDown ? 'div' : VCardText">
            <v-row
              v-for="(faq, index) in faqs"
              :key="faq.title"
              :class="{
                'my-8': $vuetify.display.smAndDown && index !== 0,
                'mb-0': $vuetify.display.smAndDown && index === faqs.length - 1,
              }"
            >
              <v-col cols="12" class="pb-0">
                <h5 class="text-h5">
                  {{ faq.title }}
                </h5>
              </v-col>
              <v-col cols="12" class="pt-sm-0 pt-1">
                <p>
                  {{ faq.content }}
                </p>
              </v-col>
            </v-row>
          </component>
        </component>
      </v-col>
      <v-col
        v-if="$vuetify.display.mdAndUp"
        cols="12"
        md="5"
        class="d-flex justify-center mt-8"
      >
        <img
          src="/icon/question-icon.svg"
          alt="Question Mark Icon"
          style="width: 335px"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
