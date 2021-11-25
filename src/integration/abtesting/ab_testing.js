import abTestPage from '../../pageObject/abPage';
import data from '../../fixtures/data.json';

//const text = '\n    Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).';

describe('example to-do app', () => {

  before(() => {
    cy.visit('/')
  })

  it('Click on A/B Testing', () => {
    abTestPage.getABLink().click();
    cy.wait(2000);
  });

  it('Validate Text', () => {
    abTestPage.getPText().should('have.text', data.abTestPage.text)
    cy.wait(2000);
  });

  

  
})
