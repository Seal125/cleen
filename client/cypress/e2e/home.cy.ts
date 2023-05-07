describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays hello world', () => {
    cy.get('h1').should('contain', 'Hello world!');
  });
});
