export class RouteTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('route-test-app p')).getText();
  }
}
