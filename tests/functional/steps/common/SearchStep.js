const elementPath = require('../../../utils/elementPath');
const constants = require('../../../utils/constants');

module.exports = (browser) => {
  browser.setValue(elementPath.searchInput(), constants.query);
  browser.expect.element(elementPath.searchResult(0)).to.be.visible.after(500);
  browser.clearValue(elementPath.searchInput());
  browser.setValue(elementPath.searchInput(), ' ');
  browser.expect.element(elementPath.searchResult(0)).to.not.be.present.after(500);
};
