import { Role } from 'testcafe';
import authpage from '../page-models/AuthenticationPage';

export const user1 = Role('http://automationpractice.com/index.php?controller=authentication&back=my-account', async t => {
    await t.typeText(authpage.registeredEmailInput, 'test@bradbales.com')
        .typeText(authpage.registeredPasswordInput, 'testpass')
        .click(authpage.signInButton);
},{ preserveUrl: true });

