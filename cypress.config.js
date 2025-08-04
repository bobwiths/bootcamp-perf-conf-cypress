const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev/admin/home",
    supportFile: "cypress/support/e2e.js"
  },
});
