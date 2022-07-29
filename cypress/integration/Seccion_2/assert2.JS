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
    it('Validando con class css', () => {
        cy.get('#userName').should('be.visible').should('have.class', 'mr-sm-2').then(() => {
            cy.wait(3500)
            cy.get('#userName').type('Guy Sánchez')
            cy.wait(3500)
        })
        
    })
    it('Validando con class css y con el assert and', () => {
        cy.get('#userName').should('be.visible').and('have.class', 'mr-sm-2').then(() => {
            cy.wait(3500)
            cy.get('#userName').type('Guy Sánchez')
            cy.wait(3500)
        })
        
    })
    it('Validando con not', () => {
        cy.get('#userName').should('be.visible').and('not.have.class', 'mr-sm-22').then(() => {
            cy.wait(3500)
            cy.get('#userName').type('Guy Sánchez')
            cy.wait(3500)
        })
        
    })
})
describe('Continuación con los asserts', () => {
    let time = 3500
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.seleniumEasyTable()
        cy.title().should('eq', 'Selenium Easy - Table with Pagination Demo')
        cy.wait(time)
    })

    it('Asserts length', () => {
        cy.get('#myTable').should('be.visible').and('not.be.enabled').and('have.length', 1).then(() => {
            cy.wait(time)
            cy.get('#myTable > tr').should('be.visible').and('have.length', 13).then(() => {
                cy.wait(time)
                cy.get('#myTable > tr > td').should('be.visible').and('have.length', 91).and('have.css', 'padding', '8px')
            })
        })
    })
    it.only('', () => {
        cy.seleniumEasyText()
        cy.get('.at-cm-no-button').should('be.visible').click().then(() => {
            cy.wait(time)
            cy.xpath("//input[contains(@placeholder,'Please enter your Message')]").should('be.visible').type('Demo Cypress')
            cy.wait(time)
            cy.contains('[type="button"]', 'Show Message').should('be.visible').click()
        })

    })
})