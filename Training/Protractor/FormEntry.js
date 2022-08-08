describe('Non angular apps', () => {
  it('Test one', () => {
    browser.waitForAngularEnabled(false)
    browser.get('http://formy-project.herokuapp.com/form');

    element(by.id('first-name')).sendKeys("Aravinda");
    element(by.id('last-name')).sendKeys("B ");
    element(by.id('job-title')).sendKeys("Trainer");
    element(by.xpath("//a[text()='Submit']")).click();
    browser.sleep(10000)

  });
});