function login() {

cy.get('#username')
cy.get('.btn.btn-default.ng-binding')
cy.get('.navbar-brand')
cy.contains('Forgot your password?').should('have.attr', 'href');

cy.get('#username').type('milos.isailovic+1154@htecgroup.com');
 cy.contains('Login')
//password
cy.get('#password').type('Ggaporousp6!');
}

login();
