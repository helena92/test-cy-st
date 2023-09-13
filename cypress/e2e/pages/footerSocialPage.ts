class FooterSocialPage {
  elements = {
    footerSocial: () => cy.getByClass("footer__social"), // cy.getByClass is a custom command created in support/commands.ts
    emailInput: () => this.elements.footerSocial().find("input[type=email]"),
    subscribeButton: () => cy.get("button").contains("SUBSCRIBE"),
  };
}

export default new FooterSocialPage();
