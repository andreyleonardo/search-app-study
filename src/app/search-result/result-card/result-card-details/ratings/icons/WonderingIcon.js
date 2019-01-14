import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../../../../stylesheets/css/_colors.scss';

const WonderingIcon = ({
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
    <title>wondering</title>
    <path
      fill={fill}
      d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM23.304 18.801l0.703 2.399-13.656 4-0.703-2.399zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2z"
    />
  </svg>
);

WonderingIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

WonderingIcon.defaultProps = {
  fill: colors.primarys,
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

export default WonderingIcon;
