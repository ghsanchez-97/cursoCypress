/// <reference types="Cypress" />
describe('Estudiando el assert containe', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.automaticeprac()
        cy.title().should('eq', 'My Store')
        cy.wait(3500)
    })

    it('Primer ejercicio con el assert containe', () => {
        
    })
})