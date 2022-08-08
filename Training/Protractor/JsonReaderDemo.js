var testData = require("../Protractor/data/data.json")
var pageObjects = require("../Protractor/data/pageprops.json")
describe('Non angular apps- DDT', () => {
  it('Test one', () => {
    browser.waitForAngularEnabled(false)
    browser.get(testData.url);

    element(by.id(pageObjects.locators.formPage.fn_textBox)).sendKeys(testData.userdetails.firstname);
    element(by.id(pageObjects.locators.formPage.ln_textBox)).sendKeys(testData.userdetails.lastname);
    element(by.id(pageObjects.locators.formPage.jt_textBox)).sendKeys(testData.userdetails.jobtitle);
    element(by.xpath(pageObjects.locators.formPage.submit_button)).click();
    browser.sleep(10000)

  });
});