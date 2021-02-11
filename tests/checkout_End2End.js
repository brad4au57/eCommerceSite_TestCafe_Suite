import { user1 } from '../utilities/roles';
import myacctpage from '../page-models/MyAccountPage';
import catpage from '../page-models/CategoryPage';
import prodpage from '../page-models/ProductPage';
import shopcartpage from '../page-models/ShoppingCartPage';
import homepage from '../page-models/Homepage';

fixture `User Checkout End To End Test`
.page `http://automationpractice.com/index.php`
.meta({author: 'Brad Bales', creationDate: '02/10/2021'});

test
    .before(async t => { 
        await t.maximizeWindow();
    })
    (`checkout_End2End`, async t => {
        await t.useRole(user1)
            .click(myacctpage.dressesTab)
            .hover(catpage.productImgLink_1)
            .click(catpage.moreBtn_1)
            .click(prodpage.incQuantityBtn)
            .click(prodpage.sizeSelect)
            .click(prodpage.sizeOption.withText('L'))
            .expect(prodpage.sizeSelect.value).eql('3')
            .click(prodpage.addToCartBtn)
            .click(prodpage.modal_ProceedToCheckoutBtn)
            .expect(shopcartpage.shoppingCartSummaryHeading.visible).ok()
            .click(shopcartpage.summary_ProceedToCheckoutBtn)
            .click(shopcartpage.address_ProceedToCheckoutBtn)
            .click(shopcartpage.termsOfServiceCheckbox)
            .click(shopcartpage.shipping_ProceedToCheckoutBtn)
            .click(shopcartpage.payByBankwireBtn)
            .click(shopcartpage.confirmMyOrderBtn)
            .expect(shopcartpage.orderConfirmationHeading.innerText).eql('ORDER CONFIRMATION')
            .click(shopcartpage.backToOrdersLink)
            .expect(myacctpage.orderHistoryHeading.innerText).eql('ORDER HISTORY')
            .click(myacctpage.orderHistoryHomeBtn)
            .expect(homepage.hp_ImageSlider.visible).ok();
    });