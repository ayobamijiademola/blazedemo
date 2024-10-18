class PlaceOrderDetails {
    enterName() {
        cy.xpath("//input[@id='name']").type('Ramson');
        cy.wait(2000);
    }
    enterCountry() {
        cy.xpath("//input[@id='country']").type('Australia');
        cy.wait(2000);
    }
    enterCity() {
        cy.xpath("//input[@id='city']").type('Nandos')
        cy.wait(2000);
    }
    enterCardDetails() {
        cy.xpath("//input[@id='card']").type('5354637898762653');
        cy.wait(2000);
    }
    enterMonth() {
        cy.xpath("//input[@id='month']").type('12');
        cy.wait(2000);
    }
    enterYear() {
        cy.xpath("//input[@id='year']").type('2024')
        cy.wait(2000);
    }
    enterPurchaseButton() {
        cy.xpath("//button[contains(text(),'Purchase')]").click();
        cy.wait(2000)
    }
    clickOkButton() {
        cy.xpath("//button[contains(text(),'OK')]")
            .should('be.visible')
            .click();
    }
} export default PlaceOrderDetails;