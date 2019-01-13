const elementPath = require('../../../utils/elementPath');
const constants = require('../../../utils/constants');

const { query, tourTitle } = constants;
/* eslint no-unused-expressions: 0 */
module.exports = (browser) => {
  browser.setValue(elementPath.searchInput(), query);
  browser.expect.element(elementPath.searchResult(0)).text.to.contain(tourTitle);
  browser.click(elementPath.resultCard(0));
  browser.expect.element(elementPath.resultDetailsExpanded(0)).to.be.present.after(500);
  browser.expect.element(elementPath.resultDetailsImg(0)).to.be.visible;
  browser.expect.element(elementPath.resultDetailsExpanded(0)).text.to.contain(tourTitle);
  browser.expect.element(elementPath.resultDetailsExpanded(0)).text.to.contain('Lorem ipsum');
  browser.click(elementPath.resultCard(0));
  browser.expect.element(elementPath.resultDetailsExpanded(0)).to.not.be.present.after(500);
};
