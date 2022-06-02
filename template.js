/// <reference types="Cypress" />
describe('', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.visit('')
        cy.wait(3500)
        cy.title().should('eq', '')
    })

    it('', () => {
        
    })
})