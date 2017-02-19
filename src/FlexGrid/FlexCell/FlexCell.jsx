import React, { PropTypes } from 'react';
import classnames from 'classnames';
import classList from 'super-simple-flex-grid/src/style.scss';

const testClassList = prop => ({
  center: 'test-center',
  centerH: 'test-center-h',
  centerV: 'test-center-v',
  startH: 'test-start-h',
  endH: 'test-end-h',
  startV: 'test-start-v',
  endV: 'test-end-v',
  spaceAround: 'test-space-around',
  spaceBetween: 'test-space-between',
  grow: `test-grow-${prop}`,
  shrink: 'test-shrink',
  ellipsis: 'test-ellipsis',
  noMargin: 'test-no-margin',
});

const FlexCell = ({
  children,
  customClass,
  center,
  centerH,
  centerV,
  startH,
  startV,
  endH,
  endV,
  spaceAround,
  spaceBetween,
  grow,
  shrink,
  ellipsis,
  noMargin,
}) => {
  const flexCellClass = 'flex-row__cell';
  const setClass = modifier => `${flexCellClass}--${modifier}`;

  const flexCellClassWithModifier = classnames(flexCellClass, {
    [customClass]: customClass,
    [setClass(classList.center       || testClassList().center)]: center,
    [setClass(classList.centerH      || testClassList().centerH)]: centerH,
    [setClass(classList.centerV      || testClassList().centerV)]: centerV,
    [setClass(classList.startH       || testClassList().startH)]: startH,
    [setClass(classList.endH         || testClassList().endH)]: endH,
    [setClass(classList.startV       || testClassList().startV)]: startV,
    [setClass(classList.endV         || testClassList().endV)]: endV,
    [setClass(classList.spaceAround  || testClassList().spaceAround)]: spaceAround,
    [setClass(classList.spaceBetween || testClassList().spaceBetween)]: spaceBetween,
    [setClass(`${classList.grow      || testClassList(grow).grow}`)]: grow,
    [setClass(classList.shrink       || testClassList().shrink)]: shrink,
    [setClass(classList.ellipsis     || testClassList().ellipsis)]: ellipsis,
    [setClass(classList.noMargin     || testClassList().noMargin)]: noMargin,
  });

  return (
    <div className={flexCellClassWithModifier}>
      {!ellipsis && children}
      {
        ellipsis &&
        <div className={`${flexCellClass}--${classnames(classList.ellipsisContent)}`}>
          {children}
        </div>
      }
    </div>
  );
};

FlexCell.propTypes = {
  customClass: PropTypes.string,
  children: PropTypes.any,
  center: PropTypes.bool,
  centerH: PropTypes.bool,
  centerV: PropTypes.bool,
  startH: PropTypes.bool,
  startV: PropTypes.bool,
  endH: PropTypes.bool,
  endV: PropTypes.bool,
  spaceAround: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  grow: PropTypes.number,
  shrink: PropTypes.bool,
  ellipsis: PropTypes.bool,
  noMargin: PropTypes.bool,
};

export { testClassList };
export default FlexCell;
