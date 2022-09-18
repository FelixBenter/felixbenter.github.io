
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Felix Benter
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        class="text-white"
        >
          <q-tab name="overview" label="Overview" />
          <q-tab name="portfolio" label="Portfolio" />
        </q-tabs>
    </q-header>

    <q-page-container>
      <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="overview">
            <OverviewPage/>
          </q-tab-panel>

          <q-tab-panel name="portfolio">
            <PortfolioPage/>
          </q-tab-panel>
        </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import OverviewPage from 'src/pages/OverviewPage.vue';
import PortfolioPage from 'src/pages/PortfolioPage.vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    OverviewPage,
    PortfolioPage
  },
  setup () {
    return {
      tab: ref('overview')
    }
  }
})
</script>
