const { defineConfig } = require("cypress");

import {launchNewURL} from "./cypress/tasks/seleniumTest"
module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      launchNewURL(on, config);
    },
  },
});
