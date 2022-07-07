/// <reference types="Cypress" />
describe('Reto con los assets', () => {
    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.automaticeprac()
        cy.title().should('eq', 'My Store')
        cy.wait(3500)
    })

    it('Practicando con asserts find y eq, dando click al un elemento del DOM', () => {
        cy.get('#block_top_menu').contains('Women').should('be.visible').click().then(() => {(
            cy.wait(3500),
            cy.get('.product-container').find('.product-image-container .product_img_link').eq(0).should('be.visible').click(50, 3, {force:true}).then(() => {
                cy.wait(3500)
                cy.get('#product_condition .editable').should('be.visible').then((e) => {
                    let state = e.text()
                    cy.log(state)
                    if(state == 'New'){
                        cy.log('El vestido es nuevo')
                    }
                })
            })
            )
        })
    })
})