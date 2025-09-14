describe('Test', () => {
  it('Test home page', () => {
      cy.visit('https://www.cypress.io/')
      cy.contains(`With Cypress, you can easily create tests for your modern web applications`)
  })
})