const { createYield } = require("typescript");

describe("Create a simulation", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("Validate that a logged in user can create a simulation", function () {
    cy.get(".configurations > .button > .button__label").click();
    cy.contains("new simulation");

    cy.url().should("include", "https://www.d3a.io/configuration/step1");

    cy.get(".input-field-input-wrapper__input")
      .contains("default simulation")
      .type("simulation");
    cy.get(".textarea-field-wrapper__input ").type("description");
    cy.get(".button__label").contains("Next").click();
  });
});
