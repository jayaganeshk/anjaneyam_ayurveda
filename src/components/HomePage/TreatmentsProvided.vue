<template>
  <div class="text-center">
    <div class="text-h4 font-weight-bold">
      Treatments Provided at Our Vaidyasala
    </div>
    <v-img
      class="ma-1"
      src="@/assets/designs/treatments.png"
      contain
      max-height="50"
    ></v-img>
    <div>
      <v-row align="center" justify="center" class="text-center">
        <v-card
          max-width="350"
          color="#FFF1D5"
          elevation="5"
          v-for="treatment in treatments"
          :key="treatment.name"
          class="ma-4"
        >
          <v-img :src="treatment.image"></v-img>
          <v-card-title>{{ treatment.name }} </v-card-title>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreatmentsProvided",
  data() {
    return {
      treatments: [
        {
          name: "Panchakarma Therapy",
          image: require("@/assets/treatments/Panchakarma Therapy.jpg"),
        },
        {
          name: "Ksharasutra Therapy",
          image: require("@/assets/treatments/Panchakarma Therapy.jpg"),
        },
        {
          name: "Swarnaprasham",
          image: require("@/assets/treatments/Panchakarma Therapy.jpg"),
        },
        {
          name: "Akshi Tarpanam",
          image: require("@/assets/treatments/Panchakarma Therapy.jpg"),
        },
        {
          name: "Leech Therapy",
          image: require("@/assets/treatments/Panchakarma Therapy.jpg"),
        },
        {
          name: "Yoga Therapy",
          image: require("@/assets/treatments/Panchakarma Therapy.jpg"),
        },
      ],
    };
  },
};
</script>

<style></style>
