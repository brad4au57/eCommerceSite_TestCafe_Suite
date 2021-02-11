import { ClientFunction } from 'testcafe';
import homepage from '../page-models/Homepage';
import authpage from '../page-models/AuthenticationPage';
import myacctpage from '../page-models/MyAccountPage';

fixture `User Sign In Smoke Test`
.page `http://automationpractice.com/index.php`
.meta({author: 'Brad Bales', creationDate: '02/09/2021'});

const getPageUrl = ClientFunction(() => window.location.href);

test   
    .before( async t => {
        await t.maximizeWindow();
    })    
    (`userSignIn_SmokeTest`, async t => {
        const userEmail = "test@bradbales.com"
        const userPassword = "testpass"
        // Step 1: On homepage, click the sign in button
        await t.click(homepage.headerSignIn);

        // Step 2: On authorization page, enter user credentials and click sign in button
        await t.typeText(authpage.registeredEmailInput, userEmail)
            .typeText(authpage.registeredPasswordInput, userPassword)
            .click(authpage.signInButton)

        // Step 3: Confirm the user is logged in, their name displays on navbar, and my account page is displayed
        await t.expect(myacctpage.navUsername.innerText).eql('Test User', "The user's name was correctly displayed.")
            .expect(myacctpage.myAccountHeading.visible).ok()
            .expect(getPageUrl()).contains('my-account');            
    });

