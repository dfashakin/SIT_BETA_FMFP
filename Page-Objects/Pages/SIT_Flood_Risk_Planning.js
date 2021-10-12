import Base from './Base'


class SIT_Flood_Risk_Planning extends Base{

    get contactEnvironmentAgencyLink(){
        return $("//main[@id='main-content']//a[@href='https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#contact']");
       
    }

    selectEnvironmentAgencyLink() {
        this.contactEnvironmentAgencyLink.click();
    }


  get floodRisksAssessmentsPlanningLink(){
    return $("///main[@id='main-content']//a[@href='https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications?_ga=2.259503306.1978570411.1573555009-902236253.1554453719&_gac=1.182218197.1570532269.CjwKCAjw5_DsBRBPEiwAIEDRW7EfP37Wg2AzLlBkZNTpdinb3-amc1875cjdwiLaU-qXZCN8vsz9VhoC2QUQAvD_BwE#when-you-need-an-assessment']");
    
}

  selectFloodRisksAssessmentsPlanningLink(){

    this.floodRisksAssessmentsPlanningLink.click();

  }

  get floodInformationLink(){

    return $("//a[text() = 'flood information service']");
  }

  selectFloodInformationLink() {

    this.floodInformationLink.click();

  }

  get needHelpDoingThingsOnlinelink() {
    return $("//span[@class='govuk-details__summary-text']")
  }

  selectNeedHelpDoingThingsOnlinelink(){
    this.needHelpDoingThingsOnlinelink.click();
  }

  get getHelpOnlineText(){

    return $("//details[@class='govuk-details']/div[@class='govuk-details__text']")

  }

  selectHelpOnlineText(){
    expect(browser).toHaveText("For help getting flood risk data, contact the Environment Agency.Telephone: 03708 506 506m to 6pm");

  }

  get startNowCommandButton()
  {
    return $("//a[@role='button']");
  }

  selectStartNowCommandButton(){
    this.startNowCommandButton.waitForExist();
    this.startNowCommandButton.click();
	}



}

export default new SIT_Flood_Risk_Planning()