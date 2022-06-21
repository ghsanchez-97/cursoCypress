// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types="Cypress" />
require('cypress-plugin-tab')
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
Cypress.Commands.add('demoqa', () => {
  cy.visit('https://demoqa.com/text-box')
  cy.wait(3500)
})
Cypress.Commands.add('demoqaForm', () => {
  cy.visit('https://demoqa.com/automation-practice-form')
  cy.wait(3500)
})
Cypress.Commands.add('orangehrm', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.wait(3500)
})
Cypress.Commands.add('demoqaWebTables', () => {
  cy.visit('https://demoqa.com/webtables')
  cy.wait(3500)
})
Cypress.Commands.add('computerDataBase', () => {
  cy.visit('http://computer-database.gatling.io/computers')
  cy.wait(3500)
})
Cypress.Commands.add('seleniumeasy', () => {
  cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
  cy.wait(3500)
})
Cypress.Commands.add('seleniumEasyRadio', () => {
  cy.visit('https://demo.seleniumeasy.com/basic-radiobutton-demo.html')
  cy.wait(3500)
})
Cypress.Commands.add('seleniumEasySelect', () => {
  cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
  cy.wait(3500)
})