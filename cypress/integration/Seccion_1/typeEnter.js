describe('Funcionalidad con type Enter', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
        cy.wait(3500)
    })

    it('Type --> ENTER', () => {
        cy.title().should('eq', 'Google')
        cy.wait(3500)
        // cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').type('Cypress io')
        cy.get('[name="q"]').type('Cypress io {enter} ')
        cy.wait(3500)
        cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3').click()
    })
})