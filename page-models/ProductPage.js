import { Selector } from 'testcafe'

class ProductPage {
    constructor(){
        this.incQuantityBtn = Selector('i.icon-plus').nth(0);
        this.sizeSelect = Selector('#group_1');
        this.sizeOption = Selector('#group_1').find('option');
        this.addToCartBtn = Selector('#add_to_cart > button');
        this.modal_ProceedToCheckoutBtn = Selector('a.button[title="Proceed to checkout"]');
    }
}

export default new ProductPage();