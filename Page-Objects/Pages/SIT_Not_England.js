import Base from './Base'
class SIT_Not_England extends Base{
    get notInEnglandPageTitle(){

        return $("//main[@id='not-england-page']//h1[@class='heading-xlarge']");

    }

    get floodInformationNorthernIreland(){

        return $("//a[@href='https://www.nidirect.gov.uk/articles/check-the-risk-of-flooding-in-your-area']");

    }

    get floodInformationScotland(){

        return $("//a[@href='http://www.sepa.org.uk/environment/water/flooding']");

    }

    get floodInformationWales(){

        return $("//a[@href='https://naturalresources.wales']");


    }

    get floodInformationEngland(){

        return $("//main[@id='not-england-page']//a[@href='/']");


    }






}

export default new SIT_Not_England()

