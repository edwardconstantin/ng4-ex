import { AppPage } from './app.po';

describe('ng4-playground App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display brand name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ng4Playground');
  });
});
