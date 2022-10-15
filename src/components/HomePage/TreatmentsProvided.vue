<template>
  <div class="text-center treatments">
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

          <v-btn icon @click="treatment.id = !treatment.id">
            <v-icon>{{
              treatment.id ? "mdi-chevron-down" : "mdi-chevron-up"
            }}</v-icon>
          </v-btn>
          <v-expand-transition>
            <div v-show="!treatment.id" class="my-1">
              <v-divider></v-divider>

              <v-card-text>
                {{ treatment.text }}
              </v-card-text>
              <v-btn rounded color="primary" @click="Navigate()">
                Book your Appointments
              </v-btn>
            </div>
          </v-expand-transition>
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
      Panchakarma: false,
      Nasyam: false,
      Akshi: false,
      Swarnaprasham: false,
      Jalaukavacharanam: false,
      Ksharasutra: false,
      Yoga: false,
      Mind: false,
      treatments: [
        {
          id: "Panchakarma",
          name: "Panchakarma Therapy",
          image: require("@/assets/treatments/panchakarma.jpeg"),
          text: "Keraliya Panchakarma procedure like abhyangam (oil massage), kizhi (fomentation), virechanam (purgation), vasti (enema) etc. provided by qualified male and female therapists",
        },
        {
          id: "Nasyam",
          name: "Nasyam",
          image: require("@/assets/treatments/naasyam.jpeg"),
          text: "Instilling medicine through the nostrils in sufficient doses for various diseases related to the head and shoulder.",
        },
        {
          id: "Akshi",
          name: "Akshi Tarpanam",
          image: require("@/assets/treatments/akshi.jpeg"),
          text: "An Ayurvedic procedure to strengthen eye sight, reduce ocular pressure, prevent cataract formation, correct refractive errors and revitalize dry eyes.",
        },
        {
          id: "Swarnaprasham",
          name: "Swarnaprasham",
          image: require("@/assets/treatments/swarnaprasham.jpeg"),
          text: "Ayurvedic Immunization for children under the age of 16 to promote speech, intellect, strength, digestion and prevent developmental disorders.",
        },
        {
          id: "Jalaukavacharanam",
          name: "Jalaukavacharanam",
          image: require("@/assets/treatments/leech.jpeg"),
          text: "Raktamokshana (blood letting) done with the help of Jalauka (leech-an aid brought to earth by lord dhanvantari) for chronic skin conditions, varicose veins etc.",
        },
        {
          id: "Ksharasutra",
          name: "Ksharasutra Therapy",
          image: require("@/assets/treatments/ksharasutra.jpeg"),
          text: "Special Ayurveda treatment for conditions like fistula-in-ano, abscess, piles etc",
        },
        {
          id: "Yoga",
          name: "Yoga Therapy",
          image: require("@/assets/treatments/yoga.jpeg"),
          text: "Specific and Traditional Yoga postures for individual body types and disease condition. Also learn Pranayama and Mudras from a specialist.",
        },
        {
          id: "Mind",
          name: "Mind Balance",
          image: require("@/assets/treatments/mindbalance.jpeg"),
          text: "Diseases arise in the body but the suffering happens in the mind. Ayurveda speaks about how to handle both planes in order to heal the system.",
        },
      ],
    };
  },
  methods: {
    Navigate() {
      this.$router.push({ name: "ContactUs" });
    },
  },
};
</script>

<style>
.treatments {
  background-image: url("../../assets/designs/ourdoctors-1.png");
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
}
</style>
