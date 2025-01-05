export const getLineChartInformation = (arrayBuyAndSellProfit, axisType) => {
  const arrayBuyAndSellProfitLength = arrayBuyAndSellProfit.length - 1;
  const BuyAndSellProfitXValues = [];
  const BuyAndSellProfitYValues = [];
  let previousNetReward = 0;
  let newNetReward = 0;

  for (let counter = 0; counter <= arrayBuyAndSellProfitLength; counter++) {
    const netReward = arrayBuyAndSellProfit[counter].net_reward;

    newNetReward = netReward + previousNetReward;


    if (axisType === "Y") {
      BuyAndSellProfitYValues.push(
        newNetReward
      );
    }
    if (axisType === "X") {
      BuyAndSellProfitXValues.push(
        arrayBuyAndSellProfit[counter].date
      );
    }

    previousNetReward = newNetReward;
  }

  if (axisType === "Y") {
    return [
      {
        name: "Data Point",
        data: BuyAndSellProfitYValues
      }
    ];
  }

  if (axisType === "X") {
    return {
      stroke: {
        curve: "straight"
      },
      markers: {
        size: 3
      },
      xaxis: {
        type: "datetime",
        categories: BuyAndSellProfitXValues
      },
      labels: {
        style: {
          colors: "#fff"
        }
      },
      title: {
        text: undefined,
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff"
        }
      }
    };
  }
}
