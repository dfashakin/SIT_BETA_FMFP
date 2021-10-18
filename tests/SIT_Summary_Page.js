import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';
import SIT_Find_Location from '../Page-Objects/Pages/SIT_Find_Location'
import SIT_Confirm_Location from '../Page-Objects/Pages/SIT_Confirm_Location'
import SIT_Flood_Risk_Information from '../Page-Objects/Pages/SIT_Flood_Risk_Information'
import SIT_Flood_Risk_Assessment_Data from '../Page-Objects/Pages/SIT_Flood_Risk_Assessment_Data';
import SIT_Summary_Page from '../Page-Objects/Pages/SIT_Summary_Page';
var config = require('../main-config/config.js');


describe('Validate the functionality of the Flood Summary Page', () => {
    it('Validate Navigation to the Flood Summary Page', () => {
        App.openHomepage();
		App.setWindowSize();
        SIT_Login.loginValidCredentials();
		browser.pause(5000);
		SIT_Flood_Risk_Planning.selectStartNowCommandButton();
		SIT_Find_Location.selectPlacePostcodeOptionButton();
		SIT_Find_Location.validatePostcodeEntry('CW5 5US');
		SIT_Find_Location.clickContinueCommandButton();
		browser.pause(8000);
		SIT_Confirm_Location.clickContinueConfirmLocationMap();
		browser.pause(20000);
		SIT_Flood_Risk_Assessment_Data.clickFloodRiskAssessmentDataCommandButton();
        browser.pause(5000);
		SIT_Flood_Risk_Assessment_Data.enterFloodRiskAssessmentDataDetailsValidEntry();
        const summaryPageTitle = SIT_Summary_Page.summaryPageTitle;
		expect(summaryPageTitle).toHaveText('Check your details before requesting your data');
       	const receiveReportText = SIT_Summary_Page.receiveReportText;
		expect(receiveReportText).toHaveText('You should receive your data within 20 working days.');
       	const fullNameText = SIT_Summary_Page.nameFieldTextSummaryPage;
		expect(fullNameText).toHaveText('Name');
		browser.pause(5000);
		const eMailAddressTextSummaryPage = SIT_Summary_Page.eMailAddressTextSummaryPage
		expect(eMailAddressTextSummaryPage).toHaveText('Email address')
		const locationTextSummaryPage = SIT_Summary_Page.locationTextSummaryPage;
		expect(locationTextSummaryPage).toHaveText('Location');
		const floodZoneTextSummaryPage = SIT_Summary_Page.floodZoneTextSummaryPage;
		expect(floodZoneTextSummaryPage).toHaveText('Flood Zone');
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

    	
	it('Validate that the user can change the Name entered on the Summary Page', () => {
        browser.url('/');
        SIT_Login.loginValidCredentials();
	browser.pause(5000);
		SIT_Flood_Risk_Planning.selectStartNowCommandButton();
		SIT_Find_Location.selectPlacePostcodeOptionButton();
		SIT_Find_Location.validatePostcodeEntry('CW5 5US');
		SIT_Find_Location.clickContinueCommandButton();
		SIT_Confirm_Location.clickContinueConfirmLocationMap();
		browser.pause(8000);
		SIT_Flood_Risk_Assessment_Data.clickFloodRiskAssessmentDataCommandButton();
        browser.pause(8000);
		SIT_Flood_Risk_Assessment_Data.enterFloodRiskAssessmentDataDetailsValidEntry();
        browser.pause(8000);
        const nameFieldChangeLink = SIT_Summary_Page.nameFieldChangeLink;
        nameFieldChangeLink.waitForExist();
        nameFieldChangeLink.click();
        browser.pause(20000);
        const fullNameTextBox = SIT_Flood_Risk_Assessment_Data.fuillNameTextBox;
        fullNameTextBox.clearValue();
        fullNameTextBox.setValue('Fashakin');
        const continueAssessmentCommandButton =  SIT_Flood_Risk_Assessment_Data.continueAssessmentCommandButton;
        continueAssessmentCommandButton.click();
        browser.pause(8000);
        SIT_Summary_Page.requestFloodRiskAssessmentData();

        });

        it('Validate that the user can change the e Mail Address entered on the Summary Page', () => {
            browser.pause(8000);
            browser.url('/');
            SIT_Login.loginValidCredentials();
            browser.pause(5000);
            SIT_Flood_Risk_Planning.selectStartNowCommandButton();
            SIT_Find_Location.selectPlacePostcodeOptionButton();
            SIT_Find_Location.validatePostcodeEntry('CW5 5US');
            SIT_Find_Location.clickContinueCommandButton();
            SIT_Confirm_Location.clickContinueConfirmLocationMap();
            browser.pause(8000);
            SIT_Flood_Risk_Assessment_Data.clickFloodRiskAssessmentDataCommandButton();
            browser.pause(8000);
            SIT_Flood_Risk_Assessment_Data.enterFloodRiskAssessmentDataDetailsValidEntry();
            browser.pause(8000); 
            const eMailAddressChangeLink = SIT_Summary_Page.eMailAddressChangeLink;
            eMailAddressChangeLink.waitForExist();
            eMailAddressChangeLink.click();
            browser.pause(8000);
            const eMailAddressTextBox = SIT_Flood_Risk_Assessment_Data.eMailAddressTextBox;
            eMailAddressTextBox.waitForExist();
            eMailAddressTextBox.clearValue();
            eMailAddressTextBox.setValue('afashakin@hotmail.com');
            const continueAssessmentCommandButton =  SIT_Flood_Risk_Assessment_Data.continueAssessmentCommandButton;
            continueAssessmentCommandButton.click();
            browser.pause(8000);
            SIT_Summary_Page.requestFloodRiskAssessmentData();
    
            });

			it('Validate that the user can change the Name and Email Address entered on the Summary Page', () => {
				browser.url('/');
				SIT_Login.loginValidCredentials();
				browser.pause(5000);
				SIT_Flood_Risk_Planning.selectStartNowCommandButton();
				SIT_Find_Location.selectPlacePostcodeOptionButton();
				SIT_Find_Location.validatePostcodeEntry('CW5 5US');
				SIT_Find_Location.clickContinueCommandButton();
				SIT_Confirm_Location.clickContinueConfirmLocationMap();
				browser.pause(8000);
				SIT_Flood_Risk_Assessment_Data.clickFloodRiskAssessmentDataCommandButton();
				browser.pause(8000);
				SIT_Flood_Risk_Assessment_Data.enterFloodRiskAssessmentDataDetailsValidEntry();
				browser.pause(8000);
				const nameFieldChangeLink = SIT_Summary_Page.nameFieldChangeLink;
				nameFieldChangeLink.waitForExist();
				nameFieldChangeLink.click();
				browser.pause(20000);
				const fullNameTextBox = SIT_Flood_Risk_Assessment_Data.fuillNameTextBox;
				fullNameTextBox.clearValue();
				fullNameTextBox.setValue('Fashakin');
				const eMailAddressTextBox = SIT_Flood_Risk_Assessment_Data.eMailAddressTextBox;
				eMailAddressTextBox.waitForExist();
				eMailAddressTextBox.clearValue();
				browser.pause(8000);
				eMailAddressTextBox.setValue('afashakin@hotmail.com');
				const continueAssessmentCommandButton =  SIT_Flood_Risk_Assessment_Data.continueAssessmentCommandButton;
				continueAssessmentCommandButton.click();
				browser.pause(8000);
				SIT_Summary_Page.requestFloodRiskAssessmentData();
				});

			it('Validate that the user can change the location entered on the Summary Page', () => {
				browser.pause(8000);
				browser.url('/');
				SIT_Login.loginValidCredentials();
				browser.pause(5000);
				SIT_Flood_Risk_Planning.selectStartNowCommandButton();
				SIT_Find_Location.selectPlacePostcodeOptionButton();
				SIT_Find_Location.validatePostcodeEntry('CW5 5US');
				SIT_Find_Location.clickContinueCommandButton();
				SIT_Confirm_Location.clickContinueConfirmLocationMap();
				browser.pause(8000);
				SIT_Flood_Risk_Assessment_Data.clickFloodRiskAssessmentDataCommandButton();
				browser.pause(8000);
				SIT_Flood_Risk_Assessment_Data.enterFloodRiskAssessmentDataDetailsValidEntry();
				browser.pause(8000); 
				const locationChangeLink = SIT_Summary_Page.locationChangeLink;
				locationChangeLink.waitForExist();
				locationChangeLink.click();
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

	

		



});

