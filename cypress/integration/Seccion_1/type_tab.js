describe('Testing con type tab', () => {
    beforeEach(() => {
        cy.demoqaForm()
    })

    it('Funcion type tab', () => {
        cy.title().should('eq', 'ToolsQA')
        cy.wait(3500)
        cy.get('#firstName').type('Guy').tab().type('Sanchez').tab().type('anakin25@live.com')
    })
})