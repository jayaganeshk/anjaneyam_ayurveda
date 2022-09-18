<template>
  <div class="ourdoctors">
    <v-container class="text-center">
      <div class="text-h4 font-weight-bold mx-2">Our Doctors</div>
      Select a doctors for details and appointments
      <v-container style="width: 100%">
        <v-row justify="center" align="center" class="ma-auto">
          <v-card
            max-width="250"
            max-height="300"
            v-for="doctor in doctors"
            :key="doctor.name"
            class="ma-4"
            elevation="7"
          >
            <v-img
              :src="doctor.src"
              class="white--text align-end"
              max-height="250"
              max-width="300"
              @click="navigate(doctor)"
            >
              <v-card height="100" outlined color="transparent">
                <v-overlay absolute>
                  <v-card-title>
                    {{ doctor.name }}
                  </v-card-title>

                  <v-card-subtitle>
                    {{ doctor.qal }} <br />
                    {{ doctor.des }}
                  </v-card-subtitle>
                </v-overlay>
              </v-card>
            </v-img>
          </v-card>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { Doctors } from "@/DoctorDetails.js";

export default {
  name: "OurDoctors",
  data() {
    return {};
  },
  computed: {
    doctors() {
      return Doctors;
    },
  },
  methods: {
    navigate(doctor) {
      this.$router.push({ name: "OurDoctor", params: { id: doctor.id } });
    },
  },
};
</script>

<style>
.ourdoctors {
  background-image: url("../../assets/designs/ourdoctors-1.png");
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
}
</style>
