describe('Testing de type pageUp y pageDown', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
        cy.wait(3500)
    })

    it('Type pageUp', () => {
        cy.title().should('eq', 'ToolsQA')
        cy.wait(3500)
        cy.get('#userName').type('{pageUp}')
        cy.wait(3500)
    })
    it('Type pageDown', () => {
        cy.title().should('eq', 'ToolsQA')
        cy.wait(3500)
        cy.get('#userName').type('{pageDown}')
        cy.wait(3500)
    })
})