describe('Non angular apps', () => {
  it('Test one', () => {
    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/droppable/');
    browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
    browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform();
    browser.sleep(1000);
  });
});