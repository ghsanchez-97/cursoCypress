/// <reference types="Cypress" />

describe('Sección 1, validando el titulo', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
        cy.wait(3500)
    })

    it('Test validando titulo', () => {
        cy.title().should('eq', 'ToolsQA')
        cy.log('Ok, la funcion Title funciona correctamente')
    })
})