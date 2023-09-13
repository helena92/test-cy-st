class ProductItemPage {
  elements = {
    productTitle: () => cy.getByClass("product-title"), // cy.getByClass is a custom command created in support/commands.ts
    addToWishListButton: () => cy.getById("bookmarkit"), // cy.getById is a custom command created in support/commands.ts
    addToBasketButton: () =>
      cy.getByClass("product-add-to-basket").find("button"),
    plusMinusIcon: () => cy.getByClass("plus-minus-icon"),
    detailsPlusMinusIcon: () =>
      cy.get("h3").contains("Details").next(".plus-minus-icon"),
    sizeAndFitPlusMinusIcon: () =>
      cy.get("h3").contains("Size & Fit").next(".plus-minus-icon"),
  };
}

export default new ProductItemPage();
