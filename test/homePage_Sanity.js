import {Selector} from 'testcafe';

fixture `Homepage Sanity`
.page `http://automationpractice.com/index.php`
.meta({author: 'Brad Bales', creationDate: '02/09/2021'});

test
    // Perform actions to browser before test 
    .before( async t => {
        await t.maximizeWindow();
    })
    // Run test specified below
    ('homePage_sanity', async t => {
    // Starting at the top of the page define page objects that should exist on the page
    const headerBanner = Selector('#header > div.banner').exists;
    const headerNav = Selector('#header > div.nav').exists
    const headerLogo = Selector('#header_logo').exists
    const searchBar = Selector('#search_query_top').exists
    const shoppingCart = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').exists
    const menuBar = Selector('#block_top_menu > ul').exists
    const hp_ImageSlider = Selector('#homepage-slider').exists
    const hp_SalesInfo = Selector('#htmlcontent_top').exists
    const hp_FilterTabs = Selector('#home-page-tabs').exists
    const hp_FeaturedProds = Selector('#homefeatured').exists
    const hp_ImageLinkCards = Selector('#htmlcontent_home').exists
    const hp_FacebookBlock = Selector('#facebook_block').exists
    const hp_CompanyInfoBlock = Selector('#cmsinfo_block').exists
    const hp_EditorialBlock = Selector('#editorial_block_center').exists
    const footer_NewsletterBlock = Selector('#newsletter_block_left').exists
    const footer_SocialBlock = Selector('#social_block').exists
    const footer_CategoriesSection = Selector('#footer > div > section.blockcategories_footer.footer-block.col-xs-12.col-sm-2').exists
    const footer_InfoSection = Selector('#block_various_links_footer').exists
    const footer_MyAccountSection = Selector('#footer > div > section:nth-child(7)').exists
    const footer_StoreInfoSection = Selector('#block_contact_infos').exists
    const footer_Copyright = Selector('#footer > div > section.bottom-footer.col-xs-12').exists

    await t 
        .expect(headerBanner).ok()
        .expect(headerNav).ok()
        .expect(headerLogo).ok()
        .expect(searchBar).ok()
        .expect(shoppingCart).ok()
        .expect(menuBar).ok()
        .expect(hp_ImageSlider).ok()
        .expect(hp_SalesInfo).ok()
        .expect(hp_FilterTabs).ok()
        .expect(hp_FeaturedProds).ok()
        .expect(hp_ImageLinkCards).ok()
        .expect(hp_FacebookBlock).ok()
        .expect(hp_CompanyInfoBlock).ok()
        .expect(hp_EditorialBlock).ok()
        .expect(footer_NewsletterBlock).ok()
        .expect(footer_SocialBlock).ok()
        .expect(footer_CategoriesSection).ok()
        .expect(footer_InfoSection).ok()
        .expect(footer_MyAccountSection).ok()
        .expect(footer_StoreInfoSection).ok()
        .expect(footer_Copyright).ok();
    })
    // Peform action hooks after the test
    .after( async t => {
        await t
            .takeScreenshot({
                path: 'homePage_sanity_output/homepage.png'
            });
    });
