export const getBarChartInformation = (days, totalTrades, totalWinningTrades, totalLosingTrades) => {
  return {
    labels: days,
    datasets: [
      {
        label: "Total Trades",
        backgroundColor: "#7DAB48",
        data: totalTrades
      },
      {
        label: "Total Winning Trades",
        backgroundColor: "#9C1F40",
        data: totalWinningTrades
      },
      {
        label: "Total Losing Trades",
        backgroundColor: "#B1A429",
        data: totalLosingTrades
      }
    ]
  };
};

export const options = {
  responsive: false,
  maintainAspectRatio: false
};
