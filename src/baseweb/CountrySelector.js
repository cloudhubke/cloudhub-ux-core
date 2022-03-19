import React from 'react';
import BaseWebSelect from './StaticListSelector';
import countries from '../countrypicker/countries';

const CountrySelector = ({ ...props }) => (
  <BaseWebSelect
    options={countries}
    valueExtractor={(item) => item.name || item}
    labelExtractor={(item) => item.name || item}
    placeholder="Select Country"
    {...props}
  />
);

export default CountrySelector;
