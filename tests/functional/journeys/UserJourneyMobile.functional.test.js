const setupStep = require('../steps/mobile/SetupStepMobile');
const finishStep = require('../steps/common/FinishStep');
const onClickOutsideStep = require('../steps/common/OnClickOutsideStep');
const resultsStep = require('../steps/mobile/ResultsStepMobile');
const searchStep = require('../steps/common/SearchStep');

module.exports = {
  'Setup step': setupStep,
  'Search step': searchStep,
  'Results step': resultsStep,
  'On click ouside step': onClickOutsideStep,
  'Tear down': finishStep
};
