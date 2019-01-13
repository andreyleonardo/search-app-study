/* eslint no-unused-expressions: 0 */
module.exports = (browser) => {
  browser.url('http://localhost:3000');
  browser.expect.element('body').to.be.visible;
};
