/// <reference types = "cypress" />
//// <reference types="cypress-xpath" />
//describe('Working with xpath in Cypress made easy', ()=>{
  // beforeEach(()=>{
    //   cy.visit('http://automationpractice.com')
  // })
   //it('Xpath id usages', ()=>{  
     //  cy.xpath('//*[@id="search_query_top"]')
       //.type('Dress')
       //.type('{enter}')
       //.get('#center_column')
       //.should('be.visible')

//const { identity } = require("cypress/types/lodash")

    //we can also have      cy.visit("https://carestation.care/login", {timeout: 10000})



    //it seems anywhere you see x=y, it means its an attribute, and you can use it.
  //we can also do cy.get('a').contains('travels').click() which is for href and then the value associated with it, this is not the value in front of it, but the text associated with that href which might not be on the same line withthe href.

  
beforeEach ( () => {
  cy.visit("https://carestation.care/")
  })

describe("First Test", () => {

  //cy.get(selector)
  //cy.get is to get the Element.
  //the selector can be done either by class represented by a dot, id represented by an ash button, class[attribute=value], attribute=value

it("verify the page name", () => {
  cy.visit("https://demo.nopcommerce.com/")
  cy.title().should ('eq', 'nopCommerce demo store')
  

  //class is .abcd
  //id is #abcd
  //attribute is [value='abcd']
  //class with attribute is (".abcd['abcdee]")
  //square bracket carries single quotation while round carries double
  
//cy.get("#small-searchterms").type("nokia");

cy.get("input[type=text]").type("nokia"); //using attribute
  cy.get(".search-box-text").click() //using class, same with the below point on class, class="search-box-text ui-autocomplete-input"
  cy.get(".button-1").eq(0).click(); //using class, this is everything in class, class=button-1 search-box-button. i am to stop wherethere is a space in btw the sentence.
  
  //cy.get("input[id=email]").type("d"); this is taken from another test. for the attribute used here, instead of saying "input", you can just use the attribute id=email but with square bracket, so that becomes; cy.get(["id=email"])

  //when you have a space in the class, say a  b, that means b is an element of a, you can remove a and leave b.
  
  //cy.get("ahref=[/login?returnUrl=%2F]").click() this didnt work.

  //[type=submit] using the bracket is also another way to define your attribute.

  //we can also use a class and an attribute together as seen below;

cy.get(".product-box-add-to-cart-button").click(); //but why not cy.get button[class=]

//this can also be written as cy.get(".product-box-add-to-cart-button"['Add to cart']).click();
    
  //cy.get("class=[search-box-text ui-autocomplete-input"
  //cy.get("button[type=submit]").click()
  //cy.get(".ico-login").click()
  
//sometimes, you might need to check the tag, you can have the id up under a tag under which the class is.
  cy.get("#topcartlink").click()

cy.get(".qty-input").clear().type("2") //this isi to clear the number there and add a new number

cy.wait(5000)

cy.get("#updatecart").click()

cy.get(".product-unit-price").contains ('$349.00')

cy.get('[type="checkbox"]').check({ force: true })

cy.get("#checkout").click()

});

})
  

 




cy.get(".my-auto").first().should ('be.visible');
cy.get(".my-auto").first().click();
cy.wait(7000);

 
  it("get the text of the heading and assert the value", () => {
      cy.get("h1.header").should($heading => {
          console.log($heading.text());
      })

      it("get the text of the heading and assert the value", () => {
          cy.get("h3.food+laundry+medicals+cleaning").should($heading => {
          console.log($heading.text());
          });
  
      });
  




     
  
  });
  

  it("verify the services link works", () => {
      cy.contains("Services").click({ force: true })
            
            });

  
            it("verify the company link", () => {
              Login()
              cy.contains("Company").click({force: true})
  
            });
  
  
  
  
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
  
              
  
          });
  

it("verify the profile functionality", () => {

  cy.get(".px-4.my-2.py-2").eq(0).click();
  cy.get("#firstname").should('be.visible');

})





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



//it("log out", () => {
//cy.get(".mx-2.my-auto").click();
//cy.get("a").contains("#headlessui-menu-item-:ra:").click({force: true});

//});

})

//cy.get(".primary-menu").find("li").first().should("have.text", "home");
//this is for listed list. find is to find the first listed item and then assertion of what should be there.






it("verify that the add to cart works", () => {
  cy.visit("https://carestation.care/shop");
  cy.get('[data-cy=laundryTab]').click({ force: true });
  cy.get('button[data-cy=medicalTab]').click({ force: true });
  cy.get("button[class=cart]").click({ force: true });
  cy.get("button[data-cy=cleaningTab]").click({ force: true });
  cy.get("button[class=cart]").dblclick({ force: true });
  //cy.get("price, eq 71.40");       

});


it("Get Senior", () => {
cy.get(".profile_sidebar-items").eq(1).click({force: true});
cy.wait(4000)
cy.get(".profile_seniors-addCard").click();
cy.wait(5000)
cy.get("[name='nickname']").type("Chinku");
cy.get("[name='firstname']").type("Chinedu");
cy.get("[name='lastname']").type("Abraham");
cy.get("[name='phone']").type("08055465664");
cy.wait(6000)
cy.get("[name='gender']").select('Female');
cy.wait(4000)
cy.get("[name='country']").select("Angola");
cy.wait(5000)
cy.get("[name='province']").select("Moxico");
cy.wait(4000)
cy.get("[name='city']").select("Luena");
cy.get("input[id=date_of_birth]").type("1999-01-01");
cy.wait(4000)
cy.get("[name='address']").type("Jalingo Street, Moxico");
cy.wait(4000)

//how to upload a file
const yourFixturePath ='image024.jpeg';
cy.get("[type='file']").attachFile("image024.jpeg")
cy.wait(7000)

cy.get("#actionBtn").click();
cy.wait(4000);
cy.get(".profile_sidebar-items").eq(2).click({force: true});
cy.wait(5000)
cy.get(".profile_sidebar-items").eq(3).click({force: true});
cy.wait(5000)
cy.get(".profile_sidebar-items").eq(4).click({force: true})
cy.wait(5000)

})


button class= continue flex justify-center items-center py-5 my-5 w-full
i wrote it this way ;

cy.get(".button").click();




    //for class and you have three seperate elements for it, you can use . in between them or use the middle one


})
