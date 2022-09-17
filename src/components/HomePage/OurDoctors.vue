<template>
  <div class="ourdoctors">
    <v-container class="text-center">
      <div class="text-h4 font-weight-bold mx-2">Our Doctors</div>

      <v-container style="width: 100%">
        <v-row justify="center" align="center" class="ma-auto">
          <v-card
            max-width="250"
            max-height="300"
            v-for="doctor in doctors"
            :key="doctor.name"
            class="ma-4"
          >
            <v-img
              :src="doctor.src"
              class="white--text align-end"
              max-height="250"
              max-width="300"
            >
              <v-card height="100" outlined color="transparent">
                <v-overlay absolute>
                  <v-card-title>
                    {{ doctor.name }} <br />
                    {{ doctor.qal }}
                  </v-card-title>
                  <v-card-subtitle> {{ doctor.des }} </v-card-subtitle>
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
export default {
  name: "OurDoctors",
  data() {
    return {
      doctors: [
        {
          name: "Dr. M.MANOGAR",
          qal: "BAMS",
          des: "Chief Doctor",
          src: require("@/assets/doctors/Dr. T.PRASANTH.jpeg"),
        },
        {
          name: "Dr. JAYASRI MANOGAR",
          qal: "BHMS",
          des: "Homeopathy Doctor",
          src: require("@/assets/doctors/JayasriManogar.jpeg"),
        },
        {
          name: "Dr. R.KESHAV RAM",
          qal: "BAMS",
          des: "Diabetes Management",
          src: require("@/assets/doctors/Dr. T.PRASANTH.jpeg"),
        },
        {
          name: "Dr. R.ROOBINI",
          qal: "BAMS",
          des: "Skin Care",
          src: require("@/assets/doctors/Roobini.jpeg"),
        },
        {
          name: "Dr. T.PRASANTH",
          qal: "BAMS",
          des: "Varma Chikitsa",
          src: require("@/assets/doctors/Dr. T.PRASANTH.jpeg"),
        },
        {
          name: "Dr. V.RAHINI",
          qal: "BAMS",
          des: "Bhaishajya Kalpana",
          src: require("@/assets/doctors/Rahini.jpeg"),
        },
        {
          name: "Dr. K.MANISUNDAR",
          qal: "BNYS",
          des: "Yoga and Diet",
          src: require("@/assets/doctors/Dr. T.PRASANTH.jpeg"),
        },
      ],
    };
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
