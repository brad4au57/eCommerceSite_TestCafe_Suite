import {Selector} from 'testcafe';

class Homepage {
    constructor() {
        this.headerBanner = Selector('#header > div.banner');
        this.headerNav = Selector('#header > div.nav');
        this.headerLogo = Selector('#header_logo');
        this.searchBar = Selector('#search_query_top');
        this.shoppingCart = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a');
        this.menuBar = Selector('#block_top_menu > ul');
        this.hp_ImageSlider = Selector('#homepage-slider');
        this.hp_SalesInfo = Selector('#htmlcontent_top');
        this.hp_FilterTabs = Selector('#home-page-tabs');
        this.hp_FeaturedProds = Selector('#homefeatured');
        this.hp_ImageLinkCards = Selector('#htmlcontent_home');
        this.hp_FacebookBlock = Selector('#facebook_block');
        this.hp_CompanyInfoBlock = Selector('#cmsinfo_block');
        this.hp_EditorialBlock = Selector('#editorial_block_center');
        this.footer_NewsletterBlock = Selector('#newsletter_block_left');
        this.footer_SocialBlock = Selector('#social_block');
        this.footer_CategoriesSection = Selector('#footer > div > section.blockcategories_footer.footer-block.col-xs-12.col-sm-2');
        this.footer_InfoSection = Selector('#block_various_links_footer');
        this.footer_MyAccountSection = Selector('#footer > div > section:nth-child(7)');
        this.footer_StoreInfoSection = Selector('#block_contact_infos');
        this.footer_Copyright = Selector('#footer > div > section.bottom-footer.col-xs-12');
    }
}

export default new Homepage();
