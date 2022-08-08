describe('Non angular apps', () => {
  it('Test one', () => {
    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/droppable/');
  
    browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform();
   
  });
});