import { DynamicTabDemoPage } from './app.po';

describe('dynamic-tab-demo App', function() {
  let page: DynamicTabDemoPage;

  beforeEach(() => {
    page = new DynamicTabDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
