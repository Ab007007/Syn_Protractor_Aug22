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

      //first Row firstColum
      element(by.repeater('result in memory').row(0)).
          getText().then(function(row){
            console.log(`First Row time : ${row}` );
      })
     //first Row firstColum
       element(by.repeater('result in memory').row(0).column('Time')).
       getText().then(function(time){
         console.log(`First Column Value : ${time}` );
       })
       element(by.repeater('result in memory').row(0).column('result.first')).
       getText().then(function(Expression){
         console.log(`Expression Column Value : ${Expression}` );
       })
       element(by.repeater('result in memory').row(0).column('result.value')).
       getText().then(function(Result){
         console.log(`Result Column Value : ${Result}` );
       })
   
    });
  });

