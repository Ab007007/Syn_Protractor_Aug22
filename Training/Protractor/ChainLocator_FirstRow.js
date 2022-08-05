// spec.js
function add(a,b) {
  element(by.model('first')).sendKeys(a); 
  element(by.model('second')).sendKeys(b); 
  element(by.buttonText('Go!')).click();

  element(by.binding('latest')).getText().then(function(result)
  {
    console.log(`Sum of two numbers is ${result}`);
    
  });
}


describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
        browser.sleep(10000);
      });
         
      add(10,20);
      add(110,20);
      add(10,230);
      add(10,201);

      element.all(by.repeater('result in memory')).count().then(
        function(numberofrows)
        {
            console.log(`Total number of ROWS ${numberofrows}`);
        }
      );

      //first Row
      element.all(by.repeater('result in memory')).
        get(0).
        element(by.binding('result.timestamp')).
          getText().then(function(time){
            console.log(`First Row time : ${time}` );
      })
      
    });
  });

