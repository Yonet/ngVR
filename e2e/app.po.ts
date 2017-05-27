import { browser, by, element } from 'protractor';

export class NgVRPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ay-root h1')).getText();
  }
}
