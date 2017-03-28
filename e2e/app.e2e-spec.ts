import { OhmReduxNgrxPage } from './app.po';

describe('ohm-redux-ngrx App', () => {
  let page: OhmReduxNgrxPage;

  beforeEach(() => {
    page = new OhmReduxNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
