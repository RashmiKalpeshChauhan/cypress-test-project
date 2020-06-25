///<reference types="cypress" />
require('cypress-xpath')
class bookingPage{
visit(){
    cy.visit("/")
}
originAirport(origin){
    cy.get("[data-testid='FlightSearchBox__FromAirportInput']").type(origin);
    cy.get("span:contains('"+origin+"')").click({ force: true })
    return this;
}
destinationAirport(destination){
    cy.get("[data-testid='FlightSearchBox__ToAirportInput']").type(destination);
    cy.get("span:contains('"+destination+"')").click({ force: true })
    return this;
}
 twoDaysChcekbox(){
    cy.xpath("//input[@data-testid='FlightSearchBox__FareCalendarCheckbox']").click({force: true})
 } 
 clickCalendar(){
    cy.get("[data-testid='FlightSearchBox__FromDateButton']").click()
 }
clickonFlightOption(){
    cy.get("[data-testid=Header__FlightsNavigationTab]").click();
}

selectDate(){
    const date = Cypress.moment().get('date') + 5;
    if (date > 30) {
        date = 30;
    }
    cy.get('div[class="DayPicker-Months"]')
        .find('span', date)
        .contains(date)
        .click();
    cy.get('[data-testid=FlightSearchBox__RemoveReturnButton]').click()
}
searchButton(){
    cy.get("[data-testid='FlightSearchBox__SearchButton']").first().click()
}
lowestPrice(){
    cy.xpath("//td/div/span[2]").each($el => {
        const price = $el.text();
        const priceRegex = price.replace(/[$.,]+/g, '');
        const priceValue = parseInt(priceRegex)
        cy.log('priceValue: ', priceValue);
        expect(priceValue).to.be.lessThan(10000);
    })
}
searchFlight(origin,destination){
    this.clickonFlightOption()
    this.originAirport(origin) 
    this.destinationAirport(destination)
    this.twoDaysChcekbox()
     this.clickCalendar()   
    this.selectDate()
    this.searchButton()
    this.lowestPrice()
}
}
export default bookingPage