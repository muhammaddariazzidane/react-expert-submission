/* eslint-disable no-undef */
// Pada file Cypress test

describe('LoginInput Component', () => {
  it('should display the login form and handle input correctly', () => {
    cy.visit('http://localhost:5173');

    cy.get('input[placeholder="Username"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');

    // Ketikkan email dan kata sandi ke dalam input
    cy.get('input[placeholder="Username"]').type('zidanecuy@gmail.com');
    cy.get('input[placeholder="Password"]').type('nnnnnn');

    // Periksa apakah nilai input sesuai dengan yang diketikkan
    cy.get('input[placeholder="Username"]').should(
      'have.value',
      'zidanecuy@gmail.com'
    );
    cy.get('input[placeholder="Password"]').should('have.value', 'nnnnnn');

    // Klik tombol login
    cy.get('button[name="Login"]').click();
  });
});
