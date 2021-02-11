import { Selector } from "testcafe";

class MyAccountPage {
    constructor() {
        // My Account Tab
        this.navUsername = Selector('#header > div.nav > div > div > nav > div:nth-child(1) > a > span');
        this.myAccountHeading = Selector('#center_column > h1');
        this.dressesTab = Selector('#block_top_menu > ul > li:nth-child(2) > a');
        // Order History Tab
        this.orderHistoryHeading = Selector('#center_column > h1');
        this.orderHistoryHomeBtn = Selector('a.button').withText('Home');
    }
}

export default new MyAccountPage();