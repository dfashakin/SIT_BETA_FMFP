import Base from './Base'


class SIT_Flood_Risk_Assessment_Data extends Base{

    get selectedLocationsIcon(){
        return $("//ul/li[@class='image pin']");
    }
    get requestYourFloodRiskAssessmentDataTitle(){
        return $("//h1[@class='govuk-fieldset__heading']");
    }

    get fullNameText(){
     return $("//form[@action='/contact']//label[1]");
    }

    get emailAddressText(){
        return $("div:nth-of-type(2) > .govuk-label.govuk-label--m");
    }

    get fuillNameTextBox(){
        return $("#fullName");
      
    }

    get eMailAddressTextBox() {
       // return $("//input[@id='recipientemail']");
       return $("//input[@id='recipientemail']")

    }

    get continueAssessmentCommandButton(){
        return $("//div/main[@id='main-content']//form[@action='/contact']/button[@class='govuk-button']");
    }

    get requestFloodRiskAssessmentData(){
       return $("//div[@id='summary-page']/div[3]/div[2]/a[@role='button']");
        }

    get floodRiskAssessmentDataMap(){

        return $("//div[@id='map']//canvas[@class='ol-unselectable']");

    }

    get continueRequestFloodRiskAssessmentData(){

        return $("//div[@id='contact-page']//form[@action='/contact']/button[@class='govuk-button']");

    }

    get resultsExplainedLink(){

        //return $("//*[text()='Find out what this means, and what you should do next.']");
        return $("//div[@id='summary-page']//a[@href='/flood-zone-results-expanded?easting=364922&northing=435312&zone=FZ1&polygon=&center&location=PL3 3YE&zoneNumber=1&fullName= &recipientemail= ']")
    }

    get resultsExplainedLinkZoneTwo(){

        return $("//div[@id='summary-page']//a[@href='/flood-zone-results-expanded?easting=514601&northing=206553&zone=FZ2&polygon=&center&location=AL1 1XU&zoneNumber=2&fullName= &recipientemail= ']")
    }

    get resultsExplainedLinkZoneThree(){

        return $("//div[@id='summary-page']//a[@href='/flood-zone-results-expanded?easting=364780&northing=352583&zone=FZ3&polygon=&center&location=CW5 5US&zoneNumber=3&fullName= &recipientemail= ']")
    }

    get resultsExplainedLinkABD(){

        return $("//div[@id='summary-page']//a[@href='/flood-zone-results-expanded?easting=553863&northing=313135&zone=FZ3a&polygon=&center&location=553863 313135&zoneNumber=3 in an area benefitting from flood defences&fullName= &recipientemail= ']")
    }

    clickResultsExplainedLink(){
        this.resultsExplainedLink.waitForExist();
        this.resultsExplainedLink.click();

    }

    clickFloodRiskAssessmentDataCommandButton(){
        this.floodRiskAssessmentDataMap.waitForExist();
        this.requestFloodRiskAssessmentData.waitForExist();
        this.requestFloodRiskAssessmentData.click();
       

    }

    enterFloodRiskAssessmentDataDetailsValidEntry(){
        this.fuillNameTextBox.waitForExist()
        this.fuillNameTextBox.setValue('David Fashakin');
        this.eMailAddressTextBox.waitForExist();
        this.eMailAddressTextBox.setValue('fmfptestapi@gmail.com');
        this.continueRequestFloodRiskAssessmentData.click();
 }

    changeNameFieldFloodRiskAssessmentData(){
        this.fuillNameTextBox.waitForExist()
        this.fuillNameTextBox.setValue('Fashakin');
        browser.pause(3000);
        this.continueAssessmentCommandButton.click();
        

    }


  
}

export default new SIT_Flood_Risk_Assessment_Data()