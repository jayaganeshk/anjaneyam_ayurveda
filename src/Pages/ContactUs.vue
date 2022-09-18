<template>
  <div class="contactus">
    <div class="">
      <v-img src="@/assets/OurVaidyasala.png"> </v-img>
      <div class="text-h4 font-weight-bold text-center ma-4">Contact Us</div>
      <v-row class="my-4">
        <v-col cols="12" sm="6" align-self="center">
          <v-img src="@/assets/logo.png" contain max-height="200px"> </v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-form class="mx-16 text-center">
            <div v-for="field in fields" :key="field">
              <v-text-field
                outlined
                v-model="data[field]"
                :label="field"
                required
              ></v-text-field>
            </div>
            <v-btn rounded color="secondary primary--text">
              Send your message
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.607073477352!2d79.32039421428802!3d10.917437059561601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd612f63f18f%3A0x5f48c7091f9c6473!2sSRI%20ANJANEYAM%20AYURVEDA%20VAIDYASALA!5e0!3m2!1sen!2sus!4v1663431530551!5m2!1sen!2sus"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      data: {},
      fields: ["Name", "Phone", "Mail", "Message"],
    };
  },
};
</script>

<style>
.contactus {
  background-image: url("../assets/designs/ourdoctors-1.png");
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
}
</style>
