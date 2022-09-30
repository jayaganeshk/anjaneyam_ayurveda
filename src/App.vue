<template>
  <v-app>
    <v-app-bar app color="white" prominent v-if="isDesktop">
      <v-layout row v-if="isDesktop">
        <v-app-bar-nav-icon class="ma-6 mt-12">
          <v-img src="./assets/logo.png" contain max-height="100px"></v-img>
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <div class="ma-auto" justify-center>
          <span v-for="tabTitle in tabTitles" :key="tabTitle.name">
            <v-btn
              rounded
              color="primary"
              class="ma-1"
              v-if="tabTitle.route == selectedTab"
              @click="navigateTo(tabTitle.name, tabTitle.route)"
            >
              {{ tabTitle.name }}
            </v-btn>
            <v-btn
              rounded
              text
              class="ma-1"
              v-else
              @click="navigateTo(tabTitle.name, tabTitle.route)"
            >
              {{ tabTitle.name }}
            </v-btn>
          </span>
        </div>
        <v-spacer></v-spacer>
      </v-layout>
    </v-app-bar>
    <v-app-bar app color="white" prominent v-else>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-app-bar-title class="mx-auto">
        <v-img
          src="./assets/logo.png"
          max-width="100px"
          max-height="100px"
        ></v-img>
      </v-app-bar-title>
      <v-spacer> </v-spacer>
      <v-icon class="ma-2" color="white"> mdi-menu</v-icon>
    </v-app-bar>
    <v-main>
      <router-view />
      <FooterComponent />
    </v-main>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-img src="./assets/logo.png" contain max-height="100px"></v-img>
      <div v-for="tabTitle in tabTitles" :key="tabTitle.name" class="mx-2">
        <v-btn
          block
          color="primary"
          class="ma-1"
          v-if="tabTitle.route == selectedTab"
          @click="navigateTo(tabTitle.name, tabTitle.route)"
        >
          {{ tabTitle.name }}
        </v-btn>
        <v-btn
          block
          rounded
          text
          class="ma-1"
          v-else
          @click="navigateTo(tabTitle.name, tabTitle.route)"
        >
          {{ tabTitle.name }}
        </v-btn>
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "App",
  components: { FooterComponent },

  data() {
    return {
      group: null,
      drawer: false,
      tabTitles: [
        {
          name: "Home",
          route: "HomePage",
        },
        {
          name: "Ayurveda",
          route: "Ayurveda",
        },
        {
          name: "Our Vaidyasala",
          route: "OurVaidyasala",
        },
        { name: "Our Doctors", route: "OurDoctors" },
        { name: "Treatments Provided", route: "TreatmentsProvided" },
        { name: "Contact us", route: "ContactUs" },
      ],
      selectedTab: "Home",
      isDesktop: false,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    this.updateNavColor();
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    navigateTo(selection, route) {
      this.selectedTab = selection;
      this.$router.push({ name: route });
      this.updateNavColor();
      this.scrollToTop();
    },
    onResize() {
      this.isDesktop = window.innerWidth > 960;
    },
    updateNavColor() {
      let currentRoute = this.$route.path;
      console.log(currentRoute);
      this.selectedTab = currentRoute.split("/")[1];
      if (currentRoute.split("/")[1] == "OurDoctor") {
        this.selectedTab = "OurDoctors";
      }
      console.log(this.selectedTab);
    },
  },
  watch: {
    $route() {
      this.updateNavColor();
    },
  },
};
</script>

<style>
.v-btn {
  text-transform: unset !important;
}
.logoPng {
  display: block;
  margin: 0 auto;
}
</style>
