describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('When a visitor arrives on the app', () => {
    it('should see the title and the subtitle', () => {
      cy.contains('.title', 'Mon Budget');
      cy.contains('.subtitle', 'budget');
    });
  });

  describe('When a visitor clicks on "Start your analyze"', () => {
    beforeEach(() => {
      cy.get('.button').click();
    });
    it('should be redirected to the Basic Info form', () => {
      cy.url().should('include', '/basic-info');
    });
  });
});
