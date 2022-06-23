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
    it('Segundo ejemplo con select', () => {
        cy.viewport('macbook-11')
        cy.visit('https://www.google.com/')
        cy.title().should('eq', 'Google')
        cy.get('[name="q"]').should('be.enabled').should('be.empty').should('be.visible').type('Github{enter}')

    })
    it.only('Tercer ejemplo, multiselect', () => {
        cy.viewport('macbook-11')
        cy.seleniumEasySelect()
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')
        cy.get('#multi-select').should('be.enabled').should('be.visible').select(['Florida', 'Texas', 'New York']).then(() => {
            cy.wait(3500)
            cy.get('#printMe').contains('First Selected').should('be.visible').should('be.enabled').click()
        })
    })
})