describe('Test', () => {
  it('Test home page', () => {
      cy.visit('http://localhost:3000')
      cy.contains(`Welcome to our beautiful website. We're glad to have you here!`)
  })
})