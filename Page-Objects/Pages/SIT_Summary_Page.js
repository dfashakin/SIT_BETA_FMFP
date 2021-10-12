import Base from './Base'


class SIT_Summary_Page extends Base{

    get summaryPageTitle(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']//h1[@class='govuk-fieldset__heading']");

    }

    get receiveReportText(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/p[.='You should receive your data within 20 working days.']")

    }

    get nameFieldTextSummaryPage(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[1]/dt[@class='govuk-summary-list__key']")

    }

    get nameFieldChangeLink(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[1]/dd[@class='govuk-summary-list__actions']/a[@href='/contact?easting=364780&northing=352583&zone=3&polygon=&centerundefined&location=CW5 5US&zoneNumber=3&fullName=David Fashakin&recipientemail=fmfptestapi@gmail.com']");
        ////div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[1]/dd[@class='govuk-summary-list__actions']/a[@href='/contact?easting=364780&northing=352583&zone=3&polygon=&centerundefined&location=CW5 5US&zoneNumber=3&fullName= David Fashakin&recipientemail=fmfptestapi@gmail.com']
       
    }



    get eMailAddressChangeLink(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dd[@class='govuk-summary-list__actions']/a[@href='/contact?easting=364780&northing=352583&zone=3&polygon=&centerundefined&location=CW5 5US&zoneNumber=3&fullName= David Fashakin&recipientemail=fmfptestapi@gmail.com']");
        //div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dd[@class='govuk-summary-list__actions']/a[@href='/contact?easting=364780&northing=352583&zone=3&polygon=&centerundefined&location=CW5 5US&zoneNumber=3&fullName= David Fashakin&recipientemail=fmfptestapi@gmail.com']
        //div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dd[@class='govuk-summary-list__actions']/a[@href='/contact?easting=364780&northing=352583&zone=3&polygon=&centerundefined&location=CW5 5US&zoneNumber=3&fullName= David Fashakin&recipientemail=fmfptestapi@gmail.com']
    }

    get eMailAddressTextSummaryPage(){

        
        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dt[@class='govuk-summary-list__key']");
        //div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dt[@class='govuk-summary-list__key']
    }

    get eMailAddressChangeLink(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dd[@class='govuk-summary-list__actions']/a[@href='/contact?easting=364780&northing=352583&zone=3&polygon=&centerundefined&location=CW5 5US&zoneNumber=3&fullName=David Fashakin&recipientemail=fmfptestapi@gmail.com']");
        //div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dd[@class='govuk-summary-list__actions']/a[@href='/contact?easting=364780&northing=352583&zone=3&polygon=&centerundefined&location=CW5 5US&zoneNumber=3&fullName= David Fashakin&recipientemail=fmfptestapi@gmail.com']
    }

    get eMailAddressTextBox(){

        return $("//input[@id='recipientemail']")

    }

    get locationTextSummaryPage(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[3]/dt[@class='govuk-summary-list__key']")
    
    }

    get locationSummaryMapDisplay(){

        return $("//?/canvas[@safeclass~'\bol-unselectable\b']");

    }

    get locationChangeLink(){

       // return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']//a[@href='confirm-location?easting=364780&northing=352583&placeOrPostcode=CW5 5US&fullName= David Fashakin&recipientemail=fmfptestapi@gmail.com']")
       return $("//*/div/form/dl/div[3]/dd[2]/a");
       
 
    }

    get floodZoneTextSummaryPage(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[4]/dt[@class='govuk-summary-list__key']");
    }

    get floodZoneTextDisplayed(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[4]/dd[@class='govuk-summary-list__value']");

    }

    get nameTextDisplayed(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[1]/dd[@class='govuk-summary-list__value']");
    }

    get eMailTextDisplayed(){
        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dd[@class='govuk-summary-list__value']");

    }

    get floodZoneTextDisplayed(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[4]/dd[@class='govuk-summary-list__value']")
    }

    get summaryPageWarningIconDisplay(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']//span[@class='govuk-warning-text__icon']");
    }



    get summaryPageWarningTextDisplay(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']//strong[@class='govuk-warning-text__text']");
        //div[@id='application-review-summary-page']//form[@action='/application-review-summary']//strong[@class='govuk-warning-text__text']
    }

    get summaryPageFloodRiskAssessmentDataCommandButton(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/button[@class='govuk-button']");

    }

    get nameFieldSummaryPageTextDisplayed(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[1]/dd[@class='govuk-summary-list__value']");

    }

    get eMailFieldSummaryPageTextDisplayed(){

        return $("//div[@id='application-review-summary-page']//form[@action='/application-review-summary']/dl/div[2]/dd[@class='govuk-summary-list__value']");
    }

    get helpFooterLink(){

        return $("footer[@role='contentinfo']//ul[@class='govuk-footer__inline-list']//a[@href='https://www.gov.uk/help']");
    }

    clickHelpFooterLink(){
        this.helpFooterLink.waitForExist();
        this.helpFooterLink.click();

    }

    requestFloodRiskAssessmentData(){
    this.summaryPageFloodRiskAssessmentDataCommandButton.waitForExist();
    this.summaryPageFloodRiskAssessmentDataCommandButton.click();
    }

    changeNameFieldSummaryPage(){
        this.nameFieldChangeLink.waitForExist();
        this.nameFieldChangeLink.click();
}
    
  
}

export default new SIT_Summary_Page()
