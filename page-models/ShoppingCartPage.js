import { Selector } from 'testcafe'

class ShoppingCartPage {
    constructor(){
        // Summary Step
        this.shoppingCartSummaryHeading = Selector('#cart_title');
        this.summary_ProceedToCheckoutBtn = Selector('a[title="Proceed to checkout"]').nth(1);
        // Address Step
        this.address_ProceedToCheckoutBtn = Selector('button[name="processAddress"]');
        // Shipping Step
        this.termsOfServiceCheckbox = Selector('#cgv');
        this.shipping_ProceedToCheckoutBtn = Selector('button[name="processCarrier"]');
        // Payment Step
        this.payByBankwireBtn = Selector('a.bankwire');
        this.confirmMyOrderBtn = Selector('button.btn > span ').withText('I confirm my order');
        // Confirmation Step
        this.orderConfirmationHeading = Selector('#center_column > h1');
        this.backToOrdersLink = Selector('a[title="Back to orders"]');
    }
}

export default new ShoppingCartPage();