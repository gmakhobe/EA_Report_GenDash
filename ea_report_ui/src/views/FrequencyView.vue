<script setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
import * as barGraph from '../utilities/barGraph.js'
import { getBarChartInformation } from "../utilities/barGraph.js";

const props = defineProps(["SelectedPair", "TradeInformation"]);
const timeFrame = props.TradeInformation[`${props.SelectedPair}_Timeframe`];
const TitleBuyAndSell = 'Buys and Sells';
const TitleBuy = 'Buys';
const TitleSell = 'Sells';
const BuySellTradeFrequency = props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`];
const BuyTradeFrequency = props.TradeInformation[`${props.SelectedPair}_BAR_BUY`];
const SellTradeFrequency = props.TradeInformation[`${props.SelectedPair}_BAR_SELL`];
const totalBuyAndSellTrades = [
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Monday.total_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Tuesday.total_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Wednesday.total_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Thursday.total_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Friday.total_trades
];
const totalWinningTrades = [
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Monday.total_winning_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Tuesday.total_winning_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Wednesday.total_winning_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Thursday.total_winning_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Friday.total_winning_trades
];
const totalLosingTrades = [
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Monday.total_losing_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Tuesday.total_losing_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Wednesday.total_losing_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Thursday.total_losing_trades,
    props.TradeInformation[`${props.SelectedPair}_BAR_BUYANDSELL`].week_day_trades.Friday.total_losing_trades
];
const buySelTradeFrequencyBarGraphData = barGraph.getBarChartInformation(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], totalBuyAndSellTrades, totalWinningTrades, totalLosingTrades);

</script>

<template>
    <h1 class="title-price-information">Trade Frequency: {{ timeFrame }}</h1>
    <div class="container-layout-pair">
        <div class="title-trade-type">{{ TitleBuyAndSell }}</div>
        <div class="subtitle-trade-type">General Trade Statistics</div>
        <table>
            <tr>
                <th>Total Trades</th>
                <th>Average Trades<br/> Per Month</th>
                <th>Average Trades<br/> Per Quarter</th>
                <th>Average Trades<br/> Per Semester</th>
            </tr>
            <tr>
                <td>{{ BuySellTradeFrequency.total_trades }}</td>
                <td>{{ BuySellTradeFrequency.average_trades_per_month }}</td>
                <td>{{ BuySellTradeFrequency.average_trades_per_quarter }}</td>
                <td>{{ BuySellTradeFrequency.average_trades_per_semester }}</td>
            </tr>
        </table>
        <div class="subtitle-trade-type">Weekday Trades Statistics</div>
        <Bar class="bar" :data="buySelTradeFrequencyBarGraphData" :options="barGraph.options" />
        <div class="subtitle-trade-type">Winning and Losing Days Statistics</div>
        <table>
            <tr>
                <th>Highest Winning<br/>Day</th>
                <th>Lowest Winning<br/>Day</th>
                <th>Highest Losing<br/>Day</th>
                <th>Lowest Losing<br/>Day</th>
            </tr>
            <tr>
                <td>{{ BuySellTradeFrequency.winning_and_losing_trades.highest_winning_day.day }}</td>
                <td>{{ BuySellTradeFrequency.winning_and_losing_trades.lowest_winning_day.day }}</td>
                <td>{{ BuySellTradeFrequency.winning_and_losing_trades.highest_losing_day.day }}</td>
                <td>{{ BuySellTradeFrequency.winning_and_losing_trades.lowest_losing_day.day }}</td>
            </tr>
            <tr>
                <td>{{ BuySellTradeFrequency.winning_and_losing_trades.highest_winning_day.net_percent }}</td>
                <td>{{ BuySellTradeFrequency.winning_and_losing_trades.lowest_winning_day.net_percent }}</td>
                <td>{{ BuySellTradeFrequency.winning_and_losing_trades.highest_losing_day.net_percent }}</td>
                <td>{{ BuySellTradeFrequency.winning_and_losing_trades.lowest_losing_day.net_percent }}</td>
            </tr>
        </table>
    </div>

    <div class="container-layout-pair">
        <div class="title-trade-type">{{ TitleBuy }}</div>
        <div class="subtitle-trade-type">General Trade Statistics</div>
        <table>
            <tr>
                <th>Total Trades</th>
                <th>Average Trades<br/> Per Month</th>
                <th>Average Trades<br/> Per Quarter</th>
                <th>Average Trades<br/> Per Semester</th>
            </tr>
            <tr>
                <td>{{ BuyTradeFrequency.total_trades }}</td>
                <td>{{ BuyTradeFrequency.average_trades_per_month }}</td>
                <td>{{ BuyTradeFrequency.average_trades_per_quarter }}</td>
                <td>{{ BuyTradeFrequency.average_trades_per_semester }}</td>
            </tr>
        </table>
        <div class="subtitle-trade-type">Weekday Trades Statistics</div>
        <Bar class="bar" :data="buySelTradeFrequencyBarGraphData" :options="barGraph.options" />
        <div class="subtitle-trade-type">Winning and Losing Days Statistics</div>
        <table>
            <tr>
                <th>Highest Winning<br/>Day</th>
                <th>Lowest Winning<br/>Day</th>
                <th>Highest Losing<br/>Day</th>
                <th>Lowest Losing<br/>Day</th>
            </tr>
            <tr>
                <td>{{ BuyTradeFrequency.winning_and_losing_trades.highest_winning_day.day }}</td>
                <td>{{ BuyTradeFrequency.winning_and_losing_trades.lowest_winning_day.day }}</td>
                <td>{{ BuyTradeFrequency.winning_and_losing_trades.highest_losing_day.day }}</td>
                <td>{{ BuyTradeFrequency.winning_and_losing_trades.lowest_losing_day.day }}</td>
            </tr>
            <tr>
                <td>{{ BuyTradeFrequency.winning_and_losing_trades.highest_winning_day.net_percent }}</td>
                <td>{{ BuyTradeFrequency.winning_and_losing_trades.lowest_winning_day.net_percent }}</td>
                <td>{{ BuyTradeFrequency.winning_and_losing_trades.highest_losing_day.net_percent }}</td>
                <td>{{ BuyTradeFrequency.winning_and_losing_trades.lowest_losing_day.net_percent }}</td>
            </tr>
        </table>
    </div>

    <div class="container-layout-pair">
        <div class="title-trade-type">{{ TitleSell }}</div>
        <div class="subtitle-trade-type">General Trade Statistics</div>
        <table>
            <tr>
                <th>Total Trades</th>
                <th>Average Trades<br/> Per Month</th>
                <th>Average Trades<br/> Per Quarter</th>
                <th>Average Trades<br/> Per Semester</th>
            </tr>
            <tr>
                <td>{{ SellTradeFrequency.total_trades }}</td>
                <td>{{ SellTradeFrequency.average_trades_per_month }}</td>
                <td>{{ SellTradeFrequency.average_trades_per_quarter }}</td>
                <td>{{ SellTradeFrequency.average_trades_per_semester }}</td>
            </tr>
        </table>
        <div class="subtitle-trade-type">Weekday Trades Statistics</div>
        <Bar class="bar" :data="buySelTradeFrequencyBarGraphData" :options="barGraph.options" />
        <div class="subtitle-trade-type">Winning and Losing Days Statistics</div>
        <table>
            <tr>
                <th>Highest Winning<br/>Day</th>
                <th>Lowest Winning<br/>Day</th>
                <th>Highest Losing<br/>Day</th>
                <th>Lowest Losing<br/>Day</th>
            </tr>
            <tr>
                <td>{{ SellTradeFrequency.winning_and_losing_trades.highest_winning_day.day }}</td>
                <td>{{ SellTradeFrequency.winning_and_losing_trades.lowest_winning_day.day }}</td>
                <td>{{ SellTradeFrequency.winning_and_losing_trades.highest_losing_day.day }}</td>
                <td>{{ SellTradeFrequency.winning_and_losing_trades.lowest_losing_day.day }}</td>
            </tr>
            <tr>
                <td>{{ SellTradeFrequency.winning_and_losing_trades.highest_winning_day.net_percent }}</td>
                <td>{{ SellTradeFrequency.winning_and_losing_trades.lowest_winning_day.net_percent }}</td>
                <td>{{ SellTradeFrequency.winning_and_losing_trades.highest_losing_day.net_percent }}</td>
                <td>{{ SellTradeFrequency.winning_and_losing_trades.lowest_losing_day.net_percent }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.container-layout-pair {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-right: 50px;
    margin-top: 20px;
    margin-bottom: 50px;
}
.bar {
    margin: 40px;
}
</style>
