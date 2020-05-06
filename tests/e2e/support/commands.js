Cypress.Commands.add('fillAField', (target, person, amount) => {
  cy.get(target)
    .siblings()
    .children()
    .eq(person)
    .type(amount);
});
