/// <reference types = "cypress" />

const { is } = require("cypress/types/bluebird");
const { times } = require("cypress/types/lodash");

describe ("Second work", () => {

    it("verify the url", () => {
        cy.visit("https://demo.nopcommerce.com/")
    cy.url().should("contain", "nopcommerce")

//cy.get("input[name='abcd']").$$.apply.often times, you will see input type= ddddd, name=abcd, you are not to use input type=dddd, rather what identifies the value of the ClipboardItem. the type is only showing you the type of value the item is.
//if there are duplicate elements, you have to specify the tag name

//if its not class or id, but an attribute, then its written this way depending on what you have; ('input[name=abcd]')
    });
    
})

//input type=text, name=username. Here, input is tag, name is an attribute.
//.should("be.visible").should("be.enabled
//should is used for validation/assertion



cy.wait(8000)
    cy.get("input[type='checkbox']").eq(1).check({ force: true })
    cy.wait(8000)
    cy.get("input[type='checkbox']").eq(2).should('not.be.checked')
    cy.wait(8000)
    cy.get("input[type='checkbox']").eq(2).check({ force: true })
    cy.wait(7000);
    //you can use uncheck if it was already checked and you need it unchecked.