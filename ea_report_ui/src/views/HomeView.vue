<script setup>
import TopNavigation from "@/components/TopNavigation.vue";
import SideNavigation from "@/components/SideNavigation.vue";
import ProfitView from "@/views/ProfitView.vue";
import FrequencyView from "@/views/FrequencyView.vue";
import PercentageView from "@/views/PercentageView.vue";
import PerformanceView from "@/views/PerformanceView.vue";
import DurationView from "@/views/DurationView.vue";
import { reactive, ref } from "vue";
import PairView from "@/views/PairView.vue";

import InformationActivePairs from "../information/ActivePairs.json"
import { TradeInformation } from '../information/init'

const tabIndicator = reactive({
  pair: true,
  profit: false,
  frequency: false,
  percentage: false,
  performance: false,
  duration: false
});
const selectOptionsSelectedItem = ref(InformationActivePairs.Pairs[0]);

function sideNavigationTabChange(tabName) {
  // Unselect all tabs
  for (let key in tabIndicator) {
    tabIndicator[key] = false;

    if (key == tabName)
    {
      tabIndicator[tabName] = true;
    }
  }
}

function selectOptionsSelectedItemHandler(value)
{
  selectOptionsSelectedItem.value = value;
}

</script>

<template>

  <TopNavigation/>

  <main>
    <SideNavigation class="side-navigation"
                    @sideNavigationTabChange="sideNavigationTabChange"
                    @selectOptionsSelectedItemHandler="selectOptionsSelectedItemHandler"
                    :ActivePairs="InformationActivePairs.Pairs"
                    :SelectedPair="selectOptionsSelectedItem"/>

    <div class="content-layout">
      <PairView v-if="tabIndicator.pair"
                :SelectedPair="selectOptionsSelectedItem"
                :TradeInformation="TradeInformation"/>
      <ProfitView v-if="tabIndicator.profit"
                  :SelectedPair="selectOptionsSelectedItem"
                  :TradeInformation="TradeInformation"/>
      <FrequencyView v-if="tabIndicator.frequency"
                     :SelectedPair="selectOptionsSelectedItem"
                     :TradeInformation="TradeInformation"/>
      <PercentageView  v-if="tabIndicator.percentage"
                       :SelectedPair="selectOptionsSelectedItem"
                       :TradeInformation="TradeInformation"/>
      <PerformanceView v-if="tabIndicator.performance"
                       :SelectedPair="selectOptionsSelectedItem"
                       :TradeInformation="TradeInformation"/>
      <DurationView v-if="tabIndicator.duration"
                    :SelectedPair="selectOptionsSelectedItem"
                    :TradeInformation="TradeInformation"/>
    </div>
  </main>

</template>

<style scoped>
  main {
      display: flex;
      align-items: stretch;
  }
  .side-navigation {
      flex-grow: 1;
  }
  .content-layout{
    flex-grow: 8;
  }
</style>
