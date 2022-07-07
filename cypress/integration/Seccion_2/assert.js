/// <reference types="Cypress" />
describe('Estudiando el assert containe', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.automaticeprac()
        cy.title().should('eq', 'My Store')
        cy.wait(3500)
    })

    it('Primer ejercicio con el assert containe', () => {
        cy.get('#block_top_menu').contains('Women').should('be.visible').click()
    })
    it('Practicando con asserts find y eq', () => {
        cy.get('.product-container').find('.product-image-container').eq(0).should('be.visible')
    })
    it.only('Practicando con asserts find y eq, dando click al un elemento del DOM', () => {
        cy.get('.product-container').find('.product-image-container').eq(0).should('be.visible').click()
    })
})