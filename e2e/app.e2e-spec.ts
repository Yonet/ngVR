import { NgVRPage } from './app.po';

describe('ng-vr App', () => {
  let page: NgVRPage;

  beforeEach(() => {
    page = new NgVRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ay works!');
  });
});
