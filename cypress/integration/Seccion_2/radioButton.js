describe('Ejercicio con Radius Botton', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.seleniumEasyRadio()
        cy.title().should('eq', 'Selenium Easy Demo - Radio buttons demo for Automation')
    })

    it('Ejemplo uno con radios, con value', () => {
        cy.get('.panel-body > :nth-child(3) > input').should('be.visible').should('be.enabled').check().should('be.checked')
        cy.wait(3500)
    })
    it('Radios con click', () => {
        cy.get('.panel-body > :nth-child(3) > input').should('be.visible').should('be.enabled').click().should('be.checked')
        cy.wait(3500)
    })
})