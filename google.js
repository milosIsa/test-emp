describe('My First Test', function() {
  it('Visit Google', function() {
    cy.visit('https://www.browserstack.com')




    //username
    cy.get('.product').contains('Automate');
    cy.get('.product.app-live-link');
    cy.contains('App Live');
    cy.contains('Sign in').click();


    cy.get('#user_email_login').type('irina.stankovic@htecgroup.com').blur();
    cy.get('#user_password').type('htec2017');
    cy.get('#user_submit').click();
    cy.contains('Enable Local Testing').click();
    //cy.get("#search-icon-legacy").click();






    })

})
