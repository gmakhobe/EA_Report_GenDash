<script setup>
    import { reactive, ref } from 'vue'

    const emit = defineEmits(["sideNavigationTabChange", "selectOptionsSelectedItemHandler"]);
    const props = defineProps(["ActivePairs", "SelectedPair"]);
    const sideNavigationState = reactive({
        pair: true,
        profit: false,
        frequency: false,
        percentage: false,
        performance: false,
        duration: false
    });
    const SelectedPair = ref(props.SelectedPair);

    function selectTab(tabName) {
        // Unselect all tabs
        for (let key in sideNavigationState) {
            sideNavigationState[key] = false;

            if (key == tabName)
            {
                sideNavigationState[key] = true;

                emit("sideNavigationTabChange", tabName);
            }
        }
    }

    function handleElementValueChange(){
        emit("selectOptionsSelectedItemHandler", SelectedPair.value)
        console.log("selectOptionsSelectedItemHandler", SelectedPair.value)
    }
</script>

<template>
    <section class="side-navigation">
        <select class="pair-select" v-model="SelectedPair" v-on:change="handleElementValueChange">
            <option v-for="counter in props.ActivePairs.length" :value="props.ActivePairs[counter - 1]">
                Pair : {{ props.ActivePairs[counter - 1]}}
            </option>
        </select>


        <div @click="selectTab('pair')" :class="{ selectedTab: sideNavigationState.pair }">
            Pair
        </div>
        <div @click="selectTab('profit')" :class="{ selectedTab: sideNavigationState.profit }">
            Profit
        </div>
        <div @click="selectTab('frequency')" :class="{ selectedTab: sideNavigationState.frequency }">
            Frequency
        </div>
        <div @click="selectTab('percentage')" :class="{ selectedTab: sideNavigationState.percentage }">
            Percentage
        </div>
        <div @click="selectTab('performance')" :class="{ selectedTab: sideNavigationState.performance }">
            Performance
        </div>
        <div  @click="selectTab('duration')" :class="{ selectedTab: sideNavigationState.duration }">
            Duration
        </div>
    </section>
</template>

<style scoped>
  .side-navigation {
      display: flex;
      flex-direction: column;
      width: 321px;
      height: 90vh;
      background: #262729;
      margin: 50px;
      color: #fff;
      font-weight: 600;
  }

  .pair-select {
      padding: 15px;
      margin: 20px;
      text-align: center;
      background: #0781FE;
  }

  .side-navigation > div {
      padding: 15px;
      margin-top: 15px;
      margin-bottom: 15px;
      text-align: center;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
  }

  .selectedTab{
      border-top: 5px solid #fff !important;
      border-bottom: 5px solid #fff !important;
      font-weight: 700;
  }
</style>
