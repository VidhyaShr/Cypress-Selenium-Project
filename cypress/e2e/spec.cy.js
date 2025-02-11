/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.task('seleniumBrowser')
  })
})