<script setup lang="ts"></script>

<template>
  <hero-base title="Our Instructors">
    <v-container class="py-0">
      <v-row>
        <v-col cols="12">
          <instructor name="Nikki Brown" image-src="/img/nikki.webp">
            <h3>About Nikki</h3>
            <p>
              Nikki is the owner of Set2Pass. She is a fully qualified ADI who
              has been teaching students how to drive since 2019. She has an
              impressive pass rate of 86.2%, compared to the national average of
              48.5%.
            </p>
            <p>Nikki offers both manual and automatic driving lessons.</p>
            <h3>Qualifications</h3>
            <div class="badge-container">
              <badge image-url="/img/iam-roadsmart.svg" />

              <badge image-url="/img/dvsa-badge.webp" />

              <badge image-url="/img/pass-plus-badge.webp" />
            </div>
            <v-col cols="12" class="my-4">
              <v-divider />
            </v-col>
            <h3>Additional Qualifications/Certifications</h3>
            <h4>Level 3 Award in Education and Training</h4>
            <p>
              Fundamental understanding of the roles and responsibilities of a
              teacher/trainer in relation to legislation, equality, diversity,
              inclusivity and meeting the needs of learners
            </p>
            <h4>
              Driving Instructors Association Diploma in Driver Education
              (DipDE)
            </h4>
            <p>
              An industry-based vocational qualification that consolidates the
              various aspects of a driver trainer's role. These range from
              knowing legal obligations and regulations, business knowledge,
              understanding mechanical and vehicle technology aspects, and
              driving theory and teaching knowledge
            </p>
          </instructor>
        </v-col>
        <v-col cols="12" class="my-8 my-md-4">
          <v-divider />
        </v-col>
        <v-col cols="12">
          <instructor name="Sean Brown" image-src="/img/sean.webp">
            <h3>About Sean</h3>
            <p>
              Sean is a newly-qualified PDI. He is a qualified advanced driver,
              and is undergoing training to become a fully certified driving
              instructor. He is accepting new students to start lessons ASAP.
            </p>
            <p>Sean offers manual lessons.</p>
            <h3>Qualifications</h3>
            <div class="badge-container">
              <badge image-url="/img/iam-roadsmart.svg" />

              <badge image-url="/img/pdi-badge.webp" />
            </div>
          </instructor>
        </v-col>
      </v-row>
    </v-container>
  </hero-base>
</template>

<style scoped>
.badge-container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

h3,
h4 {
  margin: 12px auto;
}

@media (max-width: 960px) {
  .badge-container {
    justify-content: center;
  }

  h3,
  h4 {
    margin: 14px auto;
  }
}
</style>
