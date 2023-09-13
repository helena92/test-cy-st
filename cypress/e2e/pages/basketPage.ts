class BasketPage {
  elements = {
    removeItemButton: () => cy.getByClass("cart-item__remove"), // cy.getByClass is a custom command created in support/commands.ts
    checkoutButton: () => cy.get("button").contains("Proceed to checkout"),
    productQuantitySelect: () => cy.getByClass("cart-product-quantity-select"),
  };

  visit() {
    cy.visit("/cart");
  }
}

export default new BasketPage();
