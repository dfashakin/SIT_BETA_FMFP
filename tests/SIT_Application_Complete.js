import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';
import SIT_Find_Location from '../Page-Objects/Pages/SIT_Find_Location'
import SIT_Confirm_Location from '../Page-Objects/Pages/SIT_Confirm_Location'
import SIT_Flood_Risk_Information from '../Page-Objects/Pages/SIT_Flood_Risk_Information'
import SIT_Flood_Risk_Assessment_Data from '../Page-Objects/Pages/SIT_Flood_Risk_Assessment_Data';
import SIT_Application_Complete from '../Page-Objects/Pages/SIT_Application_Complete';
import SIT_Not_England from '../Page-Objects/Pages/SIT_Not_England';
import SIT_Summary_Page from '../Page-Objects/Pages/SIT_Summary_Page';
var config = require('../main-config/config.js');


describe('Validate that the Request Received is Displayed', () => {
	it.only('Validate Navigation to the Flood Risk Assessment Data Page', () => {
	App.openHomepage();
	App.setWindowSize();
	SIT_Login.loginValidCredentials();
	browser.pause(8000);
	SIT_Flood_Risk_Planning.selectStartNowCommandButton();
	SIT_Find_Location.selectPlacePostcodeOptionButton();
	SIT_Find_Location.validatePostcodeEntry(config.postcodeApplicationComplete);
	SIT_Find_Location.clickContinueCommandButton();
	SIT_Confirm_Location.clickContinueConfirmLocationMap();
	browser.pause(5000);
	SIT_Flood_Risk_Assessment_Data.clickFloodRiskAssessmentDataCommandButton();
	browser.pause(5000);
	SIT_Flood_Risk_Assessment_Data.enterFloodRiskAssessmentDataDetailsValidEntry();
	//SIT_Summary_Page.validateSummaryPageDetails();
	const summaryPageTitle = SIT_Summary_Page.summaryPageTitle;
	expect(summaryPageTitle).toHaveText('Check your details before requesting your data');
	const receiveReportText = SIT_Summary_Page.receiveReportText;
	expect(receiveReportText).toHaveText('You should receive your data within 20 working days.');
	 const fullNameText = SIT_Summary_Page.nameFieldTextSummaryPage;
	expect(fullNameText).toHaveText('Name');
	const eMailAddressTextSummaryPage = SIT_Summary_Page.eMailAddressTextSummaryPage
	expect(eMailAddressTextSummaryPage).toHaveText('Email address')
	const locationTextSummaryPage = SIT_Summary_Page.locationTextSummaryPage;
	expect(locationTextSummaryPage).toHaveText('Location');
	const floodZoneTextSummaryPage = SIT_Summary_Page.floodZoneTextSummaryPage;
	expect(floodZoneTextSummaryPage).toHaveText(config.floodZoneTextApplicationComplete);
	const nameTextDisplayed = SIT_Summary_Page.nameTextDisplayed;
	expect(nameTextDisplayed).toHaveText(config.nameEntry);
	const eMailTextDisplayed = SIT_Summary_Page.eMailTextDisplayed;
	expect(eMailTextDisplayed).toHaveText(config.emailEntry);
	const floodZoneTextDisplayed = SIT_Summary_Page.floodZoneTextDisplayed;
	expect(floodZoneTextDisplayed).toHaveText('3');
	const summaryPageWarningIconDisplay = SIT_Summary_Page.summaryPageWarningIconDisplay;
	expect(summaryPageWarningIconDisplay).toBeDisplayed();
	const summaryPageWarningTextDisplay = SIT_Summary_Page.summaryPageWarningTextDisplay;
	expect(summaryPageWarningTextDisplay).toBeDisplayed();
	SIT_Summary_Page.requestFloodRiskAssessmentData();
	browser.pause(5000);
	
});

	it('Validate that the Accessibility footer Link is Displayed', () => {
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


    it('Validate that the correct page is Displayed if the product 5,6,7, and 8 Link is selected', () => {
        //const product5678Link = SIT_Application_Complete.product5678Link;
		const product5678Link = $("//a[@href='https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#get-information-to-complete-an-assessment']")
        product5678Link.waitForExist();
        product5678Link.click();
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#get-information-to-complete-an-assessment');
        expect(browser).toHaveTitle("Flood risk assessments if you're applying for planning permission - GOV.UK");
        browser.back();
      });


    it('Validate that the correct page is displayed if the contact the environment agency Link is selected', () => {
        const contactEnvironmentAgencyLink = SIT_Application_Complete.contactEnvironmentAgencyLink;
        contactEnvironmentAgencyLink.waitForExist();
        contactEnvironmentAgencyLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.gov.uk/contact');
        expect(browser).toHaveTitle("Find contact details for services - GOV.UK");
        browser.pause(5000);
        browser.back();
		//browser.pause(90000);
		
      });

	  


	
});








    
