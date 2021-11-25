const allureWriter = require('@shelex/cypress-allure-plugin/writer');


/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};



