/// <reference types="Cypress" />
describe('Tercer reto, con los select', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.seleniumEasyListBox()
        cy.title().should('eq', 'Selenium Easy - JQuery Dual List Box Demo')
    })

    it('Primer paso del reto', () => {
        
    })
})