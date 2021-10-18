import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
var config = require('../main-config/config.js');

describe('SIT BETA Homepage', () => {
it('Open SIT BETA Homepage', () => {
App.openHomepage();
SIT_Login.setWindowSize();
browser.pause(3000);
expect(browser).toHaveUrl(config.baseUrlLogin);
expect(browser).toHaveTitle('Login Page');
});



it('Validate that the Accessibility footer Link is Displayed', () => {
const accessibilityFooterLink = SIT_Login.accessibilityFooterLink;
expect(accessibilityFooterLink).toBeDisplayed();
});

it('Validate that the Cookies Footer Link is Displayed', () => {
const cookiesFooterLink = SIT_Login.cookiesFooterLink;
 expect(cookiesFooterLink).toBeDisplayed();
});




it('Validate that the Terms and conditions Link is Displayed', () => {
const termsAndConditionsLink = SIT_Login.termsAndConditionsLink;
 expect(termsAndConditionsLink).toBeDisplayed();
});	

	
		
it('Validate that the Privacy Notice Link is Displayed', () => {
const privacyNoticeLink = SIT_Login.privacyNoticeLink;
expect(privacyNoticeLink).toBeDisplayed();
});
	

it('Validate that the Built by the Environment Agency Link is Displayed', () => {
const builtByEnvironmentAgencyLink = SIT_Login.builtByEnvironmentAgencyLink;
expect(builtByEnvironmentAgencyLink).toBeDisplayed();
});

it('Validate that the Crown Copyright Icon is Displayed', () => {
const crownCopyrightLink = SIT_Login.crownCopyrightLink;
expect(crownCopyrightLink).toBeDisplayed();
});

it('Validate that the Open Government Licence Link is Displayed', () => {
const openGovernmentLicenceLink = SIT_Login.openGovernmentLicenceLink;
expect(openGovernmentLicenceLink).toBeDisplayed();
});


it('Should not Allow the User to log on with Invalid Credentials', () => {
//App.openHomepage();
browser.pause(3000);
SIT_Login.passwordTextBoxIsVisible();
SIT_Login.loginInvalidCredentials();
});


it('Should  Allow the User to log on with Valid Credentials', () => {
browser.pause(3000);
SIT_Login.passwordTextBoxIsVisible();
SIT_Login.loginValidCredentials();
browser.pause(6000);
		
});
	


});

