describe('Home', () => {
  it('should contain the title and the subtitle', () => {
    cy.visit('/');
    cy.contains('.title', 'Mon Budget');
    cy.contains('.subtitle', 'budget');
  });

  describe('When the user clicks on the "Start your analyze"', () => {
    it('should redirect the user to the Analyze page', () => {
      cy.get('.button').click();
      cy.url().should('include', '/analyze');
    });
  });
});
