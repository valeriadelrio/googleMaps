import { GoogleMapsPage } from './app.po';

describe('google-maps App', () => {
  let page: GoogleMapsPage;

  beforeEach(() => {
    page = new GoogleMapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
