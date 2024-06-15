describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="add-task"]')
      .should('be.visible') // Verifica se o elemento está visível
      .type('Minha nova tarefa'); // Digita uma nova tarefa no input
    cy.get('[data-testid="add-task-button').click()

  })
})