import Base from './Base'


class SIT_Application_Complete extends Base{

    get applicationCompleteTitle(){

        return $("//h1[@class='govuk-panel__title']");

    }

    get whatHappensNextTitleText() {
        return $("//div[@class='govuk-grid-column-two-thirds']/h2[1]");
    }

    get  helpAndAdviceTitle() {
        return $("//div[@class='govuk-grid-column-two-thirds']/h2[2]");
    } 

    get product5678Link() {
        return $("//a[@href='https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#get-information-to-complete-an-assessment']");
    }

    get contactEnvironmentAgencyLink(){
        
        return $("//a[@href='https://www.gov.uk/contact']")

    }

    get goBackFloodInformationLink(){
        return $("//a[@href='javascript:history.back()']");

    }

    get confirmLocationMap(){
        return $("//div[@id='map']//canvas[@class='ol-unselectable']");
    }
     
  
}

export default new SIT_Application_Complete()