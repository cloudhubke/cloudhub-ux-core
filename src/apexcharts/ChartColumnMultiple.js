import React from 'react';
import { merge, uniq } from 'lodash';
import ReactApexChart from 'react-apexcharts';
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

// const CHART_DATA = [
//   { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
//   { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
// ];

export default function ChartColumnMultiple({
  data,
  name = 'Total',
  groupItemIdentifier = 'name',
  groupIdentifier,
  accumilator = 'Accumilator',
  value = 'Value',
  tooltipFormat = (val) => `${val}`,
}) {
  const groupItems = uniq(data.map((item) => item[groupItemIdentifier]));
  const groupIdentifiers = uniq(data.map((item) => item[groupIdentifier]));

  const CHART_DATA = groupItems.map((groupItemValue) => ({
    name: groupItemValue,
    data: groupIdentifiers.map((groupValue) => {
      const ind = data.findIndex(
        (i) =>
          i[groupIdentifier] === groupValue &&
          i[groupItemIdentifier] === groupItemValue
      );

      if (ind === -1) {
        return 0;
      }
      return data[ind][value];
    }),
  }));

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: {
      categories: groupIdentifiers,
    },
    tooltip: {
      y: {
        formatter: tooltipFormat,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return (
    <ReactApexChart
      type="bar"
      series={CHART_DATA}
      options={chartOptions}
      height={320}
    />
  );
}
