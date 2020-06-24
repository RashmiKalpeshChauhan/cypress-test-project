///<reference types="cypress" />
require('cypress-xpath')
describe('Login Test case', () => {
    beforeEach((testdata) => {      
      cy.fixture('testData.json').as('testdata') 
      cy.visit(url)
    //    cy.visit(url,{
    //     onBeforeLoad (win) {           
    //         Object.defineProperty(win.navigator, 'language', {
    //             get: cy.stub().returns('English').as('language')
    //         })
    //       }
    //    })        
      })  


    it("ticket value should less than 10000", (testData) => {        
        cy.searchFlight(origin,destination);    
        cy.selectDate();        
        cy.searchButton();
        cy.lowestPrice();        
    })
    it("validate the languge of page is english", () => {
        if(cy.title().should('not.have.value', 'tajawal')){
            cy.get('[data-testid="Header__LanguageSwitch"]').click() 
            cy.xpath("//font[text()='English']").click()
            cy.wait(10000)
           }
         cy.get('h2').contains("LET'S BOOK YOUR NEXT TRIP")
     })
})