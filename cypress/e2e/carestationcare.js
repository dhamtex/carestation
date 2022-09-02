/// <reference types="cypress" />
describe ("Carestation End-to-end testing", () => {


    it("Go to carestation url", () => {
    cy.visit("https://carestation.care/")
    
    });

it("Page title Verification", () => {
        cy.visit("https://carestation.care/")
        cy.title().should("eq","CareStation");

});

it("verify login functionality", () => {
    cy.viewport(1366, 768)
    cy.visit("https://carestation.care/login")
    cy.get("#email").type("adegbemiga4@gmail.com");
    cy.get("input[name='password']").type("@Damilola1");
    cy.wait(4000)
    cy.get("button[type=submit]").click();
    cy.wait(6000);
    cy.get(".my-auto").should("be.visible");
    cy.wait(3000);  

  });

  it("verify shop button works", () =>  {
    cy.contains("Shop").click({ force: true })
    cy.go('back')
    
    
    })

  it("verify the profile functionality", () => {
    cy.get(".my-auto").eq(0).click({force: true});
    cy.get(".my-2").eq(0).click({force: true});
    cy.wait(3000)
    //cy.get("#firstname").should('be.visible');
  })
  
  
  it("check the edit button", () => {
    cy.visit("https://carestation.care/profile/main");
    cy.get(".edit").click({force: true});
    cy.get("#address_line_1").click({force: true});
    cy.get("#address_line_1").type("United Kingdom");
    cy.get("[type='submit']").click({force: true});
    cy.wait(6000)
  });


  it("check the security button", () => {
    cy.get(".tabControl").eq(1).click({force: true});
    //cy.get(".edit").click({force: true});
    cy.wait(7000)
    cy.get("[name=oldPassword]").type("@Damilola1", {force: true});
    cy.wait(5000);
    cy.get("[name=password]").type("@Damilola2", {force: true});
    cy.get(".edit").click({force: true});
    
    });
    
    
    it("check the notification button", () => {
      cy.get(".tabControl").eq(2).click({force: true});
      cy.wait(10000)
    
    
      cy.get("input[type='checkbox']").eq(0).should('not.be.visible').check({ force: true
      }).should('be.checked')
      cy.get("input[type='checkbox']").eq(1).should('not.be.visible').check({ force: true
      }).should('be.checked')
      cy.get("input[type='checkbox']").eq(2).should('not.be.visible').check({ force: true
      }).should('be.checked')
      
    });
    

it("verify that the add to cart works", () => {
  cy.visit("https://carestation.care/shop");
  cy.get("button[data-cy='add-food']").eq(0).click({ force: true });
  cy.wait(4000)
  cy.get("button[data-cy='laundryTab']").click({ force: true });
  cy.get("button[data-cy='add-food']").eq(1).click({ force: true });
  cy.get('.tabConrol').eq(3).click({ force: true });
  cy.get(".cart").eq(0).click({ force: true });
  cy.wait(4000)
  cy.get(".w-6").eq(1).click();
  cy.get(".text-right").contains ("$127.50");
  cy.get(".py-7").eq(1).click();

  //Add senior for the order
  cy.get("[name=99]").check({force: true})
  cy.get(".continue").click();

  });
    

})