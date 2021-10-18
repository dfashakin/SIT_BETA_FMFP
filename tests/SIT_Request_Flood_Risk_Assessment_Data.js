import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';
import SIT_Find_Location from '../Page-Objects/Pages/SIT_Find_Location'
import SIT_Confirm_Location from '../Page-Objects/Pages/SIT_Confirm_Location'
import SIT_Flood_Risk_Information from '../Page-Objects/Pages/SIT_Flood_Risk_Information'
import SIT_Flood_Risk_Assessment_Data from '../Page-Objects/Pages/SIT_Flood_Risk_Assessment_Data';
import SIT_Summary_Page from '../Page-Objects/Pages/SIT_Summary_Page';


describe('Validate the Request your Flood Risk Assessmen Data Functionality', () => {
	it('Validate Navigation to the Flood Risk Assessment Data Page', () => {
		App.openHomepage();
		App.setWindowSize();
		SIT_Login.loginValidCredentials();
		browser.pause(5000);
		SIT_Flood_Risk_Planning.selectStartNowCommandButton();
		SIT_Find_Location.selectPlacePostcodeOptionButton();
		SIT_Find_Location.validatePostcodeEntry('CW5 5US');
		SIT_Find_Location.selectContinueCommandButton();
        const confirmLocationMap = $("//div[@id='map']//canvas[@class='ol-unselectable']");
		confirmLocationMap.waitForExist();
		const confirmContinueCommandButton = SIT_Confirm_Location.confirmLocationContinueCommandButton;
		confirmContinueCommandButton.waitForExist();
		confirmContinueCommandButton.click();
		browser.pause(5000);
		const requestFloodRiskAssessmentData =SIT_Flood_Risk_Assessment_Data.requestFloodRiskAssessmentData;
		requestFloodRiskAssessmentData.click();
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



	it('Validate that the Flood Risk Assessment Data Page is rendered correctly', () => {
		const requestYourFloodRiskAssessmentDataTitle = SIT_Flood_Risk_Assessment_Data.requestYourFloodRiskAssessmentDataTitle;
		expect(requestYourFloodRiskAssessmentDataTitle).toHaveText('Request your flood risk assessment data');

	});

	it('Validate that the Full  Name Text Title is correctly displayed', () => {
		const fullNameText = SIT_Flood_Risk_Assessment_Data.fullNameText;
		expect(fullNameText).toHaveText('Full name');
		
	});

	it('Validate that the Email Address Text displays correctly on the Flood Risk Assessment Data Page', () => {
		const emailAddressText = SIT_Flood_Risk_Assessment_Data.emailAddressText;
		expect(emailAddressText).toHaveText('Email address');
		
	});

	
});

