/// <reference types="Cypress" />
describe('Ejercicios con select', () => {
    // beforeEach(() => {
    //     cy.viewport('macbook-11')
    //     cy.seleniumEasySelect()
    //     cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')
    // })

    it('Primer ejemplo con select', () => {
        cy.viewport('macbook-11')
        cy.seleniumEasySelect()
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')
        cy.get('#select-demo').should('be.visible').should('be.enabled').select('Sunday').should('have.value', 'Sunday')
        cy.wait(3500)
        cy.get('#select-demo').should('be.visible').should('be.enabled').select('Friday').should('have.value', 'Friday')
    })
    it.only('Segundo ejemplo con select', () => {
        cy.viewport('macbook-11')
        cy.visit('https://www.google.com/')
        cy.title().should('eq', 'Google')
        cy.get('[name="q"]').should('be.enabled').should('be.empty').should('be.visible').type('Github{enter}')

    })
})