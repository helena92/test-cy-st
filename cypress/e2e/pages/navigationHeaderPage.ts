class NavigationHeaderPage {
  elements = {
    navHeader: () => cy.getByClass("site-navigation"), // cy.getByClass is a custom command created in support/commands.ts
    logoNavLink: () => cy.getByClass("site-logo").find("a"),
    sunglassesNavLink: () =>
      this.elements.navHeader().find("[data-menu=sunglasses]"),
    opticsNavLink: () => this.elements.navHeader().find("[data-menu=opticals]"),
    collaborationsNavLink: () =>
      this.elements.navHeader().find("[data-menu=collaborations]"),
    accessoriesNavLink: () =>
      this.elements.navHeader().find("[data-menu=accessories]"),
    virtualTryOnNavLink: () =>
      this.elements.navHeader().find("[data-menu=virtual-try-on]"),
  };

  visit() {
    cy.visit("/");
  }
}

export default new NavigationHeaderPage();
