<script setup lang="ts">
interface Clause {
  text: string;
  title?: boolean;
  listItems?: string[];
}

const clauses: Clause[] = [
  {
    text: "The following terms and conditions apply to any individual taking driver training with Set2Pass Driving School or any of its trainers/subcontractors: ",
  },
  {
    text: "'Student' or 'the driver' refers to the individual receiving driver training.",
  },
  {
    text: "'ADI' or 'PDI' or 'Instructor' refers to the individual licensed to deliver driving tuition. ",
  },
  {
    text: " If you have any issues with the service or training, please do not hesitate to get in touch.  Contact details can be found at the bottom of this document.  If this does not resolve the issue, you can contact the DVSA directly.  The DVSA is the regulatory body that governs ADIs and PDIs.  Their contact details can be found, at the date of writing, at: https://www.gov.uk/contact-dvsa. This does not affect your statutory rights. ",
  },
  { text: "Driving Licences and Fitness to Drive", title: true },
  {
    text: "The Student must provide the Instructor with a valid licence to drive in the UK before the commencement of their first driving lesson.  If the Student fails to provide a valid licence, the Instructor will refuse to conduct the driving lesson and the lesson fee will be payable in full.",
  },
  {
    text: "The Student must be fit to drive and must disclose any relevant medical condition(s) that may affect their theory or practical test. This includes any relevant allergies or learning needs.",
  },
  {
    text: "The Student must notify the Instructor of any matters that affect their ability or entitlement to have driving tuition, e.g. loss of a valid driving licence.",
  },
  {
    text: "The Student must demonstrate that they can read a standard car number plate at a distance of 20.5 metres.  Instructors will perform a roadside eyesight check; however, they reserve the right to request an optician to confirm that the Student's eyesight meets the requirements.",
  },
  {
    text: "The Student must inform the Instructor of any upcoming court hearings with regards to driving offences, including fixed penalties or driver awareness courses, before entering the vehicle.",
  },
  {
    text: "The Instructor reserves the right to cancel a lesson if it is suspected that the Student may be unfit to drive due to the effects of alcohol, drugs (prescribed or recreational) or any other conditions that would hinder the Student's ability to drive.  The lesson fee will be payable in full.",
  },
  {
    text: "If the Instructor carries a breathalyser, the Student may be asked to provide a specimen of breath.  Notwithstanding the previous points, judgements on the Student's condition will be made at the discretion of the Instructor.  An alternative lesson on theory training, legal requirements, personal judgements and/or coping strategies may be offered in the place of a practical lesson, which is chargeable at the full rate.",
  },
  {
    text: "Use of Private Vehicle",
    title: true,
  },
  {
    text: "The Instructor may agree to deliver training in a private (owned or operated by the Student) vehicle. It is the vehicle owner and Student's responsibility to make sure that all legalities are addressed.  This includes, but is not limited to:",
    listItems: [
      "Insurance.  Insurance must cover “paid for driving tuition” and, in the case of a test, “the driving test”.  The journey after the test must also be covered.  The Student should be able to provide evidence of the insurance policy.",
      "All vehicles must be safe and road legal.  This will be assessed by the Instructor.  If the vehicle is not deemed safe and road legal, the lesson will be postponed or cancelled and will be chargeable in full.",
      "Points, fines or penalties will be the sole responsibility of the vehicle owner and/or Student.  This could include loss of earnings, reputation or damages.",
      "The Instructor will take reasonable measures to prevent damage to the Student's or third party's person or property.  The Instructor has no liability to do so. ",
    ],
  },
  {
    text: "Legal Responsibility",
    title: true,
  },
  {
    text: "The Student has the legal responsibility to ensure they are driving in accordance with the law.  Tickets/penalties will be legally those of the Student, regardless of the licence status.  The Instructor will take reasonable measures to ensure that the Student is aware of the law and if they are at risk of infringing it.  The Instructor is legally obliged to report details of any Student on request.  This does not affect your statutory rights.",
  },
  {
    text: "Data Protection and Student Tracking",
    title: true,
  },
  {
    text: "Set2Pass will keep records including personal information, track Student progress and may use technology to do so.  Set2Pass will take reasonable measures to ensure this data is protected.  The Student can contact the Instructor to get a copy of all data held on them upon request.  Each Instructor car is fitted with a dash cam that records outward-facing video but no audio.",
  },
  {
    text: "Your data will be held until it is no longer deemed relevant, at which point all data will be destroyed or deleted.  The Student can request the Instructor to destroy data at any point.",
  },
  {
    text: "Set2Pass may use photographs and Student testimonials on Set2Pass' public Facebook page for the purposes of promotion.  This usage will be agreed with the Student.",
  },
  { text: "Passengers", title: true },
  {
    text: "When safe to do so, and at the Instructor's discretion, a passenger will be welcome.",
  },
  { text: "Personal Property", title: true },
  {
    text: "Set2Pass accepts no liability for Student's personal property that is left in any training vehicle.",
  },
  { text: "Mobile Phones", title: true },
  {
    text: "For safety reasons, Students should ensure that mobile phones are switched off / in flight-safe mode prior to entering the tuition vehicle.  UK Law prohibits the use of mobile phones whilst driving. ",
  },
  { text: "Bookings", title: true },
  {
    text: "Bookings are made as an agreement between the individual Instructor and Student.  Payments will be made between Students and Instructors.  Refunds can be discussed with the Instructor.",
  },
  {
    text: "In the event of mechanical breakdown or other difficulty outside the control of the Instructor, the Instructor reserves the right to rearrange lessons at short notice.",
  },
  { text: "Payments and Cancellations", title: true },
  {
    text: "Payments will be made before each session, unless agreed otherwise with the Instructor.  Payment via a bank transfer is preferred.  Cheques will not be accepted unless there is an agreement with the Instructor.",
  },
  {
    text: "Cancellations must be given within 48 hours of the appointed lesson slot.  The Student will still have to pay for the lesson if notice is given in any amount of time less than 48 hours.",
  },
  { text: "Practical Tests", title: true },
  {
    text: "The standard hourly rate will apply when Students are taking their practical test.  Set2Pass cannot be held responsible for any loss or perceived loss in the event of a cancelled test.",
  },
  {
    text: "COVID-19",
    title: true,
  },
  {
    text: "Set2Pass complies with DVSA COVID-19 safety guidelines by:",
    listItems: [
      "Sanitising all controls, door handles and relevant surfaces",
      "Sanitising hands before and after each lesson",
      "Wearing required PPE (unless not required due to special circumstances)",
      "Rolling down windows to maximise airflow.",
    ],
  },
  {
    text: "Any Student displaying signs of illness will not be allowed to enter the tuition vehicle.",
  },
  {
    text: "Set2Pass will not be held responsible or liable should anyone become infected following a driving lesson.",
  },
  {
    text: "Contact Details",
    title: true,
  },
  { text: "Nikki Brown" },
  { text: "0771 999 7000" },
  { text: "set2pass@outlook.com" },
  { text: "www.set2pass.co.uk" },
];
</script>

<template>
  <hero-page-banner title="Terms and Conditions" class="mb-12" />
  <div class="container">
    <template v-for="(clause, idx) in clauses" :key="idx">
      <p
        :class="{
          'text-body-1': true,
          'font-weight-bold': clause.title,
        }"
      >
        {{ clause.text }}
      </p>

      <ul v-if="clause.listItems">
        <li v-for="(item, itemIdx) in clause.listItems" :key="itemIdx">
          <p class="text-body-1">{{ item }}</p>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}

ul {
  margin-left: 35px;
}

p {
  margin-bottom: 12px;
}
</style>
