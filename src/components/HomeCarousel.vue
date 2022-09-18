<template>
  <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    >
      <!-- <v-img :src="item.src"></v-img> -->
      <v-overlay absolute class="text-center" opacity="0.6">
        <!-- <div class="text-h6 white--text">//CRYSTAL CARS//</div> -->
        <div
          class="text-h4 secondary--text font-weight-bold ma-4"
          :class="[isMobile ? 'carouselwidth' : '']"
        >
          {{ item.text }}
        </div>

        <v-btn
          outlined
          rounded
          color="secondary"
          class="ma-4"
          @click="navigate(item.route)"
        >
          {{ item.button }}
        </v-btn>
      </v-overlay>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/carousel-0.jpeg"),
          text: "Sri Anjaneyam Ayurveda Vaidyasala",
          button: "About Us",
          route: "OurVaidyasala",
        },
        {
          src: require("@/assets/images/carousel-1.jpeg"),
          text: "Sri Anjaneyam Ayurveda Vaidyasala",
          button: "Treatments",
          route: "TreatmentsProvided",
        },
        {
          src: require("@/assets/images/carousel-2.jpeg"),
          text: "Sri Anjaneyam Ayurveda Vaidyasala",
          button: "Book your appoitment",
          route: "ContactUs",
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    },
  },
  methods: {
    navigate(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style>
.carouselwidth {
  max-width: 250px;
}
</style>
