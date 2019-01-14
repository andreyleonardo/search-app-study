const elementPath = require('../../../utils/elementPath');
const constants = require('../../../utils/constants');

const {
  pageTitleEN,
  pageTitlePT
} = constants;
/* eslint no-unused-expressions: 0 */
module.exports = (browser) => {
  browser.expect.element(elementPath.headerTitle()).text.to.contain(pageTitleEN);
  browser.click(elementPath.languageSelector());
  browser.expect.element(elementPath.languageOptionEN()).to.be.visible.after(500);
  browser.expect.element(elementPath.languageOptionPT()).to.be.visible.after(500);
  browser.click(elementPath.languageOptionPT());
  browser.expect.element(elementPath.headerTitle()).text.to.contain(pageTitlePT).after(500);
  browser.click(elementPath.languageSelector());
  browser.expect.element(elementPath.languageOptionEN()).to.be.visible.after(500);
  browser.expect.element(elementPath.languageOptionPT()).to.be.visible.after(500);
  browser.click(elementPath.languageOptionEN());
  browser.expect.element(elementPath.headerTitle()).text.to.contain(pageTitleEN).after(500);
};
