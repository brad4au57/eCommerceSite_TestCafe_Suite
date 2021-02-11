import { Selector } from "testcafe";

class AuthenticationPage {
    constructor() {
        this.registeredEmailInput = Selector('#email');
        this.registeredPasswordInput = Selector('#passwd');
        this.signInButton = Selector('#SubmitLogin');    
    }
}

export default new AuthenticationPage();