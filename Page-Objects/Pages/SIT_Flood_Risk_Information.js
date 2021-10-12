import Base from './Base'


class SIT_Flood_Risk_Information extends Base{

    get selectedLocationsIcon(){
     
       return $("//img[@alt='Map marker icon']")
    }

    get floodZoneThreeIcon(){
       
        return $("//img[@alt='Icon showing what flood zone 3 looks like on the map.']")
    }

    get areasBenefittingFromDefencesIcon(){
        //return $("//aside[@id='legend']//ul/li[4]");
        return $("//img[@alt='Icon showing what an area benefiting from flood defences looks like on the map.']")
    }

    get floodZoneTwoIcon(){
       //return $("//aside[@id='legend']//ul/li[5]");
       return $("//img[@alt='Icon showing what flood zone 2 looks like on the map.']") 
    }

    get floodZoneOneIcon (){
       // return $("//aside[@id='legend']//ul/li[6]");
       return $("//img[@alt='Icon showing what flood zone 1 looks like on the map.']")
    }

    get floodDefenceIcon(){
        //return $("//aside[@id='legend']//ul/li[@class='line orange']");
        return $("//img[@alt='Icon showing what a flood defence looks like on the map.']")
    }

    get mainRiverSideIcon(){
        //return $("//ul/li[@class='image main-river']");
        return $("//img[@alt='Icon showing what a main river looks like on the map.']")
    }

    get floodStorageAreaSideIcon(){
        //return $("//aside[@id='legend']//ul/li[9]");
        return $("//img[@alt='Icon showing what a flood storage area looks like on the map.']")
    }

    get floodRiskThisLocationTitle(){

        return $("//h1[@class='govuk-heading-xl']");
    }

    get floodRiskWarningText(){
        return $('.govuk-warning-text__icon');
    }

    get findOutWhatThisMeansLink(){
        return $("//a[text()='Find out what this means, and what you should do next.']");
    }
    get checkRiskSurfaceWaterOtherSourcesLink(){
        //return $("//a[text()='Check the risk from surface water and other sources of flooding']");
        return $("//a[@href='https://flood-warning-information.service.gov.uk/long-term-flood-risk/map?easting=364780&northing=352583']")
    }

    get product5678Link(){
        return $("//a[@href='https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#get-information-to-complete-an-assessment']  ");
    }

    get repositionMarkerLink(){
        return $("//a[text()='Reposition the marker']");
    }

    get searchTheLocationLink(){
        return $("//a[text()='Search for a different location']");


    }
    
        
    


    

    

  








 

}

export default new SIT_Flood_Risk_Information()