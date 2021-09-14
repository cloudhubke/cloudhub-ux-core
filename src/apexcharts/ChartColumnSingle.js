import React from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

export default function ChartColumnSingle({
  data,
  name = 'Total',
  accumilator = 'Accumilator',
  value = 'Value',
  tooltipFormat = (val) => `${val}`,
}) {
  const CHART_DATA = [
    {
      name,
      data: data.map((item) =>
        typeof value === 'function'
          ? value(item)
          : item[value] || item[Object.keys(item)[0]]
      ),
    },
  ];

  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '16%' } },
    stroke: { show: false },
    xaxis: {
      categories: data.map((item) =>
        typeof accumilator === 'function'
          ? accumilator(item)
          : item[accumilator] || Object.keys(item)[0]
      ),
    },
    tooltip: {
      y: {
        formatter: tooltipFormat,
      },
    },
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
