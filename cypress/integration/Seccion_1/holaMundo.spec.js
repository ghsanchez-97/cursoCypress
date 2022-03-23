describe('Bienvenido al mundo de Cypress seccion 1', () => {
    it('Haciendo el primer test => Hola mundo', () => {
        cy.log('Hola mundo')
        cy.wait(1500)
    })

    it('Haciendo el segundo test => con el comando visit', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type('Cypress')
        cy.wait(1500)
    })
    
}) // Cierra del describe