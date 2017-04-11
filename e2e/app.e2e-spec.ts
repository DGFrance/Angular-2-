import { AbisinkuotaPage } from './app.po';

describe('abisinkuota App', () => {
  let page: AbisinkuotaPage;

  beforeEach(() => {
    page = new AbisinkuotaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
