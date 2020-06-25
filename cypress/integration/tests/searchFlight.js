///<reference types="cypress" />
require('cypress-xpath')
xdescribe('Login Test case', () => {
    before(function(){
        cy.fixture('testData').then((data)=>{
            this.data=data   
        })
    })

    it("ticket value should less than 10000", function(){ 
        cy.visit("/")       
        cy.searchFlight(this.data.origin,this.data.destination);    
        cy.selectDate();        
        cy.searchButton();
        cy.lowestPrice();        
    })
    it("validate the languge of page is english", function() {
        if(cy.title().should('not.have.value', 'tajawal')){
            cy.get('[data-testid="Header__LanguageSwitch"]').click() 
            cy.xpath("//font[text()='English']").click()
            cy.wait(10000)
           }
         cy.get('h2').contains("LET'S BOOK YOUR NEXT TRIP")
     })
})