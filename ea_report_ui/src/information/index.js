import { PRICE } from "./20250123TEST1_EURUSD24/Price.json";
import { PROFIT_BUYANDSELL } from "./20250123TEST1_EURUSD24/1.line_buy_and_sell_eurusd.json";
import { PROFIT_BUY } from "./20250123TEST1_EURUSD24/1.line_buy_eurusd.json";
import { PROFIT_SELL } from "./EURUSD/1.line_sell_eurusd.json";
import {
  total_trades as buyAndSellTotalTrades,
  average_trades_per_month as buyAndSellAverageTradesPerMonth,
  average_trades_per_quarter as buyAndSellAverageTradesPerQuarter,
  average_trades_per_semester as buyAndSellAverageTradesPerSemester,
  week_day_trades as buyAndSellWeekDayTrades,
  winning_and_losing_trades as buyAndSellWinningAndLosingTrades
} from "./EURUSD/2.bar_chart_buy_and_sell_eurusd.json";
import {
  total_trades as sellTotalTrades,
  average_trades_per_month as sellAverageTradesPerMonth,
  average_trades_per_quarter as sellAverageTradesPerQuarter,
  average_trades_per_semester as sellAverageTradesPerSemester,
  week_day_trades as sellWeekDayTrades,
  winning_and_losing_trades as sellWinningAndLosingTrades
} from "./EURUSD/2.bar_chart_sell_eurusd.json";
import {
  total_trades as buyTotalTrades,
  average_trades_per_month as buyAverageTradesPerMonth,
  average_trades_per_quarter as buyAverageTradesPerQuarter,
  average_trades_per_semester as buyAverageTradesPerSemester,
  week_day_trades as buyWeekDayTrades,
  winning_and_losing_trades as buyWinningAndLosingTrades
} from "./EURUSD/2.bar_chart_buy_eurusd.json";
import {
  winning_trades as buyAndSellWinningTrades,
  losing_trades as buyAndSellLosingTrades,
  winning_trades_percentage as buyAndSellWinningTradesPercentage,
  losing_trades_percentage as buyAndSellLosingTradesPercentage,
  reward_percentage as buyAndSellRewardPercentage,
  loss_percentage as buyAndSellLossPercentage,
  reward as buyAndSellReward,
  loss as buyAndSellLoss,
} from "./EURUSD/3.pie_chart_buy_and_sell_eurusd.json"
import {
  winning_trades as buyWinningTrades,
  losing_trades as buyLosingTrades,
  winning_trades_percentage as buyWinningTradesPercentage,
  losing_trades_percentage as buyLosingTradesPercentage,
  reward_percentage as buyRewardPercentage,
  loss_percentage as buyLossPercentage,
  reward as buyReward,
  loss as buyLoss,
} from "./EURUSD/3.pie_chart_buy_eurusd.json"
import {
  winning_trades as sellWinningTrades,
  losing_trades as sellLosingTrades,
  winning_trades_percentage as sellWinningTradesPercentage,
  losing_trades_percentage as sellLosingTradesPercentage,
  reward_percentage as sellRewardPercentage,
  loss_percentage as sellLossPercentage,
  reward as sellReward,
  loss as sellLoss,
} from "./EURUSD/3.pie_chart_sell_eurusd.json"

import {
  buy_and_sell as buyAndSellHeatMap,
  sell as sellHeatMap,
  buy as buyHeatMap
} from "./EURUSD/4.heat_map_eurusd.json"

import { trades as buyAndSellTrades } from "./EURUSD/5.scatter_plot_buy_and_sell_eurusd.json"
import { trades as buyTrades } from "./EURUSD/5.scatter_plot_buy_eurusd.json"
import { trades as sellTrades } from "./EURUSD/5.scatter_plot_sell_eurusd.json"

const information = {
  EURUSD: {
    Price: PRICE,
    Name: "EURUSD Jan - Dec 2022",
    Timeframe: "Jan - Dec 2022",
    BuyAndSellProfit: PROFIT_BUYANDSELL,
    BuyProfit: PROFIT_BUY,
    SellProfit: PROFIT_SELL,
    TitleBuyAndSell: "Buys and Sells",
    TitleBuy: "Buys",
    TitleSell: "Sells",
    FrequencyBuyAndSell: {
      buyAndSellTotalTrades,
      buyAndSellAverageTradesPerMonth,
      buyAndSellAverageTradesPerQuarter,
      buyAndSellAverageTradesPerSemester
    },
    FrequencyBuyAndSellBarChartData: {
      Days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      TotalTrades: [
        buyAndSellWeekDayTrades.Monday.total_trades,
        buyAndSellWeekDayTrades.Tuesday.total_trades,
        buyAndSellWeekDayTrades.Wednesday.total_trades,
        buyAndSellWeekDayTrades.Thursday.total_trades,
        buyAndSellWeekDayTrades.Friday.total_trades
      ],
      WinningTrades: [
        buyAndSellWeekDayTrades.Monday.total_winning_trades,
        buyAndSellWeekDayTrades.Tuesday.total_winning_trades,
        buyAndSellWeekDayTrades.Wednesday.total_winning_trades,
        buyAndSellWeekDayTrades.Thursday.total_winning_trades,
        buyAndSellWeekDayTrades.Friday.total_winning_trades
      ],
      LosingTrades: [
        buyAndSellWeekDayTrades.Monday.total_losing_trades,
        buyAndSellWeekDayTrades.Tuesday.total_losing_trades,
        buyAndSellWeekDayTrades.Wednesday.total_losing_trades,
        buyAndSellWeekDayTrades.Thursday.total_losing_trades,
        buyAndSellWeekDayTrades.Friday.total_losing_trades
      ]
    },
    FrequencyBuyAndSellWinningAndLosingTrades: buyAndSellWinningAndLosingTrades,
    FrequencySell: {
      sellTotalTrades,
      sellAverageTradesPerMonth,
      sellAverageTradesPerQuarter,
      sellAverageTradesPerSemester
    },
    FrequencySellBarChartData: {
      Days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      TotalTrades: [
        sellWeekDayTrades.Monday.total_trades,
        sellWeekDayTrades.Tuesday.total_trades,
        sellWeekDayTrades.Wednesday.total_trades,
        sellWeekDayTrades.Thursday.total_trades,
        sellWeekDayTrades.Friday.total_trades
      ],
      WinningTrades: [
        sellWeekDayTrades.Monday.total_winning_trades,
        sellWeekDayTrades.Tuesday.total_winning_trades,
        sellWeekDayTrades.Wednesday.total_winning_trades,
        sellWeekDayTrades.Thursday.total_winning_trades,
        sellWeekDayTrades.Friday.total_winning_trades
      ],
      LosingTrades: [
        sellWeekDayTrades.Monday.total_losing_trades,
        sellWeekDayTrades.Tuesday.total_losing_trades,
        sellWeekDayTrades.Wednesday.total_losing_trades,
        sellWeekDayTrades.Thursday.total_losing_trades,
        sellWeekDayTrades.Friday.total_losing_trades
      ]
    },
    FrequencySellWinningAndLosingTrades: sellWinningAndLosingTrades,
    FrequencyBuy: {
      buyTotalTrades,
      buyAverageTradesPerMonth,
      buyAverageTradesPerQuarter,
      buyAverageTradesPerSemester
    },
    FrequencyBuyBarChartData: {
      Days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      TotalTrades: [
        buyWeekDayTrades.Monday.total_trades,
        buyWeekDayTrades.Tuesday.total_trades,
        buyWeekDayTrades.Wednesday.total_trades,
        buyWeekDayTrades.Thursday.total_trades,
        buyWeekDayTrades.Friday.total_trades
      ],
      WinningTrades: [
        buyWeekDayTrades.Monday.total_winning_trades,
        buyWeekDayTrades.Tuesday.total_winning_trades,
        buyWeekDayTrades.Wednesday.total_winning_trades,
        buyWeekDayTrades.Thursday.total_winning_trades,
        buyWeekDayTrades.Friday.total_winning_trades
      ],
      LosingTrades: [
        buyWeekDayTrades.Monday.total_losing_trades,
        buyWeekDayTrades.Tuesday.total_losing_trades,
        buyWeekDayTrades.Wednesday.total_losing_trades,
        buyWeekDayTrades.Thursday.total_losing_trades,
        buyWeekDayTrades.Friday.total_losing_trades
      ]
    },
    FrequencyBuyWinningAndLosingTrades: buyWinningAndLosingTrades,
    PercentageBuyAndSellWinningAndLosingPieLabels: [
      "Winning Percentage",
      "Losing Percentage"
    ],
    PercentageBuyAndSellWinningAndLosingPieData: [
      buyAndSellWinningTradesPercentage,
      buyAndSellLosingTradesPercentage
    ],
    PercentageBuyAndSellWinningAndLosingTableData: {
      a: {
        label: "Winning Trades Value",
        dataPoint: buyAndSellWinningTrades,
      },
      b: {
        label: "Losing Trades Value",
        dataPoint: buyAndSellLosingTrades,
      },
      c: {
        label: "Winning Trades Percentage",
        dataPoint: buyAndSellWinningTradesPercentage,
      },
      d: {
        label: "Losing Trades Percentage",
        dataPoint: buyAndSellLosingTradesPercentage,
      }
    },
    PercentageBuyAndSellRewardAndLossPieLabels: [
      "Reward Percentage",
      "Loss Percentage"
    ],
    PercentageBuyAndSellRewardAndLossPieData: [
      buyAndSellRewardPercentage,
      buyAndSellLossPercentage
    ],
    PercentageBuyAndSellRewardAndLossTableData: {
      a: {
        label: "Reward Value",
        dataPoint: buyAndSellReward,
      },
      b: {
        label: "Loss Value",
        dataPoint: buyAndSellLoss
      },
      c: {
        label: "Reward Percentage",
        dataPoint: buyAndSellRewardPercentage,
      },
      d: {
        label: "Loss Percentage",
        dataPoint: buyAndSellLossPercentage,
      }
    },
    PercentageBuyWinningAndLosingPieLabels: [
      "Winning Percentage",
      "Losing Percentage"
    ],
    PercentageBuyWinningAndLosingPieData: [
      buyWinningTradesPercentage,
      buyLosingTradesPercentage
    ],
    PercentageBuyWinningAndLosingTableData: {
      a: {
        label: "Winning Trades Value",
        dataPoint: buyWinningTrades,
      },
      b: {
        label: "Losing Trades Value",
        dataPoint: buyLosingTrades,
      },
      c: {
        label: "Winning Trades Percentage",
        dataPoint: buyWinningTradesPercentage,
      },
      d: {
        label: "Losing Trades Percentage",
        dataPoint: buyLosingTradesPercentage,
      }
    },
    PercentageBuyRewardAndLossPieLabels: [
      "Reward Percentage",
      "Loss Percentage"
    ],
    PercentageBuyRewardAndLossPieData: [
      buyRewardPercentage,
      buyLossPercentage
    ],
    PercentageBuyRewardAndLossTableData: {
      a: {
        label: "Reward Value",
        dataPoint: buyReward,
      },
      b: {
        label: "Loss Value",
        dataPoint: buyLoss
      },
      c: {
        label: "Reward Percentage",
        dataPoint: buyRewardPercentage,
      },
      d: {
        label: "Loss Percentage",
        dataPoint: buyLossPercentage,
      }
    },
    PercentageSellWinningAndLosingPieLabels: [
      "Winning Percentage",
      "Losing Percentage"
    ],
    PercentageSellWinningAndLosingPieData: [
      sellWinningTradesPercentage,
      sellLosingTradesPercentage
    ],
    PercentageSellWinningAndLosingTableData: {
      a: {
        label: "Winning Trades Value",
        dataPoint: sellWinningTrades,
      },
      b: {
        label: "Losing Trades Value",
        dataPoint: sellLosingTrades,
      },
      c: {
        label: "Winning Trades Percentage",
        dataPoint: sellWinningTradesPercentage,
      },
      d: {
        label: "Losing Trades Percentage",
        dataPoint: sellLosingTradesPercentage,
      }
    },
    PercentageSellRewardAndLossPieLabels: [
      "Reward Percentage",
      "Loss Percentage"
    ],
    PercentageSellRewardAndLossPieData: [
      sellRewardPercentage,
      sellLossPercentage
    ],
    PercentageSellRewardAndLossTableData: {
      a: {
        label: "Reward Value",
        dataPoint: sellReward,
      },
      b: {
        label: "Loss Value",
        dataPoint: sellLoss
      },
      c: {
        label: "Reward Percentage",
        dataPoint: sellRewardPercentage,
      },
      d: {
        label: "Loss Percentage",
        dataPoint: sellLossPercentage,
      }
    },
    HeatMapSeries: [
      {
        name: "Buys and Sells",
        data: [{
          x: "Net Winnings",
          y: buyAndSellHeatMap.net_winnings,
        }, {
          x: "Net Rewards",
          y: buyAndSellHeatMap.net_rewards,
        }]
      },
      {
        name: "Buys",
        data: [{
          x: "Net Winnings",
          y: buyHeatMap.net_winnings,
        }, {
          x: "Net Rewards",
          y: buyHeatMap.net_rewards,
        }]
      },
      {
        name: "Sells",
        data: [{
          x: "Net Winnings",
          y: sellHeatMap.net_winnings,
        }, {
          x: "Net Rewards",
          y: sellHeatMap.net_rewards,
        }]
      }
    ],
    ScatterPlotSeries: {
      buyAndSells: buyAndSellTrades,
      buys: buyTrades,
      sells: sellTrades
    }
  }
};
export default information;
