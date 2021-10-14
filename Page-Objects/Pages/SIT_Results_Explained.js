

import Base from './Base'


class SIT_Results_Explained extends Base{

    get resultsExplainedTitleHeader(){

        return $("//div[@id='summary-page']/h1[@class='govuk-heading-xl']");

    }

    get whenNeedFloodRiskAssessmentHeader(){

        return $("//div[@id='summary-page']/div[3]/h2[1]");
    
    }
    //Add to Git Hub
    get nextStepsHeader(){

        return $("//div[@id='summary-page']/div[3]/a[@href='os-terms']/h2[1]");
        
    }

    //Add to git

    get floodRiskAssessmentHeader(){

        return $("//div[@id='summary-page']/div[3]/h2[1]");
    }

    get floodZoneText(){

        return $("//div[@id='summary-page']/div[1]/p[@class='govuk-body']");
    }

    get floodZonesExplainedHeader(){

        return $("//div[@id='summary-page']/div[3]/h2[3]");
    }

    //Add 
    get getHelpHeader(){

        return $("//div[@id='summary-page']/div[3]/h2[2]");
    
    }

    get contactYourLocalAuthorityText(){

        return $("//div[@id='summary-page']/div[3]/ul[2]/li[1]")


    }

    

    get contactYourLocalAuthorityTextZoneTwo(){

    
        return $("//div[@id='summary-page']//ul[@class='govuk-list govuk-list--bullet']//span[@class='govuk-!-font-weight-bold']")



    }

    get receiveReportText(){

        return $("//p[.='You should receive your data in 20 working days.']");

    }


  
}

export default new SIT_Results_Explained()

