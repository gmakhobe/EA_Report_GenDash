import json
import os
import sys
import datetime
import calendar
from utilities.profit_information import ProfitInformation

json_file_final_refined_data = open(os.path.join(sys.path[0], "final_refined_data/EURUSD_MSI_WeakSignal1_2024/buys_and_sells.json"), "r")
json_refined_data = json.load(json_file_final_refined_data)

def process_trade_data(json_refined_data):
    """
    Processes trade data to calculate monthly statistics.

    Args:
      json_refined_data: A dictionary containing trade data with a "data" key.

    Returns:
      A list of dictionaries, each representing monthly trade statistics.
    """

    information = {"PROFIT_BUYANDSELL": []}
    objectTemplate = {
        "gross_profit": 0,
        "gross_loss": 0,
        "gross_reward": 0,
        "gross_risk": 0,
        "net_profit": 0,
        "net_reward": 0,
        "date": None
    }
    sessionDate = None
    currentMonth = None

    for item in json_refined_data["data"]:
        positionDate = datetime.datetime.strptime(item["EntryTime"], '%Y.%m.%d %H:%M:%S')

        if sessionDate is None:
            currentMonth = positionDate.strftime("%Y.%m")
            sessionDate = positionDate

        if currentMonth != positionDate.strftime("%Y.%m"):
            # Calculate and append monthly results
            objectTemplate["net_profit"] = objectTemplate["gross_profit"] + objectTemplate["gross_loss"]
            objectTemplate["net_reward"] = objectTemplate["gross_reward"] - objectTemplate["gross_risk"] if objectTemplate["gross_reward"] > 0 else objectTemplate["gross_reward"] + objectTemplate["gross_risk"]
            _, numberOfDays = calendar.monthrange(sessionDate.year, sessionDate.month)
            objectTemplate["date"] = f"{numberOfDays} {sessionDate.strftime('%B')} {sessionDate.year}"
            information["PROFIT_BUYANDSELL"].append(objectTemplate.copy())  # Append a copy of the object

            # Reset values for the new month
            objectTemplate["gross_profit"] = 0
            objectTemplate["gross_loss"] = 0
            objectTemplate["gross_reward"] = 0
            objectTemplate["gross_risk"] = 0
            objectTemplate["net_profit"] = 0
            objectTemplate["net_reward"] = 0
            currentMonth = positionDate.strftime("%Y.%m")
            sessionDate = positionDate

        # Accumulate values for the current month
        objectTemplate["gross_profit"] = float(objectTemplate["gross_profit"]) + float(item["Profit"]) if float(item["Profit"]) > 0 else objectTemplate["gross_profit"]
        objectTemplate["gross_loss"] = float(objectTemplate["gross_loss"]) + float(item["Profit"]) if float(item["Profit"]) < 0 else objectTemplate["gross_loss"]
        objectTemplate["gross_reward"] += 2 if float(item["Profit"]) > 0 else 0
        objectTemplate["gross_risk"] += 1 if float(item["Profit"]) < 0 else 0

    # Append the last month's data (if any)
    if sessionDate is not None:
        objectTemplate["net_profit"] = objectTemplate["gross_profit"] - objectTemplate["gross_loss"] if objectTemplate["gross_profit"] > 0 else objectTemplate["gross_profit"] + objectTemplate["gross_loss"]
        objectTemplate["net_reward"] = objectTemplate["gross_reward"] - objectTemplate["gross_risk"] if objectTemplate["gross_reward"] > 0 else objectTemplate["gross_reward"] + objectTemplate["gross_risk"]
        _, numberOfDays = calendar.monthrange(sessionDate.year, sessionDate.month)
        objectTemplate["date"] = f"{numberOfDays} {sessionDate.strftime('%B')} {sessionDate.year}"
        information["PROFIT_BUYANDSELL"].append(objectTemplate.copy())  # Append a copy of the object

    return information

results = process_trade_data(json_refined_data)
print(process_trade_data(json_refined_data))

with open("information/EURUSD_MSI_WeakSignal1_2024/1.line_buys_and_sells.json", "w") as file:
  json.dump(results, file)