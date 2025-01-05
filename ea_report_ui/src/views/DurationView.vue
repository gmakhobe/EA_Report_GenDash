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
const TitleBuy = 'Buys';
const TitleSell = 'Sells';

const buyAndSellScatter = getScatterChartInformation(props.TradeInformation[`${props.SelectedPair}_SCATTER_BUYANDSELL`].trades);
const buyScatter = getScatterChartInformation(props.TradeInformation[`${props.SelectedPair}_SCATTER_BUY`].trades);
const sellScatter = getScatterChartInformation(props.TradeInformation[`${props.SelectedPair}_SCATTER_SELL`].trades);

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

  <div class="container-layout-pair">
    <h1 class="title-trade-type">Duration of {{ TitleBuy }} Trades in Relation to Profitability</h1>
    <Scatter :data="buyScatter.chartData" :options="buyScatter.options" />

    <TableLite class="table"
               :is-static-mode="true"
               :columns="buyScatter.tableData.columns"
               :rows="buyScatter.tableData.rows"
               :total="buyScatter.tableData.totalRecordCount"
               :sortable="buyScatter.tableData.sortable"
               :messages="buyScatter.tableData.messages"
               :page="1"
               :page-size="10"
               @do-search="doSearch"
               @is-finished="buyScatter.tableData.isLoading = false"
    />
  </div>

  <div class="container-layout-pair">
    <h1 class="title-trade-type">Duration of {{ TitleSell }} Trades in Relation to Profitability</h1>
    <Scatter :data="sellScatter.chartData" :options="sellScatter.options" />
    <TableLite class="table"
               :is-static-mode="true"
               :columns="sellScatter.tableData.columns"
               :rows="sellScatter.tableData.rows"
               :total="sellScatter.tableData.totalRecordCount"
               :sortable="sellScatter.tableData.sortable"
               :messages="sellScatter.tableData.messages"
               :page="1"
               :page-size="10"
               @is-finished="sellScatter.tableData.isLoading = false"
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
