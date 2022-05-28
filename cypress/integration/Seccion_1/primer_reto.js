/// <reference types="Cypress" />
describe('Primer reto del curso', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.demoqaWebTables()
    })

    it('Realizanción del primer reto', () => {
        cy.title().should('eq', 'ToolsQA')
        cy.wait(3500)
        cy.get('#searchBox').should('be.visible').should('be.enabled').type('Cierra')
    })
    it.only('Realizanción del primer reto, limpiando el search', () => {
        cy.title().should('eq', 'ToolsQA')
        cy.wait(3500)
        cy.get('#searchBox').should('be.visible').should('be.enabled').type('Cierra')
        cy.wait(3500)
        cy.get('#searchBox').should('be.visible').should('be.enabled').clear()
        cy.wait(3500)
    })
})