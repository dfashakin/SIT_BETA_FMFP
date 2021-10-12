import Base from './Base'


class SIT_Confirm_Location extends Base{

    get confirmLocationPageTitle(){
        return $("//h1[@class='govuk-heading-xl']");
    }

    confirmationPageTitleDisplay(){
        this.confirmLocationPageTitle.waitForExist();
    }

    get forSmallResidentialDevelopments(){
        return $("//div[@class='govuk-grid-row']/div[2]/h2[1]");
    }

    get forLargerDevelopments() {
        return $("//div[@class='govuk-grid-row']/div[2]/h2[2]");

    }

    get warninIcon(){
        return $("//span[@class='govuk-warning-text__icon']");
    }

    get moveMarkerOptionButton(){
        return $("//input[@id='marker']");

    }

    get drawShapeOptionButton() {
        return $("//input[@id='polygon']");
    }

    get deleteShapeCommandButton(){
        return $('#deletePolygon');
    }

    get confirmLocationMapDisplay(){
        return $("//div[@id='map']//canvas[@class='ol-unselectable']");
        ////div[@id='map']//canvas[@class='ol-unselectable']
    }

    confirmMapDisplay(){

        this.confirmLocationMapDisplay.waitForExist();
    }

    get confirmLocationInstructionsDrawBoundary() {
        return $("//div[@id='confirm-location-page']//summary[@class='govuk-details__summary']")

    }



    confirmLocationInstructionsDrawBoundary(){
        this.confirmLocationMapDisplay.waitForExist();
        this.confirmLocationInstructionsDrawBoundary.click();
        this.confirmLocationInstructionsDrawBoundary.click();
        }



    clickContinueConfirmLocationMap(){
        this.confirmLocationMapDisplay.waitForExist();
        this.confirmLocationContinueCommandButton.waitForExist();
        this.confirmLocationContinueCommandButton.click();

    }

    selectDrawShapeOptionButton(){
       this.drawShapeOptionButton.click(); 
    }

    get confirmLocationContinueCommandButton(){
        return $("//a[@role='button']");

    }

    get adjustZoomNegativeConfirmLocationMap(){
        return $("//div[@id='map']/div[@class='ol-viewport']//button[@title='Zoom out']")
    }

    adjustZoomNegatveConfirmLocationMap(){
      
        for (var i=0; i < 11; i++){
        adjustZoomNegativeConfirmLocationMap.click();

        }
    }

    
}

export default new SIT_Confirm_Location()