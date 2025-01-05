export const getPieChartInformation = (labels, values) => {

  const chartOptions = {
    chart: {
      type: 'pie'
    },
    labels: labels,
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(2) + "%"
      }
    }
  };
  const series = values;

  return {
    chartOptions,
    series
  }
};
