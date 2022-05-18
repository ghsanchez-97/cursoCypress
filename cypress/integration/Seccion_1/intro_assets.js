describe('Introducción a los assets', () => {
    beforeEach(() => {
        cy.demoqaForm()
    })

    it('Demo de los Asserts en Cypress', () => {
        cy.title().should('eq', 'ToolsQA')
        cy.wait(3500)
        cy.get('#firstName').should('be.visible').type('Madison')
        cy.wait(3500)
        cy.get('#lastName').should('be.visible').type('Sánchez')
        cy.wait(3500)
        cy.get('#userEmail').should('be.visible').should('be.enabled').type('mhsanchez@hotmail.com')
        cy.wait(3500)
    })
})