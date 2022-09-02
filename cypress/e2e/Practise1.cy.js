describe("Functionality of the practise", () => {
    it("verify login details", () => {
cy.visit("http://automationpractice.com/index.php");
cy.wait(2000);
cy.get(".login").click();
cy.wait(2000);
cy.get("#email").type("ebenezeradewumi4@gmail.com");
cy.get("#passwd").type("A.2wBwQ9LPfum!m");
//cy.get("#email").type("ebenezeradewumi4@gmail.com");
//cy.get("#passwd").type("A.2wBwQ9LPfum!m");
cy.get("button[type='submit']").eq(3).click();
cy.wait(4000);
//cy.url().should ('eq', 'http://automationpractice.com/index.php?controller=my-account');

    });


})