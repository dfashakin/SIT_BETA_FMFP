import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';
import SIT_Find_Location from '../Page-Objects/Pages/SIT_Find_Location'
import SIT_Application_Complete from '../Page-Objects/Pages/SIT_Application_Complete';
import SIT_Confirm_Location from '../Page-Objects/Pages/SIT_Confirm_Location'
import SIT_Flood_Risk_Assessment_Data from '../Page-Objects/Pages/SIT_Flood_Risk_Assessment_Data';
import SIT_Summary_Page from '../Page-Objects/Pages/SIT_Summary_Page';
var config = require('../main-config/config.js');




describe('Validate the functionality of the Find Location Page', () => {
	it('Validate the Display of the Find Location Page', () => {
		App.openHomepage();
		App.setWindowSize();
		SIT_Login.loginValidCredentials();
		browser.pause(5000);
		SIT_Flood_Risk_Planning.selectStartNowCommandButton();
		expect(browser).toHaveUrl('https://fmp-tst-alb.aws.defra.cloud/location');
		expect(browser).toHaveTitle('Flood map for planning - GOV.UK');
		
	});



	

	it('Validate that the Accessibility footer Link', () => {
		const accessibilityFooterLink = SIT_Login.accessibilityFooterLink;
		expect(accessibilityFooterLink).toBeDisplayed();
	
	});

	it('Validate that the Cookie Footer Link is Displayed', () => {
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

	it('Validate that the appropriate error message is displayed if the User enters an invalid postcode', () => {
		SIT_Find_Location.selectPlacePostcodeOptionButton();
		SIT_Find_Location.validatePostcodeEntry('');
		SIT_Find_Location.selectContinueCommandButton();
		const errorTextTitle = $("//h2[@id='error-summary-title']");
		expect(errorTextTitle).toHaveText('There is a problem');
		const placPostcodeErrorText = $('#placeOrPostcode-error');
		expect(placPostcodeErrorText).toBeDisplayed();
	});

	it('Validate that the Appropriate Error Message is displayed if an Invalid National Grid Reference Number is entered by the User', () => {
		SIT_Find_Location.selectNationalGridRefenceOptionButton();
		browser.pause(3000);
		SIT_Find_Location.validateInvalidNationalGridReferenceEntry();
		SIT_Find_Location.selectContinueCommandButton();
		const errorTextTitle = $('#error-summary-title');
		expect(errorTextTitle).toHaveText('There is a problem');
		const nationalridReferenceErrorText = $('#nationalGridReference-error');
		expect(nationalridReferenceErrorText).toBeDisplayed();
	});

	it('Validate that the Appropriate Error Message is displayed if an Invalid easting is entered by the User', () => {
		SIT_Find_Location.selectEastingNorthingOptionButton();
		SIT_Find_Location. eastingTextBoxDisplay();
		SIT_Find_Location.eastingTextBoxEntry('');
		SIT_Find_Location.northingTextBoxDisplay();
		SIT_Find_Location.northingTextBoxEntry('313135');
		SIT_Find_Location.selectContinueCommandButton();
		const errorTextTitle = $('#error-summary-title');
		expect(errorTextTitle).toHaveText('There is a problem');
		const eatingErrorText = $('#easting-error');
		expect(eatingErrorText).toBeDisplayed();
	});


	it('Validate that the Appropriate Error Message is displayed if an Invalid northing is entered by the User', () => {
		SIT_Find_Location.selectEastingNorthingOptionButton();
		SIT_Find_Location. eastingTextBoxDisplay();
		browser.pause(3000);
		SIT_Find_Location.eastingTextBoxEntry('365027');
		SIT_Find_Location.northingTextBoxDisplay();
		SIT_Find_Location.northingTextBoxEntry('');
		SIT_Find_Location.selectContinueCommandButton();
		const errorTextTitle = $('#error-summary-title');
		expect(errorTextTitle).toHaveText('There is a problem');
		const northingErrorText = $('#northing-error');
		expect(northingErrorText).toBeDisplayed();
	});

	

	it('Validate that the Appropriate Page is displayed if a Valid easting and Northing are entered by the User', () => {
		SIT_Find_Location.selectEastingNorthingOptionButton();
		browser.pause(3000);
		SIT_Find_Location.eastingTextBoxDisplay();
		SIT_Find_Location.eastingTextBoxEntry('347602');
		SIT_Find_Location.northingTextBoxDisplay();
		SIT_Find_Location.northingTextBoxEntry('483912');
		browser.pause(3000);
		const continueCommandButton = SIT_Find_Location.continueCommandButton;
		continueCommandButton.click();
        const confirmLocationMap = SIT_Application_Complete.confirmLocationMap;
		confirmLocationMap.waitForExist();
        const confirmContinueCommandButton = SIT_Confirm_Location.confirmLocationContinueCommandButton;
		confirmContinueCommandButton.waitForExist();
		confirmContinueCommandButton.click();
		browser.pause(8000);
    	const requestFloodRiskAssessmentData = SIT_Flood_Risk_Assessment_Data.requestFloodRiskAssessmentData;
		//const requestFloodRiskAssessmentData  = $("//div[@class='govuk-grid-row']/div[3]/div[2]/a[@role='button']");
		requestFloodRiskAssessmentData.click();
        browser.pause(8000);
        const fuillNameTextBox = SIT_Flood_Risk_Assessment_Data.fuillNameTextBox;
		fuillNameTextBox.waitForExist();
		fuillNameTextBox.setValue(config.nameEntry);
		const emailAddressTextBox = SIT_Flood_Risk_Assessment_Data.eMailAddressTextBox;
		emailAddressTextBox.setValue(config.emailEntry);
		const continueAssessmentCommandButton = SIT_Flood_Risk_Assessment_Data.continueAssessmentCommandButton;
		continueAssessmentCommandButton.waitForExist();
		continueAssessmentCommandButton.click();
		browser.pause(8000);
		SIT_Summary_Page.requestFloodRiskAssessmentData();
		browser.pause(5000);
	});
});
