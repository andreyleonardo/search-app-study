const elementPath = require('../../../utils/elementPath');
const constants = require('../../../utils/constants');

const { query } = constants;
/* eslint no-unused-expressions: 0 */
module.exports = (browser) => {
  browser.clearValue(elementPath.searchInput());
  browser.setValue(elementPath.searchInput(), query);
  browser.click(elementPath.resultCard(0));
  browser.expect.element(elementPath.resultDetailsExpanded(0)).to.be.present.after(500);
  browser.expect.element(elementPath.resultDetailsExpanded(1)).to.not.be.present.after(500);
  browser.getLocationInView(elementPath.resultCard(1), (result) => {
    browser.moveToElement(elementPath.resultCard(1), result.value.x, result.value.y);
  });
  browser.waitForElementVisible(elementPath.resultCard(1), 1000);
  browser.click(elementPath.resultCard(1));
  browser.expect.element(elementPath.resultDetailsExpanded(0)).to.not.be.present.after(500);
  browser.expect.element(elementPath.resultDetailsExpanded(1)).to.be.present.after(500);
  browser.end();
};
