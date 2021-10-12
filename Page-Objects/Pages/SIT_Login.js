import Base from './Base'
class SIT_Login extends Base{

    get userNameTextBox(){
        return $('#username');
    }

    get passwordTextBox() {
        return $('#password');
    }

    get loginCommandButton() {
        return $('.govuk-button');   
    }

    get cookieCloseCommandButton() {
        return $("//button[@id='close-global-cookie-message']")
    }

    get loginPageTitle() {
        return $("//h1[@class='govuk-fieldset__heading']");
    }

    get userNameTextTitle() {
        return $("//div[1]/label[@class='govuk-label govuk-label--m']");
    }

    get passwordTextTitle() {
        return $("//div[2]/label[@class='govuk-label govuk-label--m']");
    }

    get loginCommandButton() {

        return $("//button[@type='submit']");
    }

    get cookieAnalyticsCommandButton(){
        return $("//div[@role='region']/div[@class='govuk-cookie-banner__message govuk-width-container js-question-banner']/div[@class='govuk-button-group']/button[1]")
    }


    usernameTextBoxIsVisible() {
    this.userNameTextBox.waitForExist();

    }

    passwordTextBoxIsVisible() {
    this.passwordTextBox.waitForExist();
    }

    setWindowSize(){
        browser.setWindowSize(1800,1200);
    }

    loginInvalidCredentials(){
        this.userNameTextBox.setValue('invalid');
        this.passwordTextBox.setValue('invalid');
        this.loginCommandButton.click();
        expect(browser).toHaveUrl('https://fmp-tst-alb.aws.defra.cloud/');
		expect(browser).toHaveTitle('Login Page');
    }


    loginValidCredentials(){
        this.userNameTextBox.setValue('fmfp');
        this.passwordTextBox.setValue('product4');
        this.loginCommandButton.click();
        //expect(browser).toHaveUrl('https://fmp-tst-alb.aws.defra.cloud/home');
		expect(browser).toHaveTitle(
			'Find out if you need a Flood Risk Assessment (FRA) and get flood maps for a planning application'
		);
    }

    loginValidCredentialsWithoutCookie(){
        this.userNameTextBox.setValue('fmfp');
        this.passwordTextBox.setValue('product4');
        this.loginCommandButton.click();
        expect(browser).toHaveUrl('https://fmp-tst-alb.aws.defra.cloud/home');
		expect(browser).toHaveTitle(
			'Find out if you need a Flood Risk Assessment (FRA) and get flood maps for a planning application'
		);
    }


    loginValidFloodRiskCredentials(){
        this.userNameTextBox.setValue('fmfp');
        this.passwordTextBox.setValue('product4');
        this.loginCommandButton.click();
        expect(browser).toHaveUrl('https://fmp-tst-alb.aws.defra.cloud/home');
		expect(browser).toHaveTitle(
			'Find out if you need a Flood Risk Assessment (FRA) and get flood maps for a planning application'
		);
    }

    get helpFooterLink(){
        return $("//a[@href='https://www.gov.uk/help']");
    }

    get cookiesFooterLink(){
        return $("//ul[@class='govuk-footer__inline-list']//a[@href='/cookies']");
    }

    get accessibilityFooterLink(){
        return $("//ul[@class='govuk-footer__inline-list']//a[@href='/accessibility']")
    }

    get privacyPolicyLinkDisplay(){
        return $("//a[@href='/privacy-policy']");
    }

    get termsAndConditionsLink(){
        return $("//a[@href='/terms-conditions']");
}

    get contactLink(){
        return $("//a[@href='https://www.gov.uk/contact']");
    }

    get privacyNoticeLink(){
     return $("//a[@href='/privacy-notice']");   
    }

    get cymraegLink(){
        return $("//a[@href='https://www.gov.uk/cymraeg']");   
       }

    get builtByEnvironmentAgencyLink(){
        return $("//a[@href='https://www.gov.uk/government/organisations/environment-agency']")
    }
    
    get openGovernmentLicenceLink(){
        return $("//a[@href='https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/']");

    }

    get crownCopyrightLink(){
        return $("//a[@href='https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/']");
    }
}

export default new SIT_Login()