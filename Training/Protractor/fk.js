describe('Non angular apps', () => {
  it('Test one', () => {
    browser.waitForAngularEnabled(false)
    browser.get('https://www.flipkart.com');
  
     var expectedConditions = protractor.ExpectedConditions;
     browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
     element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();

    browser.actions().mouseMove(element(by.xpath("//div[text()='More']"))).perform();
    browser.wait(expectedConditions.visibilityOf(element(by.xpath("//li[@class='_2NOVgj']"))));
    element.all(by.xpath("//li[@class='_2NOVgj']")).
    each(function(element, index) {
      // Will print 0 First, 1 Second, 2 Third.
      element.getText().then(function (text) {
        console.log(index, text);
      });
    });
  });
});