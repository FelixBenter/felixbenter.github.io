<template>
  <q-page style="width: 100%" class="q-py-lg">
    <q-table
      v-model:pagination="pagination"
      :rows="filteredRows"
      :columns="cols"
      virtual-scroll
      :rows-per-page-options="[0]"
      :loading="isLoading"
      bordered
      flat
      square
      style="height: 70vh; width: 100%"
    >
      <template #top>
        <div class="text-body1">Train solutions</div>
        <q-space />
        <q-input outlined dense debounce="300" color="primary" v-model="filterText" square>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template #body="props">
        <q-tr :props="props">
          <q-td key="num" :props="props">
            {{ props.row.num }}
          </q-td>
          <q-td key="solution" :props="props">
            {{ props.row.solution }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script setup lang="ts">
import { QTableColumn } from 'quasar';
import { useCSVHandler } from 'src/composables/useCsvHandler';
import { onMounted, ref, watch } from 'vue';

const csvHandler = useCSVHandler();
const isLoading = ref(false);

const rows = ref<Array<any>>([]);
const filteredRows = ref<Array<any>>([]);
const filterText = ref('');
const pagination = ref({
  rowsPerPage: 0,
});

const cols = [
  { name: 'num', label: 'Number', field: 'num', align: 'center' },
  { name: 'solution', label: 'Solution', field: 'solution', align: 'center' },
] as Array<QTableColumn>;

onMounted(() => {
  loadData();
});

watch(
  filterText,
  () => {
    filter(filterText.value, () => {});
  },
  {
    immediate: true,
  }
);

async function loadData() {
  isLoading.value = true;
  const resp = await csvHandler.loadAndDecompressLocalCsv('/train_data.csv.gz');
  rows.value = resp.tableRows;
  filteredRows.value = rows.value;
  isLoading.value = false;
}

function filter(val: string, update: () => void) {
  if (val === null || val === '') {
    filteredRows.value = rows.value;
  } else {
    const needle = val.toLowerCase();
    filteredRows.value = rows.value.filter((v) => {
      return v.num.includes(needle);
    });
  }

  update();
}
</script>
