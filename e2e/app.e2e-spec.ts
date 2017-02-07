import { YoutubeComponentPage } from './app.po';

describe('youtube-component App', function() {
  let page: YoutubeComponentPage;

  beforeEach(() => {
    page = new YoutubeComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
