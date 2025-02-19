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
    reporter: 'mochawesome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporterOptions": {
      "reportDir": "cypress/reports/mochawesome-report",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
      "reportFilename": "report",
      "timestamp": "mmddyyyy_HHMMss",
      "inlineAssets": true,
      "toOpen": true,
      "reportPageTitle": "Relatório de execução de testes E2E no site SauceDemo",
      "embeddedScreenshots": true  //integrar prints no relatório
    }
  },
});
