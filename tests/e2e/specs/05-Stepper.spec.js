describe('Workflow', () => {
  describe('When a visitor clicks on "Start your analyze"', () => {
    it('should be redirected to the basic info form', () => {
      cy.visit('/');
      cy.get('.button').click();
      cy.url().should('include', '/basic-info');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Informations'
      );
    });
  });

  describe('When a visitor submits his basic info', () => {
    it('should be redirected to the revenues form.', () => {
      cy.get('[data-test="name"]').type('Toto');
      cy.get('[data-test="marital-status"]').select('Marié(e)');
      cy.get('.button').click();
      cy.url().should('include', '/revenues');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Revenus'
      );
    });
  });

  describe('When a visitor submits his revenues', () => {
    it('should be redirected to the housing expenses form.', () => {
      cy.get('[data-test="net-salaries"]')
        .siblings()
        .children()
        .eq(0)
        .type('100');
      cy.get('.button').click();
      cy.url().should('include', '/expenses/housing');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Habitation'
      );
    });
  });

  describe('When a visitor submit his housing expenses', () => {
    it('should be redirected to the transport expenses form.', () => {
      cy.get('[data-test="rent-mortgage"]')
        .siblings()
        .children()
        .eq(1)
        .type('90');
      cy.get('.button').click();
      cy.url().should('include', '/expenses/transport');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Transports'
      );
    });
  });

  describe('When a visitor submit his transport expenses', () => {
    it('should be redirected to the insurance expenses form.', () => {
      cy.get('[data-test="car-public-transport"]')
        .siblings()
        .children()
        .eq(0)
        .type('80');
      cy.get('.button').click();
      cy.url().should('include', '/expenses/insurance');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Assurances'
      );
    });
  });

  describe('When a visitor clicks on a step that he had already completed - housing', () => {
    it('should be redirected to the corresponding form', () => {
      cy.get('.step-items > :nth-child(3)').click();
      cy.url().should('include', '/expenses/housing');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Habitation'
      );
    });
  });

  describe('When a visitor clicks again on a step that he had already completed - revenues', () => {
    it('should be redirected to the corresponding form', () => {
      cy.get('.step-items > :nth-child(2)').click();
      cy.url().should('include', '/revenues');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Revenus'
      );
    });
  });
});
