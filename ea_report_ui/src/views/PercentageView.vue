<script setup>
import VueApexCharts from "vue3-apexcharts"
import { getPieChartInformation } from "../utilities/pieGraph";

const props = defineProps(["SelectedPair", "TradeInformation"]);
const timeFrame = props.TradeInformation[`${props.SelectedPair}_Timeframe`];
const TitleBuyAndSell = 'Buys and Sells';
const TitleBuy = 'Buys';
const TitleSell = 'Sells';

const buyAndSellWinningAndLosingTrades = getPieChartInformation([
      "Winning Percentage",
      "Losing Percentage"
    ],
    [
    props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].winning_trades_percentage,
    props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].losing_trades_percentage
    ]);
const buyAndSellRewardAndRisk = getPieChartInformation([
      "Reward Percentage",
      "Loss Percentage"
    ],
    [
    props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].reward_percentage,
    props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].loss_percentage
    ]);
const buyWinningAndLosingTrades = getPieChartInformation([
      "Winning Percentage",
      "Losing Percentage"
    ],
    [
    props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].winning_trades_percentage,
    props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].losing_trades_percentage
    ]);
const buyRewardAndRisk = getPieChartInformation([
      "Reward Percentage",
      "Loss Percentage"
    ],
    [
    props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].reward_percentage,
    props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].loss_percentage
    ]);
const sellWinningAndLosingTrades = getPieChartInformation([
      "Winning Percentage",
      "Losing Percentage"
    ],
    [
    props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].winning_trades_percentage,
    props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].losing_trades_percentage
    ]);
const sellRewardAndRisk = getPieChartInformation([
      "Reward Percentage",
      "Loss Percentage"
    ],
    [
    props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].reward_percentage,
    props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].loss_percentage
    ]);

</script>

<template>
    <h1 class="title-price-information">Trade Percentage Information: {{timeFrame}}</h1>
    <div class="container-layout-pair">
        <div class="title-trade-type">{{ TitleBuyAndSell }}</div>
        <div class="subtitle-trade-type">Winning, Losing Trades and Percentage</div>
        <VueApexCharts class="pie-chart" type="pie" :options="sellWinningAndLosingTrades.chartOptions" :series="sellWinningAndLosingTrades.series"/>
        <table>
            <tr>
                <th>Winning Trades</th>
                <th>Losing Trades</th>
                <th>Winning<br/> Percentage</th>
                <th>Losing<br/> Percentage</th>
            </tr>
            <tr>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].winning_trades }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].losing_trades }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].winning_trades_percentage }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].losing_trades_percentage }}</td>
            </tr>
        </table>
        <div class="subtitle-trade-type">Trade Reward, Loss Percentage</div>
        <VueApexCharts class="pie-chart" type="pie" :options="sellRewardAndRisk.chartOptions" :series="sellRewardAndRisk.series"/>
        <table>
            <tr>
                <th>Reward</th>
                <th>Loss</th>
                <th>Reward<br/> Percentage</th>
                <th>Loss<br/> Percentage</th>
            </tr>
            <tr>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].reward }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].loss }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].reward_percentage }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUYANDSELL`].loss_percentage }}</td>
            </tr>
        </table>
    </div>

    <div class="container-layout-pair">
        <div class="title-trade-type">{{ TitleBuy }}</div>
        <div class="subtitle-trade-type">Winning, Losing Trades and Percentage</div>
        <VueApexCharts class="pie-chart" type="pie" :options="buyWinningAndLosingTrades.chartOptions" :series="buyWinningAndLosingTrades.series"/>
        <table>
            <tr>
                <th>Winning Trades</th>
                <th>Losing Trades</th>
                <th>Winning<br/> Percentage</th>
                <th>Losing<br/> Percentage</th>
            </tr>
            <tr>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].winning_trades }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].losing_trades }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].winning_trades_percentage }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].losing_trades_percentage }}</td>
            </tr>
        </table>
        <div class="subtitle-trade-type">Trade Reward, Loss Percentage</div>
        <VueApexCharts class="pie-chart" type="pie" :options="buyRewardAndRisk.chartOptions" :series="buyRewardAndRisk.series"/>
        <table>
            <tr>
                <th>Reward</th>
                <th>Loss</th>
                <th>Reward<br/> Percentage</th>
                <th>Loss<br/> Percentage</th>
            </tr>
            <tr>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].reward }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].loss }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].reward_percentage }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_BUY`].loss_percentage }}</td>
            </tr>
        </table>
    </div>

    <div class="container-layout-pair">
        <div class="title-trade-type">{{ TitleSell }}</div>
        <div class="subtitle-trade-type">Winning, Losing Trades and Percentage</div>
        <VueApexCharts class="pie-chart" type="pie" :options="buyWinningAndLosingTrades.chartOptions" :series="buyWinningAndLosingTrades.series"/>
        <table>
            <tr>
                <th>Winning Trades</th>
                <th>Losing Trades</th>
                <th>Winning<br/> Percentage</th>
                <th>Losing<br/> Percentage</th>
            </tr>
            <tr>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].winning_trades }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].losing_trades }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].winning_trades_percentage }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].losing_trades_percentage }}</td>
            </tr>
        </table>
        <div class="subtitle-trade-type">Trade Reward, Loss Percentage</div>
        <VueApexCharts class="pie-chart" type="pie" :options="buyRewardAndRisk.chartOptions" :series="buyRewardAndRisk.series"/>
        <table>
            <tr>
                <th>Reward</th>
                <th>Loss</th>
                <th>Reward<br/> Percentage</th>
                <th>Loss<br/> Percentage</th>
            </tr>
            <tr>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].reward }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].loss }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].reward_percentage }}</td>
                <td>{{ props.TradeInformation[`${props.SelectedPair}_PIE_SELL`].loss_percentage }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.container-layout-pair{
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-right: 50px;
    margin-top: 10px;
    margin-bottom: 50px;
}
.pie-chart{
    width: 80% !important;
}
</style>
