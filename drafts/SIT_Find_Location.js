import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';
import SIT_Find_Location from '../Page-Objects/Pages/SIT_Find_Location'



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

	it('Validate that the Help Footer Link is Displayed', () => {
		const helpFooterLink = SIT_Login.helpFooterLink;
		helpFooterLink.waitForExist();
		expect(helpFooterLink).toBeDisplayed();
	
	});

	

	it('Validate that the Accessibility footer Link', () => {
		const accessibilityFooterLink = SIT_Login.accessibilityFooterLink;
		expect(accessibilityFooterLink).toBeDisplayed();
	
	});

	it('Validate that the Cookie Footer Link is Displayed', () => {
	const cookiesFooterLink = SIT_Login.cookiesFooterLink;
	 expect(cookiesFooterLink).toBeDisplayed();
	});

	it('Validate that the Privacy Policy Link is Displayed', () => {
		const privacyPolicyLink = SIT_Login.privacyPolicyLinkDisplay;
		 expect(privacyPolicyLink).toBeDisplayed();
		});


		it('Validate that the Terms and conditions Link is Displayed', () => {
			const termsAndConditionsLink = SIT_Login.termsAndConditionsLink;
			 expect(termsAndConditionsLink).toBeDisplayed();
			});	

		it('Validate that the Contact Link is Displayed', () => {
		const contactLink = SIT_Login.contactLink;
		expect(contactLink).toBeDisplayed();
		});
		
		it('Validate that the Privacy Notice Link is Displayed', () => {
			const privacyNoticeLink = SIT_Login.privacyNoticeLink;
			expect(privacyNoticeLink).toBeDisplayed();
		});
	
		it('Validate that the CymraegLink is Displayed', () => {
			const cymraegLink = SIT_Login.cymraegLink;
			expect(cymraegLink).toBeDisplayed();
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

	it('Validate that the appropriate Page is displayed if the User enters a valid postcode', () => {
		SIT_Find_Location.selectPlacePostcodeOptionButton();
		SIT_Find_Location.placePostcodeTextBoxDisplay();
		SIT_Find_Location.validatePostcodeEntry('CW5 5US');
		SIT_Find_Location.selectContinueCommandButton();
		browser.pause(3000);
		expect(browser).toHaveUrl(
			'https://fmp-tst-alb.aws.defra.cloud/confirm-location?easting=364780&northing=352583&placeOrPostcode=CW5%205US'
		);
		expect(browser).toHaveTitle('Flood map for planning - GOV.UK');
		SIT_Find_Location.selectBackLink();
	});

	it('Validate that the Appropriate Page is displayed if a valid National Grid Reference Number is entered by the User', () => {
		SIT_Find_Location.selectNationalGridRefenceOptionButton();
		SIT_Find_Location.nationalGridReferenceTextBoxDisplay();
		SIT_Find_Location.nationalGridReferenceNumberEntry('SJ6478052583');
		SIT_Find_Location.selectContinueCommandButton();
		browser.pause(3000);
		expect(browser).toHaveUrl(
			'https://fmp-tst-alb.aws.defra.cloud/confirm-location?easting=364780&northing=352583&nationalGridReference=SJ6478052583'
		);
		expect(browser).toHaveTitle('Flood map for planning - GOV.UK');
		SIT_Find_Location.selectBackLink();
	});

	it('Validate that the Appropriate Page is displayed if a Valid easting and Northing are entered by the User', () => {
		SIT_Find_Location.selectEastingNorthingOptionButton();
		browser.pause(3000);
		SIT_Find_Location.eastingTextBoxDisplay();
		SIT_Find_Location.eastingTextBoxEntry('365027');
		SIT_Find_Location.northingTextBoxDisplay();
		SIT_Find_Location.northingTextBoxEntry('352637');
		SIT_Find_Location.selectContinueCommandButton();
		browser.pause(3000);
		expect(browser).toHaveUrl(
			'https://fmp-tst-alb.aws.defra.cloud/confirm-location?easting=365027&northing=352637'
		);
		expect(browser).toHaveTitle('Flood map for planning - GOV.UK');
		const backSelectorLink = $("//a[@href='javascript:history.back()']");
		backSelectorLink.click();
	});
});
