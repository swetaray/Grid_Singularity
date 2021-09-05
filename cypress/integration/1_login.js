describe("Login negative", function () {
 
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("error message for no email", function () {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });

    cy.get("#password").type("Abcd1234@");

    cy.get(".button").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Please fill out this field.`);
    });
  });

  it("error message for no password", function () {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });

    cy.get("#email").type("swetachampatiray@gmail.com");
    cy.get(".button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Please fill out this field.`);
    });
  });
  it("error message for incorrect password", function () {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });
    const faker = require("faker");
    const email = faker.internet.email();
    cy.get("#email").type(email);
    cy.get("#password").type("password");
    cy.get(".button").click();
    cy.get(".GraphQLErrorDisplay__error-msg").should(
      "contain",
      "Please, enter valid credentials"
    );
  });
  it("error message for incorrect email", function () {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });
    const faker = require("faker");
    const email = faker.internet.email();
    cy.get("#email").type(email);
    cy.get("#password").type("password");
    cy.get(".button").click();
    cy.get(".GraphQLErrorDisplay__error-msg").should(
      "contain",
      "Please, enter valid credentials"
    );
  });
  it("Blank email and password", function () {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });

    cy.get(".button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Please fill out this field.`);
    });
  });
  it("Validate that a precreated user is able to login", function () {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });

    cy.get("#email").type("swetachampatiray@gmail.com");
    cy.get("#password").type("Abcd1234@");
    cy.get(".button").click();
  });
});
