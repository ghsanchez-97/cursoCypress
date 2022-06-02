describe('Haciendo pruebas con los selectores', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.demoqa()
        cy.title().should('eq', 'ToolsQA')
        cy.wait(3500)
    })

    it('Primer ejemplo con selector id', () => {
        cy.get('#userName').should('be.visible').should('be.enabled').should('be.empty').type('Huascar')
        cy.wait(3500)
        cy.get('#userEmail').should('be.visible').should('be.enabled').should('be.empty').type('guy.sanchez97@hotmail.com')
        cy.wait(3500)
    })
    it.only('Segundo ejemplo con selector de atributos', () => {
        cy.get('[placeholder="Full Name"]').should('be.visible').should('be.enabled').should('be.empty').type('Maddison Hinata Sánchez Orh')
        cy.wait(3500)
    })
})