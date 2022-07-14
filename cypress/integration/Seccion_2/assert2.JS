/// <reference types="Cypress" />
describe('Continuación con los asserts', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.demoqa()
        cy.title().should('eq', 'ToolsQA')
        cy.wait(3500)
    })

    it('Validar datos con have.text', () => {
        cy.get('#userName').should('be.visible').should('be.empty').type('Guy Sánchez').should('have.value', 'Guy Sánchez')
        cy.wait(3500)
        cy.get('#userEmail').should('be.visible').should('be.empty').type('guy.sanchez27@hotmail.com').should('have.value', 'guy.sanchez27@hotmail.com')
        cy.wait(3500)
        cy.get('#submit').should('be.visible').should('be.enabled').click().then(() => {
            cy.wait(3500)
            cy.get('#name').should('be.visible').should('have.text', 'Name:Guy Sánchez')
            cy.wait(3500)
        })
    })
    it('Validar texto con contains.text', () => {
        cy.get('#userName').should('be.visible').should('be.empty').type('Guy Sánchez').should('have.value', 'Guy Sánchez')
        cy.wait(3500)
        cy.get('#userEmail').should('be.visible').should('be.empty').type('guy.sanchez27@hotmail.com').should('have.value', 'guy.sanchez27@hotmail.com')
        cy.wait(3500)
        cy.get('#submit').should('be.visible').should('be.enabled').click().then(() => {
            cy.wait(3500)
            cy.get('#name').should('be.visible').should('contain.text', 'Guy Sánchez')
            cy.wait(3500)
        })
    })
    it('Validar contain.text más then', () => {
        cy.get('#userName').should('be.visible').should('be.empty').type('Guy Sánchez')
        cy.wait(3500)
        cy.get('#userName').should('contain.value', 'Guy Sánchez').then(() => {
            cy.wait(3500)
            cy.get('#userEmail').should('be.visible').should('be.empty').type('guy.sanchez27@hotmail.com').should('have.value', 'guy.sanchez27@hotmail.com')
            cy.wait(3500)
            cy.get('#submit').should('be.visible').should('be.enabled').click()
        })
    })
    it('Validar have.text más then', () => {
        cy.get('#userName').should('be.visible').should('be.empty').type('Guy Sánchez')
        cy.wait(3500)
        cy.get('#userName').should('have.value', 'Guy Sánchez').then(() => {
            cy.wait(3500)
            cy.get('#userEmail').should('be.visible').should('be.empty').type('guy.sanchez27@hotmail.com').should('have.value', 'guy.sanchez27@hotmail.com')
            cy.wait(3500)
            cy.get('#submit').should('be.visible').should('be.enabled').click()
        })
    })
    it.only('Validando con class css', () => {
        cy.get('#userName').should('be.visible').should('have.class', 'mr-sm-2').then(() => {
            cy.wait(3500)
            cy.get('#userName').type('Guy Sánchez')
            cy.wait(3500)
        })
        
    })
})