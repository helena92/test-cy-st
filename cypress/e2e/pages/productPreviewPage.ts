class ProductPreviewPage {
  elements = {
    productTitle: () => cy.getByClass("product-title"), // cy.getByClass is a custom command created in support/commands.ts
    addToWishListQuickButton: () => cy.getByClass(".product-wishlist"), // cy.getById is a custom command created in support/commands.ts
    addToBasketQuickButton: () => cy.getByClass(".js-plp-btn-add-to-cart"),
    carouselNextArrowButton: () => cy.getByClass(".slick-next"),
    carouselPrevArrowButton: () => cy.getByClass(".slick-prev"),
  };
}

export default new ProductPreviewPage();
