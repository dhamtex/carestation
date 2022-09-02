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

      it("verify sign up functionality", () => {
          cy.visit("https://carestation.herokuapp.com/signup")
          //cy.get("input[id=firstname]").type("dammy");
          //cy.get("input[id=lastname]").type("damm");
          cy.get("input[type=tel]").type("857382822")
          //cy.pause();
          cy.get("input[id=email]").type("adegbemiga4@gmail.com");
          cy.get("input[name=password]").type("@Damilola1");
          cy.get("input[id=date_of_birth]").type("1999-01-01");
          cy.get("button[type=submit]").click();
          cy.url().should('eq', 'https://carestation.herokuapp.com/verify');

      });

  });

})
  




//it("verify the login functionality", () => {
//cy.visit("https://carestation.herokuapp.com/login")
//cy.get("input[id=email]").type ("adegbemiga4@gmail.com");
//cy.get("input[id=password]").type("adegbem");
//cy.get("button[type=submit]").click();


//});



//const user  = {
//email : "",
//password :""
//}

//function Login( ) {
//cy.get("input[id=email]").type("adegbemiga4@gmail.com");
//cy.get("input[id=password]").type("");
// click login button 
//verify the page redirected 
