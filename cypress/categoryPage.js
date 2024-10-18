class CategoryPage {
    itemCategory() {
        cy.xpath("//a[@id='cat']")
            .should('be.visible')
            .click();
    }
    addSamsungx7() {
        cy.xpath("//a[normalize-space()='Samsung galaxy s7']").click();
        cy.wait(2000)
    }
    addSamsungToCart() {
        cy.xpath("//a[@class='btn btn-success btn-lg']")
            .should('be.visible')
            .click();
        cy.wait(2000)
    }
} export default CategoryPage;