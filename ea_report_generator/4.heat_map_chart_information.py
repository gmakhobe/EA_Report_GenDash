import json
import os
import sys

json_file_final_refined_data_buy_and_sell = open(os.path.join(sys.path[0], "information/EURUSD_MSI_SS1_1H4H1D_2024/3.pie_chart_buys_and_sells.json"), "r")
dict_buy_sell = json.load(json_file_final_refined_data_buy_and_sell)

dictionary = {
    "buy_and_sell": {
        "net_winnings": dict_buy_sell["net_winnings"],
        "net_rewards": dict_buy_sell["net_rewards"],
    },
    "sell": {
        "net_winnings": 0,
        "net_rewards": 0
    },
    "buy": {
        "net_winnings": 0,
        "net_rewards": 0
    }
}

with open("information/EURUSD_MSI_SS1_1H4H1D_2024/4.heat_map_buys_and_sells.json", "w") as file:
    json.dump(dictionary, file)
