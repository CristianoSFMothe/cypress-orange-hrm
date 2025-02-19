const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fq4bbo",
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    scrollBehavior: false,
    chromeWebSecurity: false,
    video: false,
    downloads: false,
    experimentalRunAllSpecs: true,
    hideCredentials: true,
    requestMode: true,
    hideXhr: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
