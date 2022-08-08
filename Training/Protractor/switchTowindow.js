describe('Non angular apps', () => {
  it('Test one', () => {
    browser.waitForAngularEnabled(false)
    browser.get('https://www.irctc.co.in/eticketing/errors.html#');
    element(by.linkText('Contact Us')).click();

    browser.getAllWindowHandles().then(function(windowIDs) {
      console.log(windowIDs[0] + " _ " + windowIDs[1]);
      browser.switchTo().window(windowIDs[1]);
      element.all(by.tagName('a')).each(function(link){
        link.getText().then(function(email){
            console.log(email);
        })
      })

      browser.switchTo().window(windowIDs[0]);
      element.all(by.tagName('a')).each(function(link){
        link.getText().then(function(email){
            console.log(email);
        })
      })
    })

   });
});