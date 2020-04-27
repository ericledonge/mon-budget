describe('Analyze-Step-1', () => {
  beforeEach(() => {
    cy.visit('/analyze/step-1');
  });

  describe('When a visitor arrives on the app', () => {
    it('should be able to choose a marital status', () => {
      cy.get('[data-test="marital-status"]').should('contain', 'maritale');
    });
    it('should be able to choose if he has kids or not', () => {
      cy.get('[data-test="has-kids"]').should('contain', 'enfant');
    });
  });

  describe('Since the visitor has not answered the questions', () => {
    it('should not be able to go to the next questions', () => {
      cy.get('.button').should('be.disabled');
    });
  });

  describe('When the visitor answers "yes" to the children question', () => {
    beforeEach(() => {
      cy.get('[data-test="has-kids"]')
        .children()
        .children()
        .children()
        .first()
        .click();
      cy.get('[data-test="number-kids"]')
        .children()
        .children()
        .next()
        .dblclick();
    });
    it('should be able to enter how many he has', () => {
      cy.get('[data-test="number-kids"]').should('be.visible');
    });
  });

  describe('When the visitor has answered all the questions', () => {
    beforeEach(() => {
      cy.get('[data-test="name"]').type('Toto');
      cy.get('[data-test="marital-status"]').select('Marié(e)');
    });
    it('should be able to go to the next questions', () => {
      cy.get('.button').should('not.be.disabled');
    });
    it('should be redirected to the Analyze step 2 page', () => {
      cy.get('.button').click();
      cy.url().should('include', '/analyze/step-2');
    });
  });
});
