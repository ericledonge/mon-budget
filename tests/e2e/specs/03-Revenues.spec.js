describe('Revenues', () => {
  before(() => {
    cy.visit('/revenues');
  });

  describe('When the user arrives in the revenues section', () => {
    it('should be able to fill in revenues', () => {
      cy.fillAField('[data-test="net-salaries"]', 0, 2000);
      cy.fillAField('[data-test="net-salaries"]', 1, 1000);
      cy.fillAField('[data-test="rental-revenues"]', 0, 200);
      cy.fillAField('[data-test="rental-revenues"]', 2, 'AirBnb');
      cy.fillAField('[data-test="public-benefits"]', 1, 100);

      // Try to type a text value in a money field
      cy.fillAField('[data-test="public-benefits"]', 0, 'toto');

      cy.fillAField('[data-test="private-benefits"]', 0, 100);
      cy.fillAField('[data-test="child-benefits"]', 1, 200);
      cy.fillAField('[data-test="bonuses"]', 0, 100);
      cy.fillAField('[data-test="bonuses"]', 1, 200);
      cy.fillAField('[data-test="investment-income"]', 0, 100);
      cy.fillAField('[data-test="investment-income"]', 1, 200);
      cy.fillAField('[data-test="other-revenues"]', 0, 200);
    });
    it('should be able to read his results in the summary', () => {
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="button-next"]').click();
      cy.get('[data-test="revenues"]').contains(4400);
    });
  });
});
