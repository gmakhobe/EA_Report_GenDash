import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PairView from '../views/PairView.vue'
import ProfitView from '../views/ProfitView.vue'
import FrequencyView from '../views/FrequencyView.vue'
import PercentageView from '../views/PercentageView.vue'
import PerformanceView from '../views/PercentageView.vue'
import DurationView from '../views/DurationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/profit',
      name: 'Profit',
      component: ProfitView
    },
    {
      path: '/frequency',
      name: 'Frequency',
      component: FrequencyView
    },
    {
      path: '/percentage',
      name: 'Percentage',
      component: PercentageView
    },
    {
      path: '/performance',
      name: 'Performance',
      component: PerformanceView
    },
    {
      path: '/duration',
      name: 'Duration',
      component: DurationView
    }
  ]
})

export default router
