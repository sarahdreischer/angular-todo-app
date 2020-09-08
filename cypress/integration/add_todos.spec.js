/// <reference types="cypress" />

context('Add Todos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('should have no todo', () => {
    cy.get('ul.todos').should('not.contain', 'li')
  })

  it('should add a todo', () => {
    cy.get('input').type('test')
    cy.get('button').click()

    cy.get('ul.todos>li').should('contain.text', 'test')
  })

})
