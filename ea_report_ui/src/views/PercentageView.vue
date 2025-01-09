<script setup>
import VueApexCharts from "vue3-apexcharts"
import { getPieChartInformation } from "../utilities/pieGraph";

const props = defineProps(["SelectedPair", "TradeInformation"]);
const timeFrame = props.TradeInformation[`${props.SelectedPair}_Timeframe`];
const TitleBuyAndSell = 'Buys and Sells';;

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

</script>

<template>
    <h1 class="title-price-information">Trade Percentage Information: {{timeFrame}}</h1>
    <div class="container-layout-pair">
        <div class="title-trade-type">{{ TitleBuyAndSell }}</div>
        <div class="subtitle-trade-type">Winning, Losing Trades and Percentage</div>
        <VueApexCharts class="pie-chart" type="pie" :options="buyAndSellWinningAndLosingTrades.chartOptions" :series="buyAndSellWinningAndLosingTrades.series"/>
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
        <VueApexCharts class="pie-chart" type="pie" :options="buyAndSellRewardAndRisk.chartOptions" :series="buyAndSellRewardAndRisk.series"/>
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
