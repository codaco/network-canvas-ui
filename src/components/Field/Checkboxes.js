import React from 'react';
import { map } from 'lodash';

/**
  * A list of checkboxes, not intended for direct use
  */
const Checkboxes = ({ name, options, onClickOption }) => (
  <div>
    {map(options, (value, option) => (
      <div key={option}>
        <label htmlFor={`${name}_${option}`}>
          <input
            type="checkbox"
            id={`${name}_${option}`}
            name={name}
            value={option}
            checked={value}
            onClick={() => { onClickOption(option); }}
          /> {option}
        </label>
      </div>
    ))}
  </div>
);

export default Checkboxes;
