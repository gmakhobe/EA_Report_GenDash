import { reactive } from "vue";

export const getScatterChartInformation = (data) => {
  const buyLossDataPoints = [];
  const sellLossDataPoints = [];
  const buyWinDataPoints = [];
  const sellWinDataPoints = [];
  const tradeDataPoints = [];
  let dataPointTemp = {};
  const dataPointsLength = data.length - 1;

  for (let counter = 0; counter <= dataPointsLength; counter++) {
    dataPointTemp = {
      x: counter + 1,
      y: data[counter].Duration
    };
    tradeDataPoints.push({
      id: counter + 1,
      type: data[counter].TradeType,
      duration: data[counter].Duration.toFixed(2),
      entry: data[counter].EntryPrice,
      stoploss: data[counter].StopLossPrice.toFixed(2),
      takeprofit: data[counter].TakeProfitPrice.toFixed(2),
      entrytime: data[counter].EntryTime,
      exittime: data[counter].ExitTime,
      results: data[counter].Type
    });

    if (data[counter].TradeType === "Buy") {

      if (data[counter].Type === "Win"){
        buyWinDataPoints.push(dataPointTemp);
      }else{
        buyLossDataPoints.push(dataPointTemp);
      }

    }else{

      if (data[counter].Type === "Loss"){
        sellWinDataPoints.push(dataPointTemp);
      }else{
        sellLossDataPoints.push(dataPointTemp);
      }

    }
  }

  const chartData = {
    datasets: [
      {
        label: 'Buy Winning Trades',
        fill: false,
        borderColor: '#16ff00',
        backgroundColor: '#16ff00',
        data: buyWinDataPoints
      },
      {
        label: 'Sell Winning Trades',
        fill: false,
        borderColor: '#0c4c00',
        backgroundColor: '#0c4c00',
        data: sellWinDataPoints
      },
      {
        label: 'Buy Losing Trades',
        fill: false,
        borderColor: '#ff0000',
        backgroundColor: '#ff0000',
        data: buyLossDataPoints
      },
      {
        label: 'Sell Losing Trades',
        fill: false,
        borderColor: '#ffe900',
        backgroundColor: '#ffe900',
        data: sellLossDataPoints
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true
  };

  const table = {
    isLoading: false,
    columns: [
      {
        label: "Trade ID",
        field: "id",
        sortable: true,
        isKey: true
      },
      {
        label: "Type",
        field: "type",
        sortable: true
      },
      {
        label: "Duration",
        field: "duration",
        sortable: true
      },
      {
        label: "Entry Price",
        field: "entry",
        sortable: true
      },
      {
        label: "Stop Loss",
        field: "stoploss",
        sortable: true
      },
      {
        label: "Take Profit",
        field: "takeprofit",
        sortable: true
      },
      {
        label: "Entry Time",
        field: "entrytime",
        sortable: true
      },
      {
        label: "Exit Time",
        field: "exittime",
        sortable: true
      },
      {
        label: "Results",
        field: "results",
        sortable: true
      }
    ],
    rows: tradeDataPoints,
    totalRecordCount: tradeDataPoints.length,
    sortable: {
      order: "id",
      sort: "asc"
    }
  };

  return {
    chartData,
    options,
    tableData: table
  }
};
