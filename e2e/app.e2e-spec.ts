import { ToysAppFrondEndPage } from './app.po';

describe('toys-app-frond-end App', function() {
  let page: ToysAppFrondEndPage;

  beforeEach(() => {
    page = new ToysAppFrondEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
