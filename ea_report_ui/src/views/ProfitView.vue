<script setup>
import VueApexCharts from "vue3-apexcharts";
import * as lineChart from '../utilities/lineGraph.js'

const props = defineProps(["SelectedPair", "TradeInformation"]);
const rawBuyAndSellProfit = props.TradeInformation[`${props.SelectedPair}_LINE_PROFIT_BUYANDSELL`];
const rawBuyProfit = props.TradeInformation[`${props.SelectedPair}_LINE_PROFIT_BUY`];
const rawSellProfit = props.TradeInformation[`${props.SelectedPair}_LINE_PROFIT_SELL`];
const timeFrame = props.TradeInformation[`${props.SelectedPair}_Timeframe`].Timeframe;
const TitleBuyAndSell = "Buys and Sells";
const TitleBuy = "Buys";
const TitleSell = "Sells";
const chartOptionsTitleBuyAndSell = lineChart.getLineChartInformation(rawBuyAndSellProfit, "X");
const seriesTitleBuyAndSell = lineChart.getLineChartInformation(rawBuyAndSellProfit, "Y");
const chartOptionsTitleBuy = lineChart.getLineChartInformation(rawBuyProfit, "X");
const seriesTitleBuy = lineChart.getLineChartInformation(rawBuyProfit, "Y");
const chartOptionsTitleSell = lineChart.getLineChartInformation(rawSellProfit, "X");
const seriesTitleSell = lineChart.getLineChartInformation(rawSellProfit, "Y");

</script>

<template>
  <h1 class="title-price-information">Monthly Net Reward: {{ timeFrame }}</h1>
  <div class="container-layout-pair">
    <VueApexCharts type="line" :options="chartOptionsTitleBuyAndSell" :series="seriesTitleBuyAndSell" />
    <div class="subtext">{{ TitleBuyAndSell }}</div>
  </div>

  <div class="container-layout-pair">
    <VueApexCharts type="line" :options="chartOptionsTitleBuy" :series="seriesTitleBuy" />
    <div class="subtext">{{ TitleBuy }}</div>
  </div>

  <div class="container-layout-pair">
    <VueApexCharts type="line" :options="chartOptionsTitleSell" :series="seriesTitleSell" />
    <div class="subtext">{{ TitleSell }}</div>
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

</style>

