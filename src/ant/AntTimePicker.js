import React from 'react';
import AntTimePicker from 'antd/lib/time-picker';
import dayjs from 'dayjs';

import 'antd/lib/input/style/index.css';
import 'antd/lib/time-picker/style/index.css';

import './time-picker.css';

const TimePicker = ({ input, ...props }) => (
  <AntTimePicker
    onChange={this}
    getPopupContainer={(trigger) => trigger.parentNode}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
    {...input}
    {...props}
  />
);

TimePicker.defaultProps = {};

export default TimePicker;
