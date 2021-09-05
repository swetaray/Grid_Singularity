// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// before(() => {

//     if (cypress.log()=="") return new Cypress.Promise((resolve,rejaect)=>{})
// });

describe("Login successful", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("Should login successfully", function () {
      
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.visit(Cypress.env("url"), { failOnStatusCode: false })
    
    
    cy.get('#email').type("swetachampatiray@gmail.com");
    cy.get('#password').type("Abcd1234@");
    cy.get(".button").click();
    cy.on("window:confirm", (str) => {
        return false;
      });
  });
});
