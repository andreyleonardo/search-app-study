const SEARCH_INPUT = '#search-input-id';
const SEARCH_RESULT = '#search-result-id-';
const RESULT_CARD = '#result-card-tour-id-';
const RESULT_DETAILS = '#result-details-tour-id-';
const RESULT_DETAILS_EXPANDED = '.result_details_tour--expanded';
const RESULT_DETAILS_IMG = '.result_details_tour__img';

const elementPath = {
  searchInput: () => SEARCH_INPUT,
  searchResult: position => `${SEARCH_RESULT}${position}`,
  resultCard: position => `${RESULT_CARD}${position}`,
  resultDetails: position => `${RESULT_DETAILS}${position}`,
  resultDetailsExpanded: position => `${RESULT_DETAILS}${position}${RESULT_DETAILS_EXPANDED}`,
  resultDetailsImg: position => `${RESULT_DETAILS}${position} ${RESULT_DETAILS_IMG}`
};

module.exports = elementPath;