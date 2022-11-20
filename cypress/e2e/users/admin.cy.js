describe("renders the home page", () => {
  before(() => {
    // load the home page
    cy.visit("/");

    let test_username = "admin-admin@1234";
    let test_password = "Admin@1234";

    // enter username and password
    cy.get("#userid").type(test_username).should("have.value", test_username);
    cy.get("#password").type(test_password).should("have.value", test_password);

    // click login button
    cy.get(".MuiButton-root").click();
  });

  it("view quota and change",() => {
    cy.get(".MuiButton-containedSuccess").click();
    cy.get(":nth-child(2) > :nth-child(3) > .MuiButtonBase-root").click();
    cy.get("#amount").type(54);
    cy.get(".MuiDialogActions-root > .MuiButtonBase-root").click();
  });

  it("view unregistred stations", () => {
    cy.get('.css-12tyqda > [href="/admin/unregistered"]').click();
  });

  it("view registred fuel stations", ()=>{
    cy.get('.css-12tyqda > [href="/admin/registered"]').click();
  });

  it("view vehicles in the system", ()=>{
    cy.get('.css-12tyqda > [href="/admin/vehicles"]').click();
  });

  it("Logout from the admin", ()=>{
    cy.get(".css-70qvj9 > .MuiButtonBase-root").click();
    cy.get(
      ".css-olxcif-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > :nth-child(3)"
    ).click();
    cy.get(".css-1xh0oy9-MuiDialogActions-root > .MuiButtonBase-root").click();
  })

  
});
