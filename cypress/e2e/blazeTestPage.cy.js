/// <reference types ='cypress'/>

import LoginPage from "../loginPage";
import CategoryPage from "../categoryPage";
import CartPage from "../cartPage";
import PlaceOrder from "../placeOrderPage";
import PlaceOrderDetails from "../placeOrderInfo";

let userinfo;

before(function () {
    cy.fixture("dataInfo.json").then((data) => {
        userinfo = data.userData
    })
})

describe("blazeDemo test page", () => {
    const loginPage = new LoginPage();
    const categoryPage = new CategoryPage();
    const cartPage = new CartPage();
    const placeOrderPage = new PlaceOrder();
    const placeOrderInfo = new PlaceOrderDetails();

    it("blazeDemo homePage application Test", () => {
        cy.visit("https://www.demoblaze.com/index.html")
        loginPage.LoginInput();
        loginPage.enterUsername(userinfo.username);
        loginPage.enterPassword(userinfo.password);
        loginPage.logInButton();
        categoryPage.itemCategory();
        categoryPage.addSamsungx7();
        categoryPage.addSamsungToCart();
        cartPage.itemInCart();
        placeOrderPage.PlaceCartItem();
        placeOrderInfo.enterName();
        placeOrderInfo.enterCountry();
        placeOrderInfo.enterCity();
        placeOrderInfo.enterCardDetails();
        placeOrderInfo.enterMonth();
        placeOrderInfo.enterYear();
        placeOrderInfo.enterPurchaseButton();
        placeOrderInfo.clickOkButton();
    })
}) 