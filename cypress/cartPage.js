class CartPage {
    itemInCart() {
        cy.xpath("//a[normalize-space()='Cart']").click();
    }
} export default CartPage;