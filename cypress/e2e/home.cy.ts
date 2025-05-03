describe('Home page', () => {
    it('visits the home page', () => {
      cy.visit('/');
      cy.contains('NextPhase Presents');
    });
  });
  