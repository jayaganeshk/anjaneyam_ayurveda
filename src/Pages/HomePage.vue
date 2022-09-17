<template>
  <div>
    <HomeCarousel />
    <WelcomeTo />
    <TreatmentsProvided />
    <VisionOf class="my-4" />
    <OurDoctors />
  </div>
</template>

<script>
import HomeCarousel from "@/components/HomeCarousel.vue";
import WelcomeTo from "@/components/Welcome.vue";
import TreatmentsProvided from "@/components/HomePage/TreatmentsProvided.vue";
import VisionOf from "@/components/HomePage/VisionOf.vue";
import OurDoctors from "@/components/HomePage/OurDoctors.vue";

export default {
  name: "HomePage",
  components: {
    HomeCarousel,
    WelcomeTo,
    TreatmentsProvided,
    VisionOf,
    OurDoctors,
  },
};
</script>

<style></style>
