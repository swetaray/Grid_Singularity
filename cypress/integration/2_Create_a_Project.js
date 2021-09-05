describe("create Project", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("Validate that the project is listed correctly after being created", function () {
    cy.faker = require("faker");
    const projectName = cy.faker.name.findName();
    const description = cy.faker.commerce.productDescription();

    cy.get(".icon-projects > use").click();
    cy.url().should("include", "https://www.d3a.io/projects");
    cy.get(".button--accent").click();
    cy.get("#input-field-name").type(projectName);
    cy.get("#textarea-field-nameTextArea").type(description);
    cy.get(".library-name-modal__container > .button").click();
    cy.wait(3000);
    cy.contains(description);

    cy.contains(projectName).click();
  });
});
