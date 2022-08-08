describe('Non angular apps', () => {
  it('Test one', () => {
    browser.waitForAngularEnabled(false)
    browser.get('http://formy-project.herokuapp.com/form');
    element(by.id('first-name')).sendKeys("test");






  });
});