<script setup>
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Scatter } from "vue-chartjs";
import TableLite from "vue3-table-lite";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
import { getScatterChartInformation } from "../utilities/scatterGraph";

const props = defineProps(["SelectedPair", "TradeInformation"]);
const timeFrame = props.TradeInformation[`${props.SelectedPair}_Timeframe`];
const TitleBuyAndSell = 'Buys and Sells';

const buyAndSellScatter = getScatterChartInformation(props.TradeInformation[`${props.SelectedPair}_SCATTER_BUYANDSELL`].trades);

</script>


<template>
  <h1 class="title-price-information">Trade Type Duration: {{ timeFrame }}</h1>
  <div class="container-layout-pair">
    <h1 class="title-trade-type">Duration of {{ TitleBuyAndSell }} Trades in Relation to Profitability</h1>
    <Scatter :data="buyAndSellScatter.chartData" :options="buyAndSellScatter.options" />

    <TableLite class="table"
      :is-static-mode="true"
      :columns="buyAndSellScatter.tableData.columns"
      :rows="buyAndSellScatter.tableData.rows"
      :total="buyAndSellScatter.tableData.totalRecordCount"
      :sortable="buyAndSellScatter.tableData.sortable"
      :messages="buyAndSellScatter.tableData.messages"
      :page="1"
      :page-size="10"
      @do-search="doSearch"
      @is-finished="buyAndSellScatter.tableData.isLoading = false"
    />
  </div>

</template>

<style scoped>
.container-layout-pair {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-right: 50px;
    margin-top: 10px;
    margin-bottom: 50px;
}
.table{
    width: 90%;
    margin: 10px;
}
</style>
