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


// loginUsr: function(uname, pass){
//         let that = this;
//         this.elements._loginButton().click().then(function () {
//             browser.getAllWindowHandles().then(function (handles) {
//                 let oldWindowHandle = handles[0];
//                 let newWindowHandle = handles[1]; // this is your new window
//
//                 browser.switchTo().window(newWindowHandle).then(function () {
//                     browser.ignoreSynchronization = true;
//                     global.waitEle(that.elements._gptwButton());
//                     that.elements._gptwButton().click();
//                     that.elements._oldView().click();
//                     global.waitEle(that.elements._usernameField());
//                     that.elements._usernameField().sendKeys(uname);
//                     that.elements._passwordField().click();
//                     global.waitEle(that.elements._passwordInput());
//                     that.elements._passwordInput().sendKeys(pass);
//                     global.waitEle(that.elements._submitButton());
//                     that.elements._submitButton().click();
//                 });
//                 browser.switchTo().window(oldWindowHandle);
//                 //global.waitEle(home.elements._standardLibrary());
//                 //expect(browser.getTitle()).toEqual('GPTW');
//             });
//         });
//     }
