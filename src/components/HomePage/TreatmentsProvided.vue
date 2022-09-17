<template>
  <div class="text-center">
    <div class="text-h4 font-weight-bold">
      Treatments Provided at Our Vaidyasala
    </div>
    <v-img
      class="ma-1"
      src="@/assets/designs/treatments.png"
      contain
      height="50"
    >
    </v-img>
    <div>
      <v-row align="center" justify="center" class="text-center">
        <v-card
          color="#FFF1D5"
          elevation="5"
          max-width="350"
          v-for="treatment in treatments"
          :key="treatment.name"
          class="ma-4"
        >
          <v-img :src="treatment.image" height="200"></v-img>
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
          image: require("@/assets/treatments/panchakarma.jpeg"),
        },
        {
          name: "Ksharasutra Therapy",
          image: require("@/assets/treatments/Panchakarma Therapy.jpg"),
        },
        {
          name: "Swarnaprasham",
          image: require("@/assets/treatments/swarnaprasham.jpeg"),
        },
        {
          name: "Naasyam",
          image: require("@/assets/treatments/naasyam.jpeg"),
        },
        {
          name: "Akshi Tarpanam",
          image: require("@/assets/treatments/Panchakarma Therapy.jpg"),
        },
        {
          name: "Leech Therapy",
          image: require("@/assets/treatments/leech.jpeg"),
        },
        {
          name: "Yoga Therapy",
          image: require("@/assets/treatments/yoga.jpeg"),
        },
        {
          name: "Mind Balance",
          image: require("@/assets/treatments/mindbalance.jpeg"),
        },
      ],
    };
  },
};
</script>

<style></style>
