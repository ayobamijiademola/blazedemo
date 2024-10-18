class PlaceOrder {
    PlaceCartItem() {
        cy.xpath("//button[normalize-space()='Place Order']")
            .should('be.visible')
            .click();
    }
} export default PlaceOrder;