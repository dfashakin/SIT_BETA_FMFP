import App from '../Page-Objects/Pages/App'
import SIT_Login from '../Page-Objects/Pages/SIT_Login';
import SIT_Flood_Risk_Planning from '../Page-Objects/Pages/SIT_Flood_Risk_Planning';


describe('Validate Get Flood Risk Information for Planning Page Functionality', () => {
	it('Open SIT BETA Homepage', () => {
		App.openHomepage();
		App.setWindowSize();
		browser.pause(2000);
		expect(browser).toHaveTitle('Login Page');
	});


	it('Should  Allow the User to Navigate to the Get Flood Risk Information for Planning Page', () => {
	
		SIT_Login.loginValidCredentials();
		browser.pause(3000);
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



	it('Should Allow the User to Navigate to the Contact the Environment Agency Page', () => {
		
		SIT_Flood_Risk_Planning.selectEnvironmentAgencyLink();
	    expect(browser).toHaveUrl('https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#contact');
    	expect(browser).toHaveTitle("Flood risk assessments if you're applying for planning permission - GOV.UK");
	   	browser.back();
    });
    
    /*it('Should Allow the User to Navigate to the Flood Risk Assessments for Planning Permission Page', () => {
		SIT_Flood_Risk_Planning.selectFloodRisksAssessmentsPlanningLink();
		expect(browser).toHaveTitle("Flood risk assessments if you're applying for planning permission - GOV.UK");
        browser.back();
        browser.pause(2000);
    });*/



    it('Should Allow the User to view Details of Help for Doing things Online', () => {
	SIT_Flood_Risk_Planning.selectNeedHelpDoingThingsOnlinelink();
		
    });


    it('Should Allow the User to navigate to the Find the Location Page', () => {
            const startNowCommandButton = $("//a[@role='button']");
            startNowCommandButton.waitForExist();
            startNowCommandButton.click();
            browser.pause(3000);
			expect(browser).toHaveUrl('https://fmp-tst-alb.aws.defra.cloud/location');
			expect(browser).toHaveTitle('Flood map for planning - GOV.UK');
		});

    

});