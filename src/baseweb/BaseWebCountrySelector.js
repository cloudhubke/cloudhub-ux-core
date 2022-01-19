import React from 'react';
import BaseWebSelect from './BaseWebSelect';
import countries from '../countrypicker/countries';

const CountrySelector = ({ ...props }) => (
  <BaseWebSelect
    options={countries}
    labelExtractor={(row) => (row && row.name ? row.name : `${row}`)}
    valueExtractor={(item) => item.name}
    placeholder="Select Country"
    {...props}
  />
);

export default CountrySelector;
