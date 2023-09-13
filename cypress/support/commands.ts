/// <reference types="./commands.d.ts" />

Cypress.Commands.add("getById", (value, timeout) => {
  cy.get(`#${value}`, { timeout });
});

Cypress.Commands.add("getByClass", (value, timeout) => {
  cy.get(`.${value}`, { timeout });
});
