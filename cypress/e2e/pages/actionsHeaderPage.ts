class ActionsHeaderPage {
  elements = {
    actionsHeader: () => cy.getByClass("header-actions"), // cy.getByClass is a custom command created in support/commands.ts
    searchIcon: () => this.elements.actionsHeader().find(".header-search-icon"),
    accountIcon: () => this.elements.actionsHeader().find(".header-account"),
    wishlistIcon: () => this.elements.actionsHeader().find(".header-wishlist"),
    basketIcon: () => this.elements.actionsHeader().find(".header-basket"),
    selectCountryIcon: () =>
      this.elements.actionsHeader().find(".header-currency-select"),
  };

  visit() {
    cy.visit("/");
  }
}

export default new ActionsHeaderPage();
