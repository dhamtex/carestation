// Before, After , BeforeEach




describe ("Landing Page Functionality", () => {
    it("Go to carestation url", () => {
    cy.visit("https://carestation.herokuapp.com/")
    
    });



    it("verify login", () => {
        cy.get("input[type=email]").type("adegbemiga4@gmail.com");
        cy.get("input[name='password']").type("@Damilola1");
        cy.get("input[id=date_of_birth]").type("1999-01-01");
        cy.get("button[type=submit]").click();
        cy.get(".my-auto").should ('eq', 'Dami A.')
        //cy.url().should('eq', 'https://carestation.herokuapp.com/verify');

    });


    it("verify that add to cart works", () => {
        cy.visit("https://carestation.herokuapp.com/shop");
      it("Page title verification", () => {
        cy.visit("https://carestation.herokuapp.com/")
        cy.title().should("eq","Care station");
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
            Login()
            cy.contains("Company").click({force: true})

          });


          it("Test Create Senior", () => {
              const regularUser =  user.email = "regular@gmail.com"

            Login(regularUser);


          });

            it("verify the contact us link", () => {
            cy.contains("Contact us").click({force: true})
        
            });

            //itt("verify sign up functionality", () => {
                //cyt.visit("https://carestation.herokuapp.com/signup")
                //cy.get("input[id=firstname]").type("dammy");
                //cy.get("input[id=lastname]").type("damm");
                //cyt.get("input[type=tel]").type("857382822")
                //cy.pause();
                //cyt.get("input[id=email]").type("adegbemiga4@gmail.com");
                //cyt.get("input[name=password]").type("@Damilola1");
                //cyt.get("input[id=date_of_birth]").type("1999-01-01");
                //cyt.get("button[type=submit]").click();
                //cyt.url().should('eq', 'https://carestation.herokuapp.com/verify');

            //});

            it("verify that the add to cart works", () => {
                cy.visit("https://carestation.herokuapp.com/shop");
                cy.get('[data-cy=laundryTab]').click({ force: true });
                cy.get('button[data-cy=medicalTab]').click({ force: true });
                cy.get("button[class=cart]").click({ force: true });
                cy.get("button[data-cy=cleaningTab]").click({ force: true });
                cy.get("button[class=cart]").dblclick({ force: true });
                //cy.get("price, eq 71.40");       

            });

        });

    })

        



    //it("verify sign up functionality", () => {
        //cy.visit("https://carestation.herokuapp.com/signup")
        //cy.get("input[id=firstname]").type("dammy");
        //cy.get("input[id=lastname]").type("damm");
        //cy.get("input[type=tel]").type("857382822")
        //cy.pause();
         //cy.wait(1000);
