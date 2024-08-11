const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
module.exports = defineConfig({
  e2e: {
    projectId: "2isafj",
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});
