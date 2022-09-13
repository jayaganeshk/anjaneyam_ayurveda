<template>
  <v-app>
    <v-app-bar app color="white" prominent v-if="isDesktop">
      <v-layout row v-if="isDesktop">
        <v-app-bar-nav-icon class="ma-6 mt-12">
          <v-img src="./assets/logo.png" contain max-height="100px"></v-img>
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <div class="ma-auto" justify-center>
          <span v-for="tabTitle in tabTitles" :key="tabTitle">
            <v-btn
              rounded
              color="primary"
              class="ma-1"
              v-if="tabTitle == selectedTab"
              @click="navigateTo(tabTitle)"
            >
              {{ tabTitle }}
            </v-btn>
            <v-btn
              rounded
              text
              class="ma-1"
              v-else
              @click="navigateTo(tabTitle)"
            >
              {{ tabTitle }}
            </v-btn>
          </span>
        </div>
        <v-spacer></v-spacer>
      </v-layout>
    </v-app-bar>
    <v-app-bar app color="white" prominent v-else>
      <v-app-bar-nav-icon class="ma-6">
        <v-img src="./assets/logo.png" contain max-height="100px"></v-img>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <HomeCarousel />
      <WelcomeTo class="mt-4 mx-4" />
      <TreatmentsProvided class="mt-12 mx-4" />
      <HistoryOf class="mt-12" />
    </v-main>
  </v-app>
</template>

<script>
import HomeCarousel from "@/components/HomeCarousel.vue";
import WelcomeTo from "@/components/Welcome.vue";
import TreatmentsProvided from "@/components/HomePage/TreatmentsProvided.vue";
import HistoryOf from "@/components/HomePage/HistoryOf.vue";

export default {
  name: "App",
  components: {
    HomeCarousel,
    WelcomeTo,
    TreatmentsProvided,
    HistoryOf,
  },

  data() {
    return {
      tabTitles: [
        "Home",
        "Ayurveda",
        "Our Vaidyasala",
        "Our Doctors",
        "Treatments Provided",
        "Contact us",
      ],
      selectedTab: "Home",

      isDesktop: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    navigateTo(selection) {
      this.selectedTab = selection;
    },
    onResize() {
      this.isDesktop = window.innerWidth > 960;
    },
  },
};
</script>

<style>
.v-btn {
  text-transform: unset !important;
}
</style>
