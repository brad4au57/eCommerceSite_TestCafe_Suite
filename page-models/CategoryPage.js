import { Selector } from 'testcafe';

class CategoryPage {
    constructor (){
        this.productImgLink_1 = Selector('img[title="Printed Dress"]');
        this.moreBtn_1 = Selector('a.button > span').withText('More').nth(0);
        this.addToCartBtn_1 = Selector('a.button > span').withText('Add to cart').nth(0);
    }
}

export default new CategoryPage();