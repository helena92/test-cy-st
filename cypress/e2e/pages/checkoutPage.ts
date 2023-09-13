class CheckoutPage {
  elements = {
    continueButton: () => cy.getById("continue_button"), // cy.getById is a custom command created in support/commands.ts
    firstNameInput: () => cy.getById("checkout_shipping_address_first_name"),
    lastNameInput: () => cy.getById("checkout_shipping_address_last_name"),
    address1Input: () => cy.getById("checkout_shipping_address_address1"),
    cityInput: () => cy.getById("checkout_shipping_address_city"),
    phoneInput: () => cy.getById("checkout_shipping_address_phone"),
  };
}

export default new CheckoutPage();
