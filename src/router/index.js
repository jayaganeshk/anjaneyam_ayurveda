import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "@/Pages/HomePage.vue";
import OurDoctors from "@/components/HomePage/OurDoctors.vue";
import TreatmentsProvided from "@/components/HomePage/TreatmentsProvided.vue";
import OurVaidyasala from "@/Pages/OurVaidyasala.vue";
import Ayurveda from "@/Pages/Ayurveda.vue";
import OurDoctor from "@/Pages/OurDoctor.vue";
import ContactUs from "@/Pages/ContactUs.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "HomePage",
    },
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/OurDoctors",
    name: "OurDoctors",
    component: OurDoctors,
  },
  {
    path: "/TreatmentsProvided",
    name: "TreatmentsProvided",
    component: TreatmentsProvided,
  },
  {
    path: "/OurVaidyasala",
    name: "OurVaidyasala",
    component: OurVaidyasala,
  },
  {
    path: "/Ayurveda",
    name: "Ayurveda",
    component: Ayurveda,
  },
  {
    path: "/OurDoctor/:id",
    name: "OurDoctor",
    component: OurDoctor,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
