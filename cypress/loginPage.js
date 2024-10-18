class LoginPage {
    LoginInput() {
        cy.xpath("//a[@id='login2']").click();
        cy.wait(4000)
    }
    enterUsername(username) {
        cy.xpath('//input[@id="loginusername"]').type(username);
        cy.wait(4000)
    }
    enterPassword(password) {
        cy.xpath("//input[@id='loginpassword']").type(password)
        cy.wait(2000)
    }
    logInButton() {
        cy.xpath("//button[contains(text(),'Log in')]").click();
        cy.wait(4000)
    }
} export default LoginPage;