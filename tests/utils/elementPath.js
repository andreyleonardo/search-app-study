const SEARCH_INPUT = '#search-input-id';
const SEARCH_RESULT = '#search-result-id-';
const RESULT_CARD = '#result-card-id-';
const RESULT_DETAILS = '#result-details-id-';
const RESULT_DETAILS_EXPANDED = '.result_details--expanded';
const RESULT_DETAILS_IMG = '.result_details__img';
const LANGUAGE_SELECTOR = '#language-selector-id';
const LANGUAGE_OPTION_PT = '#pt';
const LANGUAGE_OPTION_EN = '#en';
const HEADER_TITLE = '#header-title-id';

const elementPath = {
  searchInput: () => SEARCH_INPUT,
  searchResult: position => `${SEARCH_RESULT}${position}`,
  resultCard: position => `${RESULT_CARD}${position}`,
  resultDetails: position => `${RESULT_DETAILS}${position}`,
  resultDetailsExpanded: position => `${RESULT_DETAILS}${position}${RESULT_DETAILS_EXPANDED}`,
  resultDetailsImg: position => `${RESULT_DETAILS}${position} ${RESULT_DETAILS_IMG}`,
  languageSelector: () => LANGUAGE_SELECTOR,
  languageOptionPT: () => LANGUAGE_OPTION_PT,
  languageOptionEN: () => LANGUAGE_OPTION_EN,
  headerTitle: () => HEADER_TITLE
};

module.exports = elementPath;
