// spec.js
function add(a,b,opt) {
  element(by.model('first')).sendKeys(a); 
  element(by.model('operator')).element(by.xpath(`//option[@value='${opt}']`)).click();
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
         
      add(10,20,"MULTIPLICATION");
      add(110,20,"ADDITION");
      add(10,230,"SUBTRACTION");
      add(10,201,"MODULO");

      element.all(by.repeater('result in memory')).count().then(
        function(numberofrows)
        {
            console.log(`Total number of ROWS ${numberofrows}`);
        }
      );

      //first Row firstColum
      element.all(by.repeater('result in memory')).
          getText().then(function(rows){
            let count = rows.length
            for (const row of rows) {
              console.log(`First Row time : ${row}` );
            }
      })
 
   
    });
  });

