import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';
import SIT_Find_Location from '../Page-Objects/Pages/SIT_Find_Location'
import SIT_Confirm_Location from '../Page-Objects/Pages/SIT_Confirm_Location'
import SIT_Flood_Risk_Information from '../Page-Objects/Pages/SIT_Flood_Risk_Information'
import SIT_Flood_Risk_Assessment_Data from '../Page-Objects/Pages/SIT_Flood_Risk_Assessment_Data';
import SIT_Application_Complete from '../Page-Objects/Pages/SIT_Application_Complete';
import SIT_Summary_Page from '../Page-Objects/Pages/SIT_Summary_Page';
var config = require('../main-config/config.js');

describe('Validate that the Application Complete Page is Displayed', () => {
	it('Validate Navigation to the Flood Risk Assessment Data Page', () => {
        App.openHomepage();
		App.setWindowSize();
        SIT_Login.loginValidCredentials();
		browser.pause(8000);
		SIT_Flood_Risk_Planning.selectStartNowCommandButton();
		SIT_Find_Location.selectNationalGridRefenceOptionButton();
		SIT_Find_Location.nationalGridReferenceTextBoxDisplay();
		SIT_Find_Location.nationalGridReferenceNumberEntry('TL 01745 03373');
		const continueCommandButton = SIT_Find_Location.continueCommandButton;
		continueCommandButton.click();
        const confirmLocationMap = SIT_Application_Complete.confirmLocationMap;
		confirmLocationMap.waitForExist();
        const confirmContinueCommandButton = SIT_Confirm_Location.confirmLocationContinueCommandButton;
		confirmContinueCommandButton.waitForExist();
		confirmContinueCommandButton.click();
		browser.pause(8000);
		const requestFloodRiskAssessmentData = SIT_Flood_Risk_Assessment_Data.requestFloodRiskAssessmentData;
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


    it('Validate that the correct page is Displayed if the product 5,6,7, and 8 Link is selected', () => {
        const product5678Link = SIT_Application_Complete.product5678Link;
        product5678Link.waitForExist();
        product5678Link.click();
        browser.pause(2000);
    	expect(browser).toHaveUrl('https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#get-information-to-complete-an-assessment');
    	expect(browser).toHaveTitle("Flood risk assessments if you're applying for planning permission - GOV.UK");
		//expect(browser).toHaveUrl('https://www.gov.uk/contact');
       // expect(browser).toHaveTitle("Find contact details for services - GOV.UK");
        browser.back();
      });





	
});








    
