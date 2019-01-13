const setupStep = require('../steps/web/SetupStepWeb');
const finishStep = require('../steps/common/FinishStep');
const onClickOutsideStep = require('../steps/common/OnClickOutsideStep');
const resultsStep = require('../steps/web/ResultsStepWeb');
const searchStep = require('../steps/common/SearchStep');

module.exports = {
  'Setup step': setupStep,
  'Search step': searchStep,
  'Results step': resultsStep,
  'On click ouside step': onClickOutsideStep,
  'Tear down': finishStep
};
