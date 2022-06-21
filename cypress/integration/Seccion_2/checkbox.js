describe('En la seccion 2', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.seleniumeasy()
        cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium')
    })

    it('Trabajando con los checkbox', () => {
        cy.get('[type="checkbox"]').should('be.enabled').should('be.visible').check().should('be.checked')
        cy.wait(3500)
        cy.get('[type="checkbox"]').should('be.enabled').should('be.visible').uncheck().should('not.be.checked')
    })
    it.only('Checkbox por selección', () => {
        cy.get('#isAgeSelected').check().should('be.checked')
        cy.wait(3500)
        cy.xpath('/html/body/div[2]/div/div[2]/div[2]/div[2]/div[2]/label/input').check().should('be.checked')
        cy.wait(3500)
        cy.get('.cb1-element').contains('Option 4').check().should('be.checked')
        cy.wait(3500)
    })
})