// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add("searchFlight", () => { 
    cy.get("[data-testid=Header__FlightsNavigationTab]").click();
    cy.get("[data-testid='FlightSearchBox__FromAirportInput']").type("DXB");
    cy.get("span:contains('DXB')").click({ force: true })
    cy.get("[data-testid='FlightSearchBox__ToAirportInput']").type("DEL");
    cy.get("span:contains('DEL')").click({ force: true })
    cy.wait(50)
     cy.xpath("//input[@data-testid='FlightSearchBox__FareCalendarCheckbox']").click({force: true})
    cy.get("[data-testid='FlightSearchBox__FromDateButton']").click()
 })
 Cypress.Commands.add("selectDate",()=>{
    const date = Cypress.moment().get('date') + 5;
    if (date > 30) {
        date = 30;
    }
    cy.get('div[class="DayPicker-Months"]')
        .find('span', date)
        .contains(date)
        .click();
    cy.get('[data-testid=FlightSearchBox__RemoveReturnButton]').click()
    
 })
 Cypress.Commands.add("searchButton",()=>{
    cy.get("[data-testid='FlightSearchBox__SearchButton']").first().click()
 })
 Cypress.Commands.add("lowestPrice",()=>{
    cy.xpath("//td/div/span[2]").each($el => {
        const price = $el.text();
        const priceRegex = price.replace(/[$.,]+/g, '');
        const priceValue = parseInt(priceRegex)
        cy.log('priceValue: ', priceValue);
        expect(priceValue).to.be.lessThan(10000);
    })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("",{})