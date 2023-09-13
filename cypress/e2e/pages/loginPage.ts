class LoginPage {
  elements = {
    emailInput: () => cy.getById("CustomerEmail"), // cy.getById is a custom command created in support/commands.ts
    customerPasswordInput: () => cy.getById("CustomerPassword"),
    signInButton: () => cy.get("button").contains("Sign In"),
    loginTabSelected: () =>
      cy
        .getByClass("login-register-action")
        .find("li.active")
        .contains("Login"),
  };

  visit() {
    cy.visit("/account/login");
    this.elements.loginTabSelected().should("exist");
  }

  login(email: string, password: string) {
    this.elements.emailInput().type(email);
    this.elements.customerPasswordInput().type(password);
    this.elements.signInButton().click();
  }
}

export default new LoginPage();
