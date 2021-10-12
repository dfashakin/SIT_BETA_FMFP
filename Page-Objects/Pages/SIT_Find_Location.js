import Base from './Base'


class SIT_Find_Location extends Base {

    get placePostcodeOptionButton(){
        return $('#findby')
    }
     
    selectPlacePostcodeOptionButton() {
      this.placePostcodeOptionButton.waitForExist();
      this.placePostcodeOptionButton.click();  
    }

    get placePostcodeTextBox () {

        return $('#placeOrPostcode')

    }

    placePostcodeTextBoxDisplay(){
        this.placePostcodeTextBox.waitForExist();
    }

    get errorTextTitle() {
        return $("//h2[@id='error-summary-title']")
    }

    get realPlaceOrPostcodeText() {

        return $("//a[@href='#placeOrPostcode']")
    }

    get nationalGridReferenceOptionButton() {

       return $ ("//div[@class='govuk-radios govuk-radios--conditional']/div[3]/input[@name='findby']");

    }

    selectNationalGridRefenceOptionButton() {
        this.nationalGridReferenceOptionButton.click();

    }

    get nationalGridReferenceTextBox() {
        return $("//input[@id='nationalGridReference']");
    }

    validateInvalidNationalGridReferenceEntry() {
        this.nationalGridReferenceTextBox.waitForExist();
        this.nationalGridReferenceTextBox.setValue('');

    }

    validateRealPlacePostcodeText(){
        expect(this.realPlaceOrPostcodeText).toHaveText('Enter a real place name or postcode')

    }

    get placePostcodeErrorText() {

        return $('#placeOrPostcode-error');

    }

    validatePostcodeEntry(value){
        this.placePostcodeTextBox.waitForExist();
        this.placePostcodeTextBox.setValue(value);
        
        
         }

    get backLink(){
        return $("//a[@href='javascript:history.back()']");
    }

    selectBackLink(){
        this.backLink.click();
    }

    validateErrorTextDisplay() {
        this.errorTextTitle.waitForExist();  
    }


    validatePlacePostcodeErrorText() {
        this.placePostcodeErrorText.waitForExist();

    }


    get continueCommandButton() {
        return  $("//main[@id='main-content']//button[@class='govuk-button']");

    }

    clickContinueCommandButton(){
        this.continueCommandButton.waitForExist();
        this.continueCommandButton.click()


    }

    selectContinueCommandButton() {
        this.continueCommandButton.click();
    }

    get eastingNorthingOptionButton(){
        return $("//main[@id='main-content']/form[@action='/location']//div[@class='govuk-radios govuk-radios--conditional']/div[5]/input[@name='findby']");
        
    }

    selectEastingNorthingOptionButton() {
        this.eastingNorthingOptionButton.click();

    }

    get eastingTextBox(){
        return $('#easting');
    }

    eastingTextBoxEntry(value){
        this.eastingTextBox.setValue(value);
        
    }

    eastingTextBoxDisplay(){
        this.eastingTextBox.waitForExist();
    }

    get northingTextBox() {
        return $('#northing');
    }
    
    northingTextBoxDisplay() {
        this.northingTextBox.waitForExist();
    } 
    
    northingTextBoxEntry(value){
        this.northingTextBox.setValue(value);
        
    }

    get nationalGridReferenceNumberOptionButton(){
        return $('#findby-2');
    }

    selectNationalGridOptionButton(){
        this.nationalGridReferenceNumberOptionButton.click();
    }

 

    get nationalGridReferenceNumberTextBox() {
        return $('#nationalGridReference');
    }

    nationalGridReferenceTextBoxDisplay() {
        this.nationalGridReferenceNumberTextBox.waitForExist();

    }

    nationalGridReferenceNumberEntry(value){
        this.nationalGridReferenceNumberTextBox.setValue(value);
    }




        

    
   

 

}

export default new SIT_Find_Location()