<template>
  <v-container class="footer text-center mx-0" fluid>
    <v-img
      src="@/assets/logo.png"
      contain
      max-height="100px"
      class="float:left"
    >
    </v-img>
    <div class="text-h4 font-weight-bold secondary--text ma-4">
      Sri Anjaneyam Ayurveda Vaidyasala
    </div>
    <div class="white--text text-center">
      <v-row>
        <v-col>
          <div class="text-h5 ma-2">Internal Patients:</div>
          <div>
            Sri Anjaneyam Ayurveda Vaidyasala, <br />
            478/2, Govindakudi - Papanasam Road, Inaamkiliyur Village, <br />
            Vlaiagaiman, Thiruvarur, Tamilnadu 614207
          </div>

          <div class="text-p white--text ma-2">
            <v-icon color="white" size="medium"> mdi-phone </v-icon>
            +91 9876543210
          </div>
        </v-col>

        <v-col>
          <div class="text-h5 ma-2">Out Patients:</div>
          <div>
            Sri Anjaneyam Ayurveda Vaidyasala,<br />
            65/33, Pachaiyappan Street, <br />
            Kumbakonam, Tamilnadu 612001
          </div>
          <div class="text-p white--text ma-2">
            <v-icon color="white" size="medium"> mdi-phone </v-icon>
            +91 9994871336
          </div>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-row align="center" justify="center">
          <div class="text-p white--text ma-2">
            <v-icon color="white" size="medium" class="mx-2">
              mdi-whatsapp
            </v-icon>
            +91 1234567890
          </div>
          <div class="text-p white--text ma-2">
            <v-icon color="white" size="medium" class="mx-2">
              fa-envelope
            </v-icon>
            contactus@srianjaneyamayurveda.in
          </div>
        </v-row>
        <div class="mt-8"></div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
.footer {
  background-color: #0d4b2c;
}
</style>
