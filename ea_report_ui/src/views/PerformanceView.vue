<script setup>
import VueApexCharts from "vue3-apexcharts"
import { getPieChartInformation } from "../utilities/pieGraph";

const props = defineProps(["SelectedPair", "TradeInformation"]);
const timeFrame = props.TradeInformation[`${props.SelectedPair}_Timeframe`];
const TitleBuyAndSell = 'Buys and Sells';

const chartOptions = {
  dataLabels: {
    enabled: false
  },
  colors: ["#00ff0f"],

  xaxis: {
    type: 'category',
  }

};
const series = [
      {
        name: "Buys and Sells",
        data: [{
          x: "Net Winnings",
          y: props.TradeInformation[`${props.SelectedPair}_HEAT`].buy_and_sell.net_winnings,
        }, {
          x: "Net Rewards",
          y: props.TradeInformation[`${props.SelectedPair}_HEAT`].buy_and_sell.net_rewards,
        }]
      }];
</script>

<template>
  <h1 class="title-price-information">Heatmap Information About Trade Types: {{timeFrame}}</h1>
  <div class="container-layout-pair">
    <VueApexCharts class="pie-chart" type="heatmap" :options="chartOptions" :series="series"/>
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
</style>
