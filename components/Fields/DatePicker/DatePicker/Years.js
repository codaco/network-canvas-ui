import { useContext } from 'react';
import { range } from 'lodash';
import DatePickerContext from './DatePickerContext';

/**
 * Supplies `years` range based on min/max props.
 */
const Years = ({ children }) => {
  const { min, max } = useContext(DatePickerContext);
  const years = range(max.year, min.year - 1);
  return children({ years });
};

export default Years;
