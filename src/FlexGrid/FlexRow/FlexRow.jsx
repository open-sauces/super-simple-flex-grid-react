import React, { PropTypes } from 'react';
import classnames from 'classnames';

const FlexRow = ({ children, customClass }) => {
  const flexRowClass = classnames('flex-row', {
    [customClass]: customClass,
  });

  return (
    <div className={flexRowClass}>
      {children}
    </div>
  );
};

FlexRow.propTypes = {
  children: PropTypes.any,
  customClass: PropTypes.string,
};

export default FlexRow;
