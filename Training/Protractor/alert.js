describe('Non angular apps', () => {
  it('Test one', () => {
    browser.waitForAngularEnabled(false)
    browser.get('http://formy-project.herokuapp.com/switch-window');
  
    element(by.id('alert-button')).click(); 

    browser.switchTo().alert().getText().then(function(text) {
      console.log(`TEXT ON ALERT ${text}`);
    })
    browser.switchTo().alert().accept();
  });
});