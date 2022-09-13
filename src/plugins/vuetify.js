import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "../anjaneyam.sass";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0D4B2C",
        secondary: "#FFBE41",
        accent: "#158800",
        error: "#b71c1c",
      },
    },
  },
});

export default vuetify;
