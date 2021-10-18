import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';
import SIT_Find_Location from '../Page-Objects/Pages/SIT_Find_Location'
import SIT_Confirm_Location from '../Page-Objects/Pages/SIT_Confirm_Location'
import SIT_Flood_Risk_Information from '../Page-Objects/Pages/SIT_Flood_Risk_Information'
import SIT_Flood_Risk_Assessment_Data from '../Page-Objects/Pages/SIT_Flood_Risk_Assessment_Data';
import SIT_Summary_Page from '../Page-Objects/Pages/SIT_Summary_Page';
import SIT_Results_Explained from '../Page-Objects/Pages/SIT_Results_Explained';


describe('Validate that the appropriate text is Displayed Results Explained Page in Zone 2', () => {
    it('Validate Navigation to the Results Explained Page', () => {
        App.openHomepage();
		App.setWindowSize();
        SIT_Login.loginValidCredentials();
		browser.pause(5000);
		SIT_Flood_Risk_Planning.selectStartNowCommandButton();
		SIT_Find_Location.selectPlacePostcodeOptionButton();
		SIT_Find_Location.validatePostcodeEntry('AL1 1XU');
		SIT_Find_Location.clickContinueCommandButton();
		browser.pause(8000);
		SIT_Confirm_Location.clickContinueConfirmLocationMap();
		browser.pause(5000);
		const resultsExplainedLinkZoneTwo = SIT_Flood_Risk_Assessment_Data.resultsExplainedLinkZoneTwo;
        browser.pause(5000);
		resultsExplainedLinkZoneTwo.waitForExist();
		resultsExplainedLinkZoneTwo.click();
		const resultsExplainedTitleHeader = SIT_Results_Explained.resultsExplainedTitleHeader;
		resultsExplainedTitleHeader.waitForExist();
		expect(resultsExplainedTitleHeader).toHaveText("Your results explained");
		const floodRiskAssessmentHeaderZoneTwo = SIT_Results_Explained.floodRiskAssessmentHeaderZoneTwo;
		floodRiskAssessmentHeaderZoneTwo.waitForExist();
		expect(floodRiskAssessmentHeaderZoneTwo).toHaveText("Next steps");
		const floodZoneText = SIT_Results_Explained.floodZoneText;
		floodZoneText.waitForExist();
		expect(floodZoneText).toHaveText("Because your development is in flood zone 2, it has medium probability of flooding. This means you’ll need to do a flood risk assessment as part of your planning application.");
		const getHelpHeader = SIT_Results_Explained.getHelpHeader;
		getHelpHeader.waitForExist();
		expect(getHelpHeader).toHaveText("Get help");
		const contactYourLocalAuthorityText = SIT_Results_Explained.contactYourLocalAuthorityTextZoneTwo;
		contactYourLocalAuthorityText.waitForExist();
		expect(contactYourLocalAuthorityText).toHaveText("St Albans");

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

	
	});
		





