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

  describe('When a visitor submit his insurance expenses', () => {
    it('should be redirected to the food expenses form.', () => {
      cy.get('[data-test="life-insurance"]')
        .siblings()
        .children()
        .eq(1)
        .type('70');
      cy.get('.button').click();
      cy.url().should('include', '/expenses/food');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Alimentation'
      );
    });
  });

  describe('When a visitor submit his food expenses', () => {
    it('should be redirected to the leisure expenses form.', () => {
      cy.get('[data-test="grocery"]')
        .siblings()
        .children()
        .eq(0)
        .type('60');
      cy.get('.button').click();
      cy.url().should('include', '/expenses/leisure');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Loisirs'
      );
    });
  });

  describe('When a visitor submit his leisure expenses', () => {
    it('should be redirected to the education expenses form.', () => {
      cy.get('[data-test="travels"]')
        .siblings()
        .children()
        .eq(1)
        .type('50');
      cy.get('.button').click();
      cy.url().should('include', '/expenses/education');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Éducation'
      );
    });
  });

  describe('When a visitor submit his education expenses', () => {
    it('should be redirected to the health expenses form.', () => {
      cy.get('[data-test="professional-association"]')
        .siblings()
        .children()
        .eq(0)
        .type('40');
      cy.get('.button').click();
      cy.url().should('include', '/expenses/health');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Santé'
      );
    });
  });

  describe('When a visitor submit his health expenses', () => {
    it('should be redirected to the various expenses form.', () => {
      cy.get('[data-test="hairdresser"]')
        .siblings()
        .children()
        .eq(1)
        .type('30');
      cy.get('.button').click();
      cy.url().should('include', '/expenses/various');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Diverses'
      );
    });
  });

  describe('When a visitor submit his various expenses', () => {
    it('should be redirected to the summary.', () => {
      cy.get('[data-test="gifts"]')
        .siblings()
        .children()
        .eq(0)
        .type('20');
      cy.get('.button').click();
      cy.url().should('include', '/summary');
      cy.get('.is-active > .step-link > .step-details > .step-title').should(
        'contain',
        'Sommaire'
      );
    });
  });

  describe('When a visitor arrives to the summary', () => {
    it('should be reflects the data he has inputed.', () => {
      cy.get('[data-test="revenues"]').should('contain', '100');
      cy.get('[data-test="housing-expenses"]').should('contain', '90');
      cy.get('[data-test="transport-expenses"]').should('contain', '80');
      cy.get('[data-test="insurance-expenses"]').should('contain', '70');
      cy.get('[data-test="food-expenses"]').should('contain', '60');
      cy.get('[data-test="leisure-expenses"]').should('contain', '50');
      cy.get('[data-test="education-expenses"]').should('contain', '40');
      cy.get('[data-test="health-expenses"]').should('contain', '30');
      cy.get('[data-test="various-expenses"]').should('contain', '20');
    });
  });
});
