/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by id with timeout per ms
     * @example cy.getById('greeting', 50000)
     */
    getById(value: string, timeout?: number): Chainable<Element>;
    /**
     * Custom command to select DOM element by class with timeout per ms
     * @example cy.getByClass('test-class', 50000)
     */
    getByClass(value: string, timeout?: number): Chainable<Element>;
  }
}
