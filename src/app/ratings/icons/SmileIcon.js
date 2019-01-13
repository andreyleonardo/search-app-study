import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../stylesheets/css/_colors.scss';

const SmileIcon = ({
  fill,
  width,
  height,
  viewBox
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
  >
    <title>smile</title>
    <path
      fill={fill}
      d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z"
    />
  </svg>
);


SmileIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

SmileIcon.defaultProps = {
  fill: colors.primary,
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

export default SmileIcon;
