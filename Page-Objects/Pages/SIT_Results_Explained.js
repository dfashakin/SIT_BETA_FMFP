//$("//*[text()='Find out what this means, and what you should do next.']");

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

    get floodRiskAssessmentHeaderZone1(){

        return $("//div[@id='summary-page']/div[3]/a[@href='os-terms']/h2[1]");
    }

    get floodZoneText(){

        return $("//div[@id='summary-page']/div[1]/p[@class='govuk-body']");
    }

    get floodZonesExplainedHeader(){

        return $("//div[@id='summary-page']/div[3]/h2[3]");
    }

    get floodRiskAssessmentHeaderZoneTwo(){

        return $("//div[@id='summary-page']/div[3]/a[@href='os-terms']/h2[1]")

    }


    get floodZone1ExplainedHeader(){
<<<<<<< HEAD

        return $("//div[@id='summary-page']/div[3]/h2[1]");

        
    }

=======

        return $("//div[@id='summary-page']/div[3]/h2[1]");

        
    }

>>>>>>> 4e3d6ccf3a1664657de4a873c02ae0d27d99478e
    //Add 
    get getHelpHeader(){

        return $("//div[@id='summary-page']/div[3]/h2[2]");
    
    }

    get contactYourLocalAuthorityTextZone1(){

        return $("//div[@id='summary-page']/div[3]/ul[@class='govuk-list govuk-list--bullet']//span[@class='govuk-!-font-weight-bold']")
       


    }

    

    get contactYourLocalAuthorityTextZoneTwo(){

    
        return $("//div[@id='summary-page']//ul[@class='govuk-list govuk-list--bullet']//span[@class='govuk-!-font-weight-bold']")



    }

    get receiveReportText(){

        return $("//p[.='You should receive your data in 20 working days.']");

    }

    get floodRiskAssessmentHeaderZoneTHree(){

        return $("//div[@id='summary-page']/div[3]/a[@href='os-terms']/h2[1]")

    }

 
<<<<<<< HEAD
=======
    get contactYourLocalAuthorityTextZone1(){

     return $("//div[@id='summary-page']/div[3]/ul[@class='govuk-list govuk-list--bullet']//span[@class='govuk-!-font-weight-bold']")
       


    }
>>>>>>> 4e3d6ccf3a1664657de4a873c02ae0d27d99478e


  
}

export default new SIT_Results_Explained()


