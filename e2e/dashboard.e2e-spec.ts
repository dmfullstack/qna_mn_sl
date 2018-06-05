import { DashboardPage } from './dashboard.po';

describe('Should be able to see ', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
    page.navigateTo();
  });

  it('top 5 topics on dashboard', () => {
    expect(page.getDisplayedTopicsCount()).toEqual(5);
  });

  it('name, description and topic details link on a dashboard topic', () => {
    page.getFirstTopicName().then((name) => {
      expect(name).not.toBeNull();
    });
    page.getFirstTopicDescription().then((desc) => {
      expect(desc).not.toBeNull();
    });
    page.getFirstTopicDetailsLink().then((link) => {
      expect(link).not.toBeNull();
    });
  });
});
