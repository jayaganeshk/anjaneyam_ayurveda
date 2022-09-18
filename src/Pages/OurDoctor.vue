<template>
  <div class="ourdoctor">
    <v-row justify="center">
      <v-col cols="12" sm="4" class="text-center" align-self="center">
        <v-card
          max-width="250"
          max-height="300"
          class="mt-4 mx-auto"
          elevation="10"
        >
          <v-img :src="doctor.src" max-height="300" max-width="300"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" class="mt-8 mx-auto">
        <div class="ma-2">
          <div class="text-h5 font-weight-bold">
            {{ doctor.name }}

            <span class="text-subtitle-2 font-weight-medium">
              {{ doctor.qal }}
            </span>
          </div>

          <div class="text-h6">{{ doctor.des }}</div>

          <div class="my-2" v-for="text in doctor.text" :key="text">
            <div>{{ text }}</div>
          </div>

          <div class="text-h5 font-weight-medium">Consulting Time</div>
          <div v-for="visiting in doctor.visiting" :key="visiting.time">
            <div class="text-h6">{{ visiting.loc }}</div>

            &emsp;&emsp; {{ visiting.time }}
          </div>

          <v-btn
            color="secondary primary--text ma-2"
            rounded
            @click="Navigate()"
          >
            Book your Appointment
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="mb-16"></div>
  </div>
</template>

<script>
import { Doctors } from "@/DoctorDetails.js";

export default {
  name: "OurDoctor",
  data() {
    return {
      doctor: {},
    };
  },
  computed: {
    doctors() {
      return Doctors;
    },
  },
  mounted() {
    let id = this.$route.params.id;
    this.doctor = this.doctors[id];
  },
  created() {
    let id = this.$route.params.id;
    this.doctor = this.doctors[id];
  },
  methods: {
    Navigate() {
      this.$router.push({ name: "ContactUs" });
    },
  },
};
</script>

<style>
.ourdoctor {
  background-image: url("../assets/designs/ourdoctors-1.png");
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
}
</style>
