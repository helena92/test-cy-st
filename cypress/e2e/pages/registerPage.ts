class RegisterPage {
  elements = {
    emailInput: () => cy.getById("Email"), // cy.getById is a custom command created in support/commands.ts
    firstNameInput: () => cy.getById("FirstName"),
    lastNameInput: () => cy.getById("LastName"),
    createPasswordInput: () => cy.getById("CreatePassword"),
    registerButton: () => cy.get("input[type=submit][value='Register Now']"),
    registerTabSelected: () =>
      cy
        .getByClass("login-register-action")
        .find("li.active")
        .contains("Register"),
  };

  visit() {
    cy.visit("/account/register");
    this.elements.registerTabSelected().should("exist");
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    this.elements.firstNameInput().type(firstName);
    this.elements.lastNameInput().type(lastName);
    this.elements.emailInput().type(email);
    this.elements.createPasswordInput().type(password);
    this.elements.registerButton().click();
  }
}

export default new RegisterPage();
