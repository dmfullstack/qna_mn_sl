import { browser, by, element } from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getDisplayedTopicsCount() {
    return this.getAllTopicOnPage().count();
  }

  getAllTopicOnPage() {
    return element.all(by.css('app-topic-summary'));
  }

  getFirstTopic() {
    return this.getAllTopicOnPage().get(0);
  }

  getFirstTopicName() {
    return this.getFirstTopic().element(by.className('topic-name')).getText();
  }

  getFirstTopicDescription() {
    return this.getFirstTopic().element(by.className('topic-description')).getText();
  }

  getFirstTopicDetailsLink() {
    return this.getFirstTopic().element(by.className('view-topic-details')).getAttribute('href');
  }
}
