/// <reference types="Cypress" />

describe('Tercer reto, con los select', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.seleniumEasyListBox()
        cy.title().should('eq', 'Selenium Easy - JQuery Dual List Box Demo')
    })

    it('Primer paso del reto, haciendo multiselect', () => {
        cy.get('.pickData').should('be.visible').select(['Isis', 'Alice', 'Lara'])
    })
    it('Agregar los elementos seleccionado y trabajando con promesa', () => {
        cy.get('.pickData').should('be.visible').select(['Isis', 'Alice', 'Lara']).then(() => {
            cy.get('.pAdd').should('be.visible').should('be.enabled')
        })
    })
    it('Agregar los elementos seleccionado, trabajando con promesa y agregando los elementos', () => {
        cy.get('.pickData').should('be.visible').select(['Isis', 'Alice', 'Lara']).then(() => {
            cy.get('.pAdd').should('be.visible').should('be.enabled').click()
        })
    })
    it('Agregando otra promesa, validando el boton para agregar todos los elementos', () => {
        cy.get('.pickData').should('be.visible').select(['Isis', 'Alice', 'Lara']).then(() => {
            cy.get('.pAdd').should('be.visible').should('be.enabled').click().then(() => {
                cy.wait(3500)
                cy.get('.pAddAll').should('be.visible').should('be.enabled')
            })
        })
    })
    it('Agregando otra promesa, validando el boton para agregar todos los elementos y agregando todos los elementos', () => {
        cy.get('.pickData').should('be.visible').select(['Isis', 'Alice', 'Lara']).then(() => {
            cy.get('.pAdd').should('be.visible').should('be.enabled').click().then(() => {
                cy.wait(3500)
                cy.get('.pAddAll').should('be.visible').should('be.enabled').click()
            })
        })
    })
    it('Removiendo todos los elementos, validando el boton de Remove All', () => {
        cy.get('.pickData').should('be.visible').select(['Isis', 'Alice', 'Lara']).then(() => {
            cy.get('.pAdd').should('be.visible').should('be.enabled').click().then(() => {
                cy.wait(3500)
                cy.get('.pAddAll').should('be.visible').should('be.enabled').click().then(() => {
                    cy.wait(3500)
                    cy.get('.pRemoveAll').should('be.visible').should('be.enabled')
                })
            })
        })
    })
    it('Removiendo todos los elementos, aplicando el boton de Remove All', () => {
        cy.get('.pickData').should('be.visible').select(['Isis', 'Alice', 'Lara']).then(() => {
            cy.get('.pAdd').should('be.visible').should('be.enabled').click().then(() => {
                cy.wait(3500)
                cy.get('.pAddAll').should('be.visible').should('be.enabled').click().then(() => {
                    cy.wait(3500)
                    cy.get('.pRemoveAll').should('be.visible').should('be.enabled').click()
                })
            })
        })
    })
    it('Removiendo todos los elementos, aplicando el boton de Remove All, agregando el console', () => {
        cy.get('.pickData').should('be.visible').select(['Isis', 'Alice', 'Lara']).then(() => {
            cy.get('.pAdd').should('be.visible').should('be.enabled').click().then(() => {
                cy.wait(3500)
                cy.get('.pAddAll').should('be.visible').should('be.enabled').click().then(() => {
                    cy.wait(3500)
                    cy.get('.pRemoveAll').should('be.visible').should('be.enabled').click().then(() => {
                        cy.wait(3500)
                        cy.log('Se termino el reto, se removieron todo los elementos')
                    })
                })
            })
        })
    })
})