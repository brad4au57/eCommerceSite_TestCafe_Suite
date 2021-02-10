import { Selector } from 'testcafe';
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
        .expect(homepage.headerBanner.exists).ok()
        .expect(homepage.headerNav.exists).ok()
        .expect(homepage.headerLogo.exists).ok()
        .expect(homepage.searchBar.exists).ok()
        .expect(homepage.shoppingCart.exists).ok()
        .expect(homepage.menuBar.exists).ok()
        .expect(homepage.hp_ImageSlider.exists).ok()
        .expect(homepage.hp_SalesInfo.exists).ok()
        .expect(homepage.hp_FilterTabs.exists).ok()
        .expect(homepage.hp_FeaturedProds.exists).ok()
        .expect(homepage.hp_ImageLinkCards.exists).ok()
        .expect(homepage.hp_FacebookBlock.exists).ok()
        .expect(homepage.hp_CompanyInfoBlock.exists).ok()
        .expect(homepage.hp_EditorialBlock.exists).ok()
        .expect(homepage.footer_NewsletterBlock.exists).ok()
        .expect(homepage.footer_SocialBlock.exists).ok()
        .expect(homepage.footer_CategoriesSection.exists).ok()
        .expect(homepage.footer_InfoSection.exists).ok()
        .expect(homepage.footer_MyAccountSection.exists).ok()
        .expect(homepage.footer_StoreInfoSection.exists).ok()
        .expect(homepage.footer_Copyright.exists).ok();
    })
    // Peform action hooks after the test
    .after( async t => {
        await t
            .takeScreenshot({
                path: 'homePage_sanity_output/homepage.png'
            });
    });
