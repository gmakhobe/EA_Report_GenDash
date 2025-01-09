<script setup>
import VueApexCharts from "vue3-apexcharts";
import * as lineChart from '../utilities/lineGraph.js'
import * as barGraph from '../utilities/barGraph.js'
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

const props = defineProps(["SelectedPair", "TradeInformation"]);
const rawBuyAndSellProfit = props.TradeInformation[`${props.SelectedPair}_LINE_PROFIT_BUYANDSELL`];
const timeFrame = props.TradeInformation[`${props.SelectedPair}_Timeframe`].Timeframe;
const TitleBuyAndSell = "Buys and Sells";
const chartOptionsTitleBuyAndSell = lineChart.getLineChartInformation(rawBuyAndSellProfit, "X");
const seriesTitleBuyAndSell = lineChart.getLineChartInformation(rawBuyAndSellProfit, "Y");

const monthsLabels =  rawBuyAndSellProfit.map((item) => { 
  return item.date;
});
const monthlyNetProfit =  rawBuyAndSellProfit.map((item) => { 
  return (item.net_profit);
});
const monthlyGrossProfit =  rawBuyAndSellProfit.map((item) => { 
  return (item.gross_profit > 0 ? item.gross_profit : item.gross_profit * -1);
});
const monthlyGrossLoss =  rawBuyAndSellProfit.map((item) => { 
  return (item.gross_loss > 0 ? item.gross_loss : item.gross_loss * -1);
});
const profitInformation = barGraph.monthlyReturnsBarChart(monthsLabels, monthlyNetProfit, monthlyGrossProfit, monthlyGrossLoss);
</script>

<template>
  <h1 class="title-price-information">Monthly Net Reward: {{ timeFrame }}</h1>
  <div class="container-layout-pair">
    <VueApexCharts type="line" :options="lineChart.netProfitLineChartOptions(monthsLabels)" :series="lineChart.netProfitAmountLineChart(rawBuyAndSellProfit)" />
    <div class="subtext">{{ TitleBuyAndSell }}</div>

    <Bar class="bar" :data="profitInformation" :options="barGraph.options" />
    <div class="subtext">Monthly Profit & Loss Stats</div>
  </div>
</template>

<style scoped>
.container-layout-pair {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    margin-right: 50px;
    margin-top: 20px;
    margin-bottom: 50px;
}

.bar {
    margin: 40px;
}

</style>

