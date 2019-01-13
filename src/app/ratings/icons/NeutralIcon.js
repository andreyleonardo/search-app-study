import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../stylesheets/css/_colors.scss';

const NeutralIcon = ({
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
    <title>neutral</title>
    <path
      fill={fill}
      d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0 1.105 0.895 2 2 2s2-0.895 2-2-0.895-2-2-2-2 0.895-2 2zM20 10c0 1.105 0.895 2 2 2s2-0.895 2-2-0.895-2-2-2-2 0.895-2 2zM12 22h8v2h-8v-2z"
    />
  </svg>
);

NeutralIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

NeutralIcon.defaultProps = {
  fill: colors.primary,
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

export default NeutralIcon;
