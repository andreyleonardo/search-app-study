/* eslint no-unused-expressions: 0 */
module.exports = (browser) => {
  browser.windowSize('current', 375, 800);
  browser.url('http://localhost:3000');
  browser.expect.element('body').to.be.visible;
};
