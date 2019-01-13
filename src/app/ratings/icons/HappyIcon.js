import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../stylesheets/css/_colors.scss';

const HappyIcon = ({
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
    <title>happy</title>
    <path
      fill={fill}
      d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942s-9.544-4.371-10-9.947c2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3z"
    />
  </svg>
);

HappyIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

HappyIcon.defaultProps = {
  fill: colors.primary,
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

export default HappyIcon;
