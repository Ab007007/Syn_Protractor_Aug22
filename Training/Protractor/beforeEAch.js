var testData = require("../Protractor/data/data.json")
var pageObjects = require("../Protractor/data/pageprops.json")
var using = require('jasmine-data-provider');

function userdata() {
  return [  {"fn" : "aravinda1", "ln" : "HBB1" , "jt" : "SE"} , 
            {"fn" : "aravinda2", "ln" : "HBB2" , "jt" : "Trainer"} , 
            {"fn" : "aravinda3", "ln" : "HBB3" , "jt" : "Both"} ]
}


beforeEach(function(){
  browser.driver.manage().window().maximize();
  browser.waitForAngularEnabled(false)
  browser.get(testData.url);
})

describe('Non angular apps- DDT', () => {
  using(userdata,function(data) {     
            it('Test one', () => {
              element(by.id(pageObjects.locators.formPage.fn_textBox)).sendKeys(data.fn);
              element(by.id(pageObjects.locators.formPage.ln_textBox)).sendKeys(data.ln);
              element(by.id(pageObjects.locators.formPage.jt_textBox)).sendKeys(data.jt);
              element(by.xpath(pageObjects.locators.formPage.submit_button)).click();
              browser.sleep(10000)
            
            });

  })
 
});






