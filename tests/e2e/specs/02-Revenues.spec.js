describe('Analyze-Step-2', () => {
  before(() => {
    cy.visit('/analyze/step-2');
  });

  describe('When the user arrives in the revenues section', () => {
    it('should be able to fill in revenues', () => {
      cy.get('[data-test="net-salaries"]')
        .siblings()
        .children()
        .eq(0)
        .type('2000');
      cy.get('[data-test="net-salaries"]')
        .siblings()
        .children()
        .eq(1)
        .type('1000');
      cy.get('[data-test="rental-revenues"]')
        .siblings()
        .children()
        .eq(0)
        .type('200');
      cy.get('[data-test="rental-revenues"]')
        .siblings()
        .children()
        .eq(2)
        .type('AirBnB');
      cy.get('[data-test="public-benefits"]')
        .siblings()
        .children()
        .eq(1)
        .type('100');
      cy.get('[data-test="private-benefits"]')
        .siblings()
        .children()
        .eq(0)
        .type('100');
      cy.get('[data-test="child-benefits"]')
        .siblings()
        .children()
        .eq(1)
        .type('200');
      cy.get('[data-test="bonuses"]')
        .siblings()
        .children()
        .eq(0)
        .type('100');
      cy.get('[data-test="bonuses"]')
        .siblings()
        .children()
        .eq(1)
        .type('200');
      cy.get('[data-test="investment-income"]')
        .siblings()
        .children()
        .eq(0)
        .type('100');
      cy.get('[data-test="investment-income"]')
        .siblings()
        .children()
        .eq(1)
        .type('200');
      cy.get('[data-test="other-revenues"]')
        .siblings()
        .children()
        .eq(0)
        .type('200');
    });
    describe('When the visitor submits the revenues form', () => {
      it('should be redirected to the Summary page', () => {
        cy.get('[data-test="button-next"]').click();
        cy.url().should('include', '/summary');
      });
      it('should display his total monthly household revenues', () => {
        cy.get('[data-test="total-monthly-household-revenues"]').contains(
          '4400'
        );
      });
    });
  });
});
