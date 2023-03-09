<script setup lang="ts">
import { TestimonialCardProps } from "@/components/TestimonialCard.vue";

interface Testimonial extends TestimonialCardProps {
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mary",
    imageUrl: "/img/mary.webp",
    text: "So pleased that I learnt to drive with Set2Pass. It was really useful to receive feedback, that was both constructive and helpful, during and after each lesson. At a time where many students are struggling with the process of learning to drive anad taking the driving test, I was very lucky to have Nikki to guide and support me.",
  },
  {
    name: "Tom",
    imageUrl: "/img/tom.webp",
    text: "Overall, I believe had I not been with Nikki, I would not have passed first time. Her dedication to give me constructive feedback after the lesson led me to know my strengths and weaknesses, actively working on the latter, with her in the very next lesson. This proactive approach, made me feel I had value for money, as the quality of the service was very very high. Thank you Nikki!",
  },
  {
    name: "Emily",
    imageUrl: "/img/emily.webp",
    text: "Nikki was the most amazing driving instructor. She helped me through everything and was so calm when teaching. She made me feel comfortable to ask any questions I had or to say when I wasn't sure of something. I passed first time and couldn't be more grateful!",
  },
  {
    name: "Harry",
    imageUrl: "/img/harry.webp",
    text: "Nikki helped me gain confidence on the road and was very patient with me. She was always up to date with my progress and knew exactly what I needed to do next to progress. After every lesson I felt I was improving which really helps if you're an overthinker or worrier like myself. And after passing first time with one 1 minor I can wholehartedly say Nikki is the best instructor out there and I will be recommending her to all my friends and family.",
  },
  {
    name: "Ryan",
    imageUrl: "/img/ryan.webp",
    text: "Nikki has absolutely saved my life! I failed my test a series of times years ago and for the best part of 8 years I didn't even want to consider driving again. I'm so grateful that I met Nikki because she completely transformed my confidence to the point where I actually quite enjoy driving! I just passed my test today and I can 100% say that if it wasn't for Nikki I probably still wouldn't want to drive, so I would recommend her to aboslutely anyone that is looking to get out on the road!",
  },
  {
    name: "Georgia",
    imageUrl: "/img/georgia.webp",
    text: "Massive thank you to to Nikki who helped me pass my test first time after just 17 hours of tuition! She was calm, understanding and incredibly patient and I couldn't recommend her enough.",
  },
];
</script>

<template>
  <hero-base title="What our students say">
    <div class="card-container">
      <testimonial-card
        v-for="(testimonial, idx) in testimonials"
        :key="idx"
        class="card"
        :name="testimonial.name"
        :image-url="testimonial.imageUrl"
      >
        {{ testimonial.text }}
      </testimonial-card>
    </div>
  </hero-base>
</template>

<style scoped>
.card-container {
  column-count: 3;
  -webkit-column-count: 3;
  -moz-column-count: 3;
}

@media (max-width: 1200px) {
  .card-container {
    column-count: 2;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    max-width: 740px;
    margin: 0 auto;
  }
}
@media (max-width: 800px) {
  .card-container {
    column-count: 1;
    -webkit-column-count: 1;
    -moz-column-count: 1;
  }
}

.card {
  margin: 0 auto 1.5rem;
}
</style>
