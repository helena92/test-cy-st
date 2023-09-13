class AuthenticationPage {
  elements = {
    emailInput: () => cy.getById("CustomerEmail"), // cy.getById is a custom command created in support/commands.ts
    customerPasswordInput: () => cy.getById("CustomerPassword"),
    firstNameInput: () => cy.getById("FirstName"),
    lastNameInput: () => cy.getById("LastName"),
    createPasswordInput: () => cy.getById("CreatePassword"),
    registerButton: () => cy.get("input[type=submit][value='Register Now']"),
  };

  visit() {
    cy.visit("/account/login");
  }
}

export default new AuthenticationPage();
