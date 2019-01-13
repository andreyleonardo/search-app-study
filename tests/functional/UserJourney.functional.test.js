/* eslint no-unused-expressions: 0 */

module.exports = {
  'Search Step': (browser) => {
    browser.url('http://localhost:3000');
    browser.expect.element('body').to.be.visible;
    browser.setValue('#search-input-id', 'berlin');
    browser.expect.element('#search_result-id-1').to.be.visible.after(500);
    browser.clearValue('#search-input-id');
    browser.setValue('#search-input-id', ' ');
    browser.expect.element('#search_result-id-1').to.not.be.present.after(500);
  },
  'Results Step': (browser) => {
    browser.setValue('#search-input-id', 'berlin');
    browser.expect.element('#search_result-id-1').text.to.contain('Skip the Line: Pergamon Museum Berlin Tickets');
    browser.click('#result_card_tour-id-1');
    browser.expect.element('.result_details_tour--expanded').to.be.visible.after(500);
    browser.expect.element('.result_details_tour--expanded').text.to.contain('Lorem ipsum');
    browser.end();
  }
};
