describe('Segundo Reto del Curso', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.computerDataBase()
        cy.title().should('eq', 'Computers database')
    })

    it('Reto buscando un elemento desde el search con los selectores', () => {
        cy.wait(3500)
        cy.xpath("//input[contains(@type,'search')]").should('be.visible').should('be.enabled').should('have.attr', 'type', 'search').type('ACE')
        cy.wait(3500)
        cy.get('#searchsubmit').contains('Filter by name').should('be.visible').should('be.enabled').should('have.attr', 'type', 'submit').click()
        cy.wait(3500)
    })
    it('Agregando un nuevo elemento', () => {
        cy.wait(3500)
        cy.get('#add').should('be.visible').click()
        cy.wait(3500)
    })
    it.only('Completando los campos del nuevo elemento', () => {
        cy.wait(3500)
        cy.get('#add').should('be.visible').click()
        cy.wait(3500)
        cy.get('[name="name"]').should('be.empty').should('be.visible').should('be.enabled').type('Acer one')
        cy.wait(3500)
        cy.get('#introduced').should('be.empty').should('be.visible').should('be.enabled').type('2007-05-23')
        cy.wait(3500)
        cy.xpath("//input[contains(@name,'discontinued')]").should('be.visible').should('be.enabled').should('be.empty').type('2012-05-23')
        cy.wait(3500)
        cy.get('[name="company"]').should('be.visible').should('be.enabled').select('Nokia').should('have.value', '16')
        cy.wait(3500)
        cy.get('.primary').contains('Create this computer').should('be.visible').should('be.enabled').should('have.attr', 'type', 'submit').click()
    })
})