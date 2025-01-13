import json
import os
import sys

from utilities.trade_frequency_and_distribution import TradeFrequencyAndDistribution

json_file_final_refined_data = open(os.path.join(sys.path[0], "final_refined_data/EURUSD_MSI_SS1_1H4H1D_2024/buys_and_sells.json"), "r")
json_refined_data = json.load(json_file_final_refined_data)

trade_frequency_and_distribution = TradeFrequencyAndDistribution()
trade_frequency_and_distribution.set_dictioanry(json_refined_data)
trade_frequency_and_distribution.set_total_trades()
trade_frequency_and_distribution.set_average_trades(12)
trade_frequency_and_distribution.set_week_day_trades()
trade_frequency_and_distribution.set_winning_and_losing_trades()

average_trades_per_month = trade_frequency_and_distribution.average_trades
trade_frequency_and_distribution.set_average_trades(2)
average_trades_per_semester = trade_frequency_and_distribution.average_trades
trade_frequency_and_distribution.set_average_trades(4)
average_trades_per_quarter = trade_frequency_and_distribution.average_trades

bar_chart_information = {
    "total_trades": trade_frequency_and_distribution.total_trades,
    "average_trades_per_month": average_trades_per_month,
    "average_trades_per_quarter": average_trades_per_quarter,
    "average_trades_per_semester": average_trades_per_semester,
    "week_day_trades": trade_frequency_and_distribution.week_day_trades,
    "winning_and_losing_trades": trade_frequency_and_distribution.winning_and_losing_trades
}

with open("information/EURUSD_MSI_SS1_1H4H1D_2024/2.bar_chart_buy_and_sell.json", "w") as file:
    json.dump(bar_chart_information, file)
