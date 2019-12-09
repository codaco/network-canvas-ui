import { useContext } from 'react';
import { range } from 'lodash';
import DatePickerContext from './DatePickerContext';

const Years = ({ children }) => {
  const { onChange, date, min, max, set } = useContext(DatePickerContext);
  const years = range(min.year, max.year + 1);
  const props = {
    years,
    year: date.year,
    onChange,
    date,
    set,
  };
  return children(props);
};

export default Years;