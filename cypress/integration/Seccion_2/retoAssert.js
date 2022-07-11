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
    it('Realizando reto con asserts junto con las promesa, obteniendo el precio del vestido y se agrega al carrito de compra', () => {
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
                cy.get('#our_price_display').should('be.visible').then((e) => {
                    let price = e.text()
                    price = price.slice(1,3)
                    if(price > 30){
                        cy.log('El vestido se sale de nuestro prosupuesto')
                    }else{
                        cy.log('El vestido se encuentra dentro del prosupuesto')
                        cy.get('#add_to_cart .exclusive').should('be.visible').should('be.enabled').click()
                        cy.wait(500)
                    }
                })
            })
            )
        })
    })
    it('Realizando reto con asserts junto con las promesa, obteniendo el precio del vestido y se sale del prosupuesto', () => {
        cy.get('#block_top_menu').contains('Women').should('be.visible').click().then(() => {(
            cy.wait(3500),
            cy.get('.product-container').find('.product-image-container .product_img_link').eq(3).should('be.visible').click(50, 3, {force:true}).then(() => {
                cy.wait(3500)
                cy.get('#product_condition .editable').should('be.visible').then((e) => {
                    let state = e.text()
                    cy.log(state)
                    if(state == 'New'){
                        cy.log('El vestido es nuevo')
                    }
                })
                cy.get('#our_price_display').should('be.visible').then((e) => {
                    let price = e.text()
                    price = price.slice(1,3)
                    if(price > 30){
                        cy.log('El vestido se sale de nuestro prosupuesto')
                        cy.xpath("(//a[contains(@href,'category=3&controller=category')])[2]").should('be.visible').click()
                    }else{
                        cy.log('El vestido se encuentra dentro del prosupuesto')
                        cy.get('#add_to_cart .exclusive').should('be.visible').should('be.enabled').click()
                        cy.wait(500)
                    }
                })
            })
            )
        })
    })
})