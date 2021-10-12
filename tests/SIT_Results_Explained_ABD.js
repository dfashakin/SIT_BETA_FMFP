import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';
import SIT_Find_Location from '../Page-Objects/Pages/SIT_Find_Location'
import SIT_Confirm_Location from '../Page-Objects/Pages/SIT_Confirm_Location'
import SIT_Flood_Risk_Information from '../Page-Objects/Pages/SIT_Flood_Risk_Information'
import SIT_Flood_Risk_Assessment_Data from '../Page-Objects/Pages/SIT_Flood_Risk_Assessment_Data';
import SIT_Summary_Page from '../Page-Objects/Pages/SIT_Summary_Page';
import SIT_Results_Explained from '../Page-Objects/Pages/SIT_Results_Explained';


describe('Validate that the appropriate text is Displayed Results Explained Page Zone ABD Defences', () => {
    it('Validate Navigation to the Results Explained Page', () => {
        App.openHomepage();
		App.setWindowSize();
        SIT_Login.loginValidCredentials();
		browser.pause(5000);
		SIT_Flood_Risk_Planning.selectStartNowCommandButton();
		SIT_Find_Location.selectEastingNorthingOptionButton();
		browser.pause(3000);
		SIT_Find_Location.eastingTextBoxDisplay();
		SIT_Find_Location.eastingTextBoxEntry('553863');
		SIT_Find_Location.northingTextBoxDisplay();
		SIT_Find_Location.northingTextBoxEntry('313135');
		SIT_Find_Location.clickContinueCommandButton();
		browser.pause(8000);
		browser.pause(3000);
		SIT_Confirm_Location.clickContinueConfirmLocationMap();
		browser.pause(5000);
		const resultsExplainedLinkABD = SIT_Flood_Risk_Assessment_Data.resultsExplainedLinkABD;
        browser.pause(5000);
		resultsExplainedLinkABD.waitForExist();
		resultsExplainedLinkABD.click();
		const resultsExplainedTitleHeader = SIT_Results_Explained.resultsExplainedTitleHeader;
		resultsExplainedTitleHeader.waitForExist();
		expect(resultsExplainedTitleHeader).toHaveText("Your results explained");
		const whenNeedFloodRiskAssessmentHeader = SIT_Results_Explained.whenNeedFloodRiskAssessmentHeader;
		whenNeedFloodRiskAssessmentHeader.waitForExist();
		expect(whenNeedFloodRiskAssessmentHeader).toHaveText("Next steps");
		const floodZoneText = SIT_Results_Explained.floodZoneText;
		floodZoneText.waitForExist();
		expect(floodZoneText).toHaveText("Your development is in flood zone 3. It is also in an area that has some protection from flood defences.");
		const floodZonesExplainedHeader = SIT_Results_Explained.floodZonesExplainedHeader;
		floodZonesExplainedHeader.waitForExist();
		expect(floodZonesExplainedHeader).toHaveText("Getting a flood risk assessment");
		browser.pause(5000);
		const getHelpHeader = SIT_Results_Explained.getHelpHeader;
		getHelpHeader.waitForExist();
		expect(getHelpHeader).toHaveText("Get help");
		const contactYourLocalAuthorityText = SIT_Results_Explained.contactYourLocalAuthorityTextZoneTwo;
		contactYourLocalAuthorityText.waitForExist();
		expect(contactYourLocalAuthorityText).toHaveText("King's Lynn and West Norfolk");

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

	
	});
		





