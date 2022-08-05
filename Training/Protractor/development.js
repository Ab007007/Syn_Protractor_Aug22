// spec.js
function add(a,b,opt) {
  element(by.model('first')).sendKeys(a); 
  element(by.model('operator')).element(by.xpath(`//option[@value='${opt}']`)).click();
  element(by.model('second')).sendKeys(b); 
  element(by.buttonText('Go!')).click();
 
}


describe('Protractor Demo App', function() {
    it('Addition', function() {
      browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
        browser.sleep(10000);
      });
         
      add(110,20,"ADDITION");
      element(by.binding('latest')).getText().then(function(result)
      {
         console.log(`Sum of two numbers is ${result}`);
         expect(parseInt(result)).toBe(130);
      });
  });

    it('MULTIPLICATION Test', function() {
      browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
        browser.sleep(10000);
      });
    
      add(10,20,"MULTIPLICATION");
     
      element(by.binding('latest')).getText().then(function(result)
      {
         console.log(`Mul of two numbers is ${result}`);
         expect(parseInt(result)).toBe(200);
      });
    });

    
    it('SUBTRACTION Test', function() {
      browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
        browser.sleep(10000);
      });
    add(10,20,"SUBTRACTION");
    
      element(by.binding('latest')).getText().then(function(result)
      {
         console.log(`SUBTRACTION of two numbers is ${result}`);
         expect(parseInt(result)).toBe(-10);
      });
    });

    
    it('MODULO Test', function() {
      browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
        browser.sleep(10000);
      });
      add(10,20,"MODULO");
      
      element(by.binding('latest')).getText().then(function(result)
      {
         console.log(`MODULO of two numbers is ${result}`);
         expect(parseInt(result)).toBe(100);
      });
    });
  });

