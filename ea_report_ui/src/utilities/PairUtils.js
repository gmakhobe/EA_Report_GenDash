export const monthlychartOptions = {
    chart: {
      type: 'candlestick',
      background: '#000'
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#3C90EB',
          downward: '#DF7D46'
        }
      }
  },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    markers: {
      size: [6, 6, 6],
      strokeWidth: [2, 2, 2],
      shapes: 'circle',
      colors: ['#33cc33', '#0099ff', '#ff0055']
    }
};

export const groupPriceDataByMonth = (data) => {
  const groupedData = {};

  data.forEach(item => {
    const date = new Date(item.x);
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed (0 = January, 1 = February, etc.)

    const yearMonthKey = `${year}-${month.toString().padStart(2, '0')}`; // e.g., "2023-05" for May 2023

    if (!groupedData[yearMonthKey]) {
      groupedData[yearMonthKey] = [];
    }

    groupedData[yearMonthKey].push(item);
  });

  // Convert the grouped data object into an array of arrays
  return Object.values(groupedData);
}

export const groupEntryDataByMonth = (data, tradePositionIdentifierPoY) => {
  const groupedData = {};

  data.forEach(item => {
    const date = new Date(item.EntryTime);
    const year = date.getFullYear();
    const month = date.getMonth();
    const yearMonthKey = `${year}-${month.toString().padStart(2, '0')}`;
    let xCoordinateValue = 0;
    let yCoordinateValue = 0;
    let description = "";

    if (!groupedData[yearMonthKey]) {
      groupedData[yearMonthKey] = [];
    }

    if (tradePositionIdentifierPoY == "EntryPrice") {
      xCoordinateValue = item.EntryTime;
      yCoordinateValue = parseFloat(item.EntryPrice.toFixed(4));
      description = "Entries";
    }
    if (tradePositionIdentifierPoY == "StopLossPrice"){
      const stopLossValue = (parseFloat(item.StopLossPrice) * parseFloat(item.multiplier));
      const stopLoss = (item.TradeType == "Sell" ? parseFloat(item.EntryPrice) + parseFloat(stopLossValue) : parseFloat(item.EntryPrice) - parseFloat(stopLossValue));

      xCoordinateValue = item.EntryTime;
      yCoordinateValue = parseFloat(stopLoss.toFixed(4));
      description = "Stoploss";
    }

    if (tradePositionIdentifierPoY == "TakeProfitPrice"){
      const takeProfitValue = parseFloat(item.TakeProfitPrice) * parseFloat(item.multiplier);
      const takeProfit = (item.TradeType == "Sell" ? parseFloat(item.EntryPrice) - parseFloat(takeProfitValue) : parseFloat(item.EntryPrice) + parseFloat(takeProfitValue));
      
      xCoordinateValue = item.ExitTime;
      yCoordinateValue =  parseFloat(takeProfit.toFixed(4));
      description = "Takeprofit";
    }

    groupedData[yearMonthKey].push({
      x: xCoordinateValue,
      y: yCoordinateValue,
      type: item.TradeType,
      description
    });

  });

  return groupedData;
}
