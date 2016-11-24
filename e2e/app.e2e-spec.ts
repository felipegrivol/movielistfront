import { MovielistfrontPage } from './app.po';

describe('movielistfront App', function() {
  let page: MovielistfrontPage;

  beforeEach(() => {
    page = new MovielistfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
