describe ("Landing Page Functionality", () => {
    it("Go to carestation url", () => {
    cy.visit("https://carestation.herokuapp.com/")
    
    });



    it.only("check the login details" , () => {
        cy.visit("https://carestation.herokuapp.com/login");
        cy.get("input[id=email]").type("ademigbemiga4@gmail.com");
        cy.get("input[name=password]").type("@Damilola1");
        cy.get("button[type=submit]").click();
        cy.contains(".mx-2 my-auto", { timeout: 10000 })





      });
      

      it("Page title verification", () => {
        cy.visit("https://carestation.herokuapp.com/")
        cy.title().should("eq","CareStation");
    });
   
    it("get the text of the heading and assert the value", () => {
        cy.get("h1.header").should($heading => {
            console.log($heading.text());
        })
    });

    it("get the text of the heading and assert the value", () => {
        cy.get("h3.food+laundry+medicals+cleaning").should($heading => {
        console.log($heading.text());
        });

    });


    it("verify the shop button works", () => {
    cy.contains("Shop").click({ force: true })
    cy.go('back')


});

it("verify the services link works", () => {
    cy.contains("Services").click({ force: true })
          
          });

          it("verify the company link", () => {
            cy.contains("Company").click({force: true})

          });

            it("verify the contact us link", () => {
            cy.contains("Contact us").click({force: true})
        
            });

           
            it("verify that the add to cart works", () => {
                cy.visit("https://carestation.herokuapp.com/shop");
                cy.get('[data-cy=laundryTab]').click({ force: true });
                cy.get('button[data-cy=medicalTab]').click({ force: true });
                cy.get("button[class=cart]").click({ force: true });
                cy.get("button[data-cy=cleaningTab]").click({ force: true });
                cy.get("button[class=cart]").dblclick({ force: true });

            });

        })