// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
        browser.sleep(10000);
      });
           
      element(by.model('first')).sendKeys(10); 
      element(by.model('second')).sendKeys(20); 
      element(by.buttonText('Go!')).click();

      element(by.binding('latest')).getText().then(function(result)
      {
        console.log(`Sum of two numbers is ${result}`);
        
      });

      expect(element(by.binding('latest')).getText()).toBe('30');
    });
  });

