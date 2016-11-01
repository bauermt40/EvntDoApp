import { EvntDoAppPage } from './app.po';

describe('evnt-do-app App', function() {
  let page: EvntDoAppPage;

  beforeEach(() => {
    page = new EvntDoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
