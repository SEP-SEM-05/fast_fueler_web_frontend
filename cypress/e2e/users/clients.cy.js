describe("renders the home page", () => {
  before(() => {
    // load the home page
    cy.visit("/");

    let test_username = "990972657v";
    let test_password = "Abcd@1234";

    // enter username and password
    cy.get("#userid").type(test_username).should("have.value", test_username);
    cy.get("#password").type(test_password).should("have.value", test_password);

    // click login button
    cy.get(".MuiButton-root").click();
  });

  it("view vehicle details", ()=> {
    cy.get(
      ":nth-child(1) > .MuiPaper-root > .css-99v277-MuiCardActions-root > .MuiButton-root"
    ).click();
  }); 
});
