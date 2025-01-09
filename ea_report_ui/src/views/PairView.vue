<script setup>
const props = defineProps(["SelectedPair", "TradeInformation"]);
import VueApexCharts from "vue3-apexcharts"
import { monthlychartOptions, groupPriceDataByMonth, groupEntryDataByMonth } from '../utilities/PairUtils'

const priceTimeSeries = props.TradeInformation[`${props.SelectedPair}_MONTHLY_PRICE`]['PRICE'].map((index) => ({
    x: new Date(index.date),
    y: [
        parseFloat(index.open),
        parseFloat(index.high),
        parseFloat(index.low),
        parseFloat(index.close)
    ]
}));
const chartOptions = {
    chart: {
        type: 'candlestick',
        background: '#000'
    },
    title: {
        align: 'center',
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: undefined,
            color: '#FFF'
        }
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
};
const mainSeries = [
    {
        data: priceTimeSeries
    }
];

// Sample Data
const HistoryPriceData = props.TradeInformation[`${props.SelectedPair}_MONTHLY_PRICE`]['PRICE'].map((index) => {
    const initDate = new Date(props.TradeInformation[`${props.SelectedPair}_FROM_DATE`]).valueOf();
    const subsiqDate = new Date(props.TradeInformation[`${props.SelectedPair}_TO_DATE`]).valueOf();
    const curreDate = new Date(index.date).valueOf();
    if (curreDate > initDate && curreDate < subsiqDate) {
        return {
        x: new Date(index.date),
        y: [
            parseFloat(index.open),
            parseFloat(index.high),
            parseFloat(index.low),
            parseFloat(index.close)
        ]
    };
    }
    return null;
}).filter(item => item !== null);

const monthlyPriceData = groupPriceDataByMonth(HistoryPriceData);
const monthlyTradeEntryData = groupEntryDataByMonth(props.TradeInformation[`${props.SelectedPair}_SCATTER_BUYANDSELL`].trades, "EntryPrice");
const monthlyTradeStopLossData = groupEntryDataByMonth(props.TradeInformation[`${props.SelectedPair}_SCATTER_BUYANDSELL`].trades, "StopLossPrice");
const monthlyTradeTakeProfitData = groupEntryDataByMonth(props.TradeInformation[`${props.SelectedPair}_SCATTER_BUYANDSELL`].trades, "TakeProfitPrice");

function myCustomDate(givenDate){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(givenDate[0]["x"]);

    return `Data for ${(date.getDay() > 9 ? date.getDay() : '0' + date.getDay())} - ${months[date.getMonth()]} -  ${date.getFullYear()}`;
}

function getCurrentMonthTrades(price, monthlyTrades, type){
    const date = new Date(price[0]["x"]);
    const currentDate = `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}`;

    return {
        name: type,
        type: 'scatter', 
        data: monthlyTrades[currentDate]
    };
}

</script>

<template>
    <h1 class="title-price-information">Price Information: {{ props.TradeInformation[`${props.SelectedPair}_NAME`] }}</h1>
    <div class="container-layout-pair">
        <VueApexCharts type="candlestick" :options="chartOptions" :series="mainSeries" />
        <div class="subtext">{{ props.SelectedPair }} {{ props.TradeInformation[`${props.SelectedPair}_PERIOD`] }}</div>
    </div>
    <div class="container-layout-pair" v-for="item in monthlyPriceData" :key="item.x">
        <VueApexCharts type="candlestick" :options="monthlychartOptions"
            :series="[
                {
                    name: 'Candlesticks',
                    type: 'candlestick',
                    data: item
                }, 
                    getCurrentMonthTrades(item, monthlyTradeEntryData, 'Entry Price'),
                    getCurrentMonthTrades(item, monthlyTradeStopLossData, 'Stoploss Price'),
                    getCurrentMonthTrades(item, monthlyTradeTakeProfitData, 'Takeprofit Price')
            ]" />
            <div class="subtext">{{ myCustomDate(item) }}</div>
    </div>
</template>

<style scoped>
.container-layout-pair {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    margin-right: 50px;
    margin-top: 10px;
    margin-bottom: 50px;
}

VueApexCharts {
    background: black;
    width: 100% !important;
}
</style>
