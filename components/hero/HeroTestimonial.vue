<script setup lang="ts">
import { TestimonialCardProps } from "@/components/TestimonialCard.vue";

interface Testimonial extends TestimonialCardProps {
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Tom",
    imageUrl: "/img/tom.webp",
    text: "Overall, I believe had I not been with Nikki, I would not have passed first time. Her dedication to give me constructive feedback after the lesson led me to know my strengths and weaknesses, actively working on the latter, with her in the very next lesson. This proactive approach, made me feel I had value for money, as the quality of the service was very very high. Thank you Nikki!",
  },
  {
    name: "Georgia",
    imageUrl: "/img/georgia.webp",
    text: "Massive thank you to to Nikki who helped me pass my test first time after just 17 hours of tuition! She was calm, understanding and incredibly patient and I couldn't recommend her enough.",
  },
  {
    name: "Harry",
    imageUrl: "/img/harry.webp",
    text: "Nikki helped me gain confidence on the road and was very patient withme. She was always up to date with my progress and knew exactly what Ineeded to do next to progress. After every lesson I felt I wasimproving which really helps if you're an overthinker or worrier likemyself. And after passing first time with one 1 minor I can wholehartedly say Nikki is the best instructor out there and I will be recommending her to all my friends and family.",
  },
];
</script>

<template>
  <hero-base title="What our students say">
    <v-row class="justify-space-evenly align-center">
      <v-col v-for="(testimonial, idx) in testimonials" :key="idx" cols="auto">
        <testimonial-card
          :name="testimonial.name"
          :image-url="testimonial.imageUrl"
        >
          {{ testimonial.text }}
        </testimonial-card>
      </v-col>
    </v-row>
  </hero-base>
</template>
