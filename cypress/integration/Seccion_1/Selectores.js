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
    it('Segundo ejemplo con selector de atributos', () => {
        cy.get('[placeholder="Full Name"]').should('be.visible').should('be.enabled').should('be.empty').type('Maddison Hinata Sánchez Orh')
        cy.wait(3500)
    })
    it('Tercer ejemplo con Xpath', () => {
        cy.xpath('//*[@id="userName"]').should('be.visible').should('be.enabled').should('be.empty').type('Maddison Sánchez')
        cy.wait(3500)
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should('be.visible').should('be.enabled').should('be.empty').type('mhsanchez@live.com')
        cy.wait(3500)
        cy.xpath("//textarea[contains(@placeholder,'Current Address')]").should('be.visible').should('be.enabled').should('be.empty').type('Calle falsa 123')
        cy.wait(3500)
    })
    it('Cuarto ejemplo con cotainer',() => {
        cy.demoqaForm()
        cy.get('.custom-control-label').contains('Female').should('be.visible').should('not.be.selected').click()
        cy.wait(3500)
        cy.get('.custom-control-label').contains('Other').should('be.visible').should('not.be.selected').click()
        cy.wait(3500)
    })
    it.only('Quinto ejemplo con`copySelector', () => {
        cy.demoqaForm()
        cy.get('#userNumber').should('be.visible').should('be.enabled').should('be.empty').type('123456789')
        cy.wait(3500)
    })
})