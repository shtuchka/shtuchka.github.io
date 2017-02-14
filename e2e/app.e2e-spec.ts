import { ShtuchkaLenaPage } from './app.po';

describe('shtuchka-lena App', function() {
  let page: ShtuchkaLenaPage;

  beforeEach(() => {
    page = new ShtuchkaLenaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
