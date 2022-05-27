describe("Home page", () => {
  it("has a title Seedle", () => {
    cy.visit("/");
    cy.get("title").should("contain", "Seedle");
  });
});
