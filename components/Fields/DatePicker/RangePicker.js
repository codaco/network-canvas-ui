import React from 'react';
import cx from 'classnames';
import { times } from 'lodash';

const RangePicker = ({
  type,
  range,
  value,
  onChange,
  format,
}) => {
  const classes = cx(
    'date-picker__range-picker',
    { [`date-picker__range-picker--${type}`]: !!type },
  );

  const offset = type !== 'year' ? 0 : range[0] % 5;
  const padding = times(
    offset,
    () => (<div className="date-picker__range-item" />),
  );

  return (
    <div className={classes}>
      {padding}
      {range.map((x) => {
        const itemStyle = cx(
          'date-picker__range-item',
          { 'date-picker__range-item--is-active': value === x },
        );
        return (
          <div
            className={itemStyle}
            onClick={() => onChange(x)}
          >
            <div className="date-picker__highlight">{format(x)}</div>
          </div>
        );
      })}
    </div>
  );
};

RangePicker.defaultProps = {
  format: x => x,
};

export default RangePicker;
