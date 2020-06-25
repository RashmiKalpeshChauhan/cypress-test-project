///<reference types="cypress" />
import bookingPage from '../pageObjects/bookingPage'

describe('search flight', function () {

    it('search flight', function () {
        const bp = new bookingPage()
        bp.visit();
        bp.searchFlight('DXB','DEL')
    })

})