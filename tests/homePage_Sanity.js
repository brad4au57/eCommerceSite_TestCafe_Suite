import homepage from "../page-models/Homepage";

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
    // Starting at the top of the page, verify the objects exist on the page
    await t 
        .expect(homepage.headerBanner.visible).ok()
        .expect(homepage.headerNav.visible).ok()
        .expect(homepage.headerLogo.visible).ok()
        .expect(homepage.searchBar.visible).ok()
        .expect(homepage.shoppingCart.visible).ok()
        .expect(homepage.menuBar.visible).ok()
        .expect(homepage.hp_ImageSlider.visible).ok()
        .expect(homepage.hp_SalesInfo.visible).ok()
        .expect(homepage.hp_FilterTabs.visible).ok()
        .expect(homepage.hp_FeaturedProds.visible).ok()
        .expect(homepage.hp_ImageLinkCards.visible).ok()
        .expect(homepage.hp_FacebookBlock.visible).ok()
        .expect(homepage.hp_CompanyInfoBlock.visible).ok()
        .expect(homepage.hp_EditorialBlock.visible).ok()
        .expect(homepage.footer_NewsletterBlock.visible).ok()
        .expect(homepage.footer_SocialBlock.visible).ok()
        .expect(homepage.footer_CategoriesSection.visible).ok()
        .expect(homepage.footer_InfoSection.visible).ok()
        .expect(homepage.footer_MyAccountSection.visible).ok()
        .expect(homepage.footer_StoreInfoSection.visible).ok()
        .expect(homepage.footer_Copyright.visible).ok();
    })
    // Peform action hooks after the test
    .after( async t => {
        // Enter any after hooks below
        // await t

    });
