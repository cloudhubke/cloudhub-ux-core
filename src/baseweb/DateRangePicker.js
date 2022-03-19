import React from 'react';
import BaseWebDatePicker from './DatePicker';

const BaseWebDateRangePicker = (props) => (
  <BaseWebDatePicker
    range
    quickSelect
    placeholder="DD/MM/YYYY – DD/MM/YYYY"
    {...props}
  />
);

export default BaseWebDateRangePicker;
