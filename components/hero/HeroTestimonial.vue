<script setup lang="ts">
import { TestimonialCardProps } from "@/components/TestimonialCard.vue";

interface Testimonial extends TestimonialCardProps {
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Chloe",
    imageUrl: "/img/chloe.webp",
    text: "Absolutely fantastic driving instructor, I would 100% recommend. Nikki is a very patient instructor who truly cares about her students and gives them the courage from the very first lesson to when you pass. Thank you so much for the constant encouragement and skill to help me to pass first time!",
  },
  {
    name: "Lucy",
    imageUrl: "/img/lucy.webp",
    text: "I had Sean as my instructor, he was absolutely incredible! He was so kind, patient and helpful and really took the time to make me feel comfortable and confident in my driving. Sean really helped me to build good driving habits and nail the parts that I found nerve racking or difficult. He really cares that his students feel confident and test ready, and it’s down to him that I passed first time. :)",
  },
  {
    name: "Jack",
    imageUrl: "/img/jack.webp",
    text: "I got driving with Sean at the end of February, although I had some driving experience before I still managed to pass with two minors by the end of may. From start to finish he records the things to work on and things your doing well, puts his time into what you need and gives the all the important details you need to know so that you’ll learn quick and easy. Learning to drive has been made to feel easy and simple because of Sean. If you get to learn with him then you’re in good hands, I couldn’t recommend him enough.",
  },
  {
    name: "Ben",
    imageUrl: "/img/ben.webp",
    text: "I have just recently passed first time with no minors through this driving school. From start to finish the teaching, knowledge and experience was above the mark as well as the attention to detail that could be corrected in my driving. I couldn't recommend this service enough. Nikki is a lovely person and is easy to get along with, so that every lesson is consistent, constructive and enjoyable.",
  },
  {
    name: "Stirling",
    imageUrl: "/img/stirling.webp",
    text: "Nikki is a wonderful driving instructor. I contacted her after having lessons from another instructor who made me question my confidence and whether I wanted to drive. Nikki restored my confidence and due to her patience, kindness and knowledge I was able to pass my test first time. I highly recommend Nikki and will always be eternally grateful to her. Thank you.",
  },
  {
    name: "Vicky",
    imageUrl: "/img/vicky.webp",
    text: "Nikki is an absolutely amazing driving instructor! Very friendly, calm and patient during all her lessons! She has such a clear structured way of explaining everything you need to know for being a good driver and staying safe on the roads! I can not thank her enough for truly helping my confidence and comfortably grow as a driver :) 100% would recommend her to anyone!",
  },
  {
    name: "James",
    imageUrl: "/img/james.webp",
    text: "Nikki is an incredibly patient and informative person and driving instructor. She always helped me by providing insightful tips as well as constructive feedback. I always felt I was learning more and more every lesson and was able to clearly see progress. Nikki gave me both confidence and assurance in my own abilities to help me pass my test through her lessons. I would highly recommend Nikki to anyone learning to drive, and can guarantee both an incredible driving instructor and a lovely person to teach you.",
  },
  {
    name: "Isla",
    imageUrl: "/img/isla.webp",
    text: "Nikki was an incredible driving instructor and went above and beyond for me. I felt like I could ask her any questions I had and she would answer them clearly and calmly. She creates such a safe learning environment and encouraged me at every step.",
  },
];
</script>

<template>
  <hero-base title="What our students say" color="background">
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
