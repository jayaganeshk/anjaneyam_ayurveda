const { defineConfig } = require("@vue/cli-service");
var ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});
