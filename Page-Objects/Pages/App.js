import SIT_Login from "./SIT_Login";

class App {

    openHomepage() {
        browser.url('https://fmp-tst-alb.aws.defra.cloud');
        const clickCookieCommandButton = SIT_Login.cookieAnalyticsCommandButton;
        clickCookieCommandButton.click();
    }

    openHomepageNoCookies() {
        browser.url('https://fmp-tst-alb.aws.defra.cloud');
        
    }

    setWindowSize(){
        browser.setWindowSize(2100,1200);
    }
}

export default new App()


