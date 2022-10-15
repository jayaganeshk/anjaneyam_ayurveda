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
          <v-form class="mx-16 text-center" ref="form" v-model="valid">
            <div v-for="field in fields" :key="field">
              <v-text-field
                outlined
                v-model="data[field]"
                :label="field"
                required
                :rules="[rules.required]"
              ></v-text-field>
            </div>
            <v-text-field
              outlined
              v-model="data['Mail']"
              label="Mail"
              required
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-select
              :items="departments"
              label="Department"
              outlined
              v-model="data['department']"
            >
            </v-select>
            <v-select
              :items="doctors"
              label="Doctor"
              outlined
              v-model="data['doctor']"
            >
            </v-select>
            <v-textarea
              outlined
              v-model="data['Message']"
              label="Message"
              required
              :rules="[rules.required]"
            ></v-textarea>
            <vue-recaptcha
              class="text-center"
              sitekey="6LdOtacaAAAAAJKVPOLZ26FNjLfxa6zVU2xQwoGF"
              @verify="verifyMethod"
            >
            </vue-recaptcha>
            <v-btn
              rounded
              color="secondary primary--text"
              v-if="loading"
              class="mt-2"
            >
              please wait..
            </v-btn>
            <v-btn
              v-else
              rounded
              color="secondary primary--text"
              :disabled="isDisabled"
              @click="submit"
              class="mt-2"
            >
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

    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      timeout="5000"
      color="white"
      top
    >
      <span class="font-weight-bold primary--text">
        {{ snackBarText }}
      </span>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          class="font-weight-bold"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { VueRecaptcha } from "vue-recaptcha";
import axios from "axios";

export default {
  name: "ContactUs",
  components: { VueRecaptcha },
  data() {
    return {
      valid: false,
      data: {},
      fields: ["Name", "Phone"],
      captcha: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      },
      snackBarText: "Thank you for reaching us. we will get back to you soon",
      multiLine: true,
      snackbar: false,
      loading: false,
      departments: [
        "Ayurveda ",
        "Yoga",
        "Varma ",
        "Homeopathy",
        "Diet",
        "other",
      ],
      doctors: [
        "Dr. M. Manogar",
        "Dr. Jayasri Manogar",
        "Dr. R. Roobini",
        "Dr. R. Keshav Ram",
        "Dr. T. Prasanth",
        "Dr. K. Manisundar ",
        "Dr. V. Rahini",
      ],
    };
  },
  methods: {
    verifyMethod(response) {
      this.captcha = response;
    },
    submit() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        // console.log("data: ", this.data);
        let data = this.data;
        data["token"] = this.captcha;

        // axios POST request
        const options = {
          url: "https://rb36omzifbuabm3pioriqf735m0uejsi.lambda-url.ap-south-1.on.aws/",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          data,
        };

        try {
          axios(options)
            .then((response) => {
              console.log("response.status: ", response.status);
              if (response.status == 200) {
                this.snackbar = true;
                this.snackBarText =
                  "Thank you for reaching us. we will get back to you soon";
                this.loading = false;
              } else {
                this.snackbar = true;
                this.snackBarText =
                  "There was some error. Please try again later.";
                this.loading = false;
              }
            })
            .catch(() => {
              this.snackbar = true;
              this.snackBarText =
                "There was some error. Please try again later.";
              this.loading = false;
            });
        } catch (error) {
          this.snackbar = false;
          this.snackBarText = "There was some error. Please try again later.";
          this.loading = false;
        }
      }
    },
  },
  computed: {
    isDisabled: function () {
      if (this.captcha.length > 0) {
        return false;
      } else {
        return true;
      }
    },
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
