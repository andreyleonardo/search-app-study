import React from 'react';
import { inRange } from 'lodash';
import PropTypes from 'prop-types';
import HappyIcon from './icons/HappyIcon';
import SmileIcon from './icons/SmileIcon';
import NeutralIcon from './icons/NeutralIcon';
import WonderingIcon from './icons/WonderingIcon';
import SadIcon from './icons/SadIcon';
import colors from '../../../../../stylesheets/css/_colors.scss';

import './Ratings.scss';

const Ratings = ({ rating, children }) => (
  <div className="ratings">
    <span className="ratings__icon">
      {inRange(rating, 0, 1.1) && <SadIcon fill={colors.red} />}
      {inRange(rating, 1.1, 2.1) && <WonderingIcon fill={colors.orange} />}
      {inRange(rating, 2.1, 3.1) && <NeutralIcon fill={colors.yellow} />}
      {inRange(rating, 3.1, 4.1) && <SmileIcon fill={colors.blue} />}
      {inRange(rating, 4.1, 5.1) && <HappyIcon fill={colors.green} />}
    </span>
    {children && (
      <div className="ratings__children">
        { children }
      </div>
    )}
  </div>
);

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
  children: PropTypes.node
};

Ratings.defaultProps = {
  children: null
};

export default Ratings;
