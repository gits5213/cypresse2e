/* global module */
const ABPage = {

    getABLink: () => cy.get(`li:nth-of-type(1) a`, { timeout: 5000 }),
    getPText: () => cy.get(`.example p`, { timeout: 5000 }),
   
  };
  module.exports = ABPage;
  