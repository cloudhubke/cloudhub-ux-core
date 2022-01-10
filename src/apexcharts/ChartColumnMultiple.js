import React from 'react';
import merge from 'lodash/merge';
import uniq from 'lodash/uniq';
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
  filterItems = [],
}) {
  const groupItems = uniq(data.map((item) => item[groupItemIdentifier]));
  const groupIdentifiers = uniq(data.map((item) => item[groupIdentifier]));

  // console.log('====================================');
  // console.log(groupItems, groupIdentifiers);
  // console.log('====================================');

  const CHART_DATA = React.useMemo(
    () =>
      groupItems.map((groupItemValue) => ({
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
      })),
    [groupItems.length, groupIdentifiers.join(','), filterItems.join(',')]
  );

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

  const series = CHART_DATA.filter((item) => filterItems.includes(item.name));

  return (
    <ReactApexChart
      type="bar"
      series={series}
      options={chartOptions}
      height={320}
    />
  );
}
