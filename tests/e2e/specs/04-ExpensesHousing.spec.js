describe('ExpensesHousing', () => {
  before(() => {
    cy.visit('/expenses/housing');
  });

  describe('When the user arrives in the housing expenses section', () => {
    it('should be able to fill in his housing expenses', () => {
      cy.fillAField('[data-test="rent-mortgage"]', 0, 1500);
      cy.fillAField('[data-test="electricity-heating"]', 1, 300);
      cy.fillAField('[data-test="telephone-cable-internet"]', 0, 50);
    });
    it('should be able to read his results in the summary', () => {
      cy.get('[data-test="button-next"]').click();

      cy.get('[data-test="car-public-transport"]', { timeout: 2000 });
      cy.get('[data-test="button-next"]').click();

      cy.get('[data-test="life-insurance"]', { timeout: 2000 });
      cy.get('[data-test="button-next"]').click();

      cy.get('[data-test="grocery"]', { timeout: 2000 });
      cy.get('[data-test="button-next"]').click();

      cy.get('[data-test="travels"]', { timeout: 2000 });
      cy.get('[data-test="button-next"]').click();

      cy.get('[data-test="professional-association"]', { timeout: 2000 });
      cy.get('[data-test="button-next"]').click();

      cy.get('[data-test="hairdresser"]', { timeout: 2000 });
      cy.get('[data-test="button-next"]').click();

      cy.get('[data-test="gifts"]', { timeout: 2000 });
      cy.get('[data-test="button-next"]').click();

      cy.get('[data-test="housing-expenses"]').contains(1850);
    });
  });
});
