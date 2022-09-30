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
        <v-col cols="12" sm="4"> </v-col>
        <v-col cols="12" sm="4">
          <div>
            <div class="text-h5 ma-2 text-decoration-underline">
              In Patients:
            </div>
            <div>
              Sri Anjaneyam Ayurveda Vaidyasala, <br />
              478/2, Govindakudi - Papanasam Road, Inaamkiliyur Village, <br />
              Vlaiagaiman, Thiruvarur, Tamilnadu 614207
            </div>

            <div class="text-p ma-2">
              <v-row justify="center" align="center">
                <v-col>
                  <v-icon color="white" size="medium"> mdi-phone </v-icon>
                  <a
                    href="tel:+919876543210"
                    class="white--text text-decoration-none"
                  >
                    +91 82731234567
                  </a>
                </v-col>
                <v-col>
                  <v-icon color="white" size="medium"> mdi-whatsapp </v-icon>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    class="white--text text-decoration-none"
                  >
                    +91 82731234567
                  </a>
                </v-col>
                <v-col>
                  <v-icon color="white" size="medium">fa-envelope </v-icon>
                  <a
                    href="mailto:srianjaneyamayurveda@gmail.com"
                    target="_blank"
                    class="white--text text-decoration-none"
                  >
                    srianjaneyamayurveda@gmail.com
                  </a>
                </v-col>
              </v-row>
            </div>

            <v-col cols="12" sm="4"> </v-col>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4"> </v-col>
        <v-col cols="12" sm="4">
          <div>
            <div class="text-h5 ma-2 text-decoration-underline">
              Out Patients:
            </div>
            <div>
              Sri Anjaneyam Ayurveda Vaidyasala,<br />
              65/33, Pachaiyappan Street, <br />
              Kumbakonam, Tamilnadu 612001
            </div>

            <div class="text-p white--text ma-2">
              <v-row justify="center" align="center">
                <v-col>
                  <v-icon color="white" size="medium"> mdi-phone </v-icon>
                  <a
                    href="tel:+919994871336"
                    class="white--text text-decoration-none"
                  >
                    +91 9994871336
                  </a>
                </v-col>
                <v-col>
                  <v-icon color="white" size="medium"> mdi-whatsapp </v-icon>
                  <a
                    href="https://wa.me/919994871336"
                    target="_blank"
                    class="white--text text-decoration-none"
                  >
                    +91 9994871336
                  </a>
                </v-col>
                <v-col>
                  <v-icon color="white" size="medium">fa-envelope </v-icon>
                  <a
                    href="mailto:srianjaneyamayurveda@gmail.com"
                    target="_blank"
                    class="white--text text-decoration-none"
                  >
                    srianjaneyamayurveda@gmail.com
                  </a>
                </v-col>
              </v-row>
            </div>

            <v-col cols="12" sm="4"> </v-col>
          </div>
        </v-col>
      </v-row>
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
