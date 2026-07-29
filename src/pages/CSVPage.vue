<template>
  <q-page>
    <q-file v-model="csvFile" label="Choose CSV file" accept=".csv" @update:model-value="loadCsvText" />
    <q-btn label="Compress and download" :disable="csvFile == undefined" @click="downloadCsv" />
  </q-page>
</template>

<script setup lang="ts">
import { useCSVHandler } from 'src/composables/useCsvHandler';
import { ref } from 'vue';

const { compressAndDownloadCSV } = useCSVHandler();

const csvFile = ref();
const csvString = ref('');

function loadCsvText(file: any) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    csvString.value = e.target.result;
  };
  reader.readAsText(file);
}

function downloadCsv() {
  compressAndDownloadCSV(csvString.value, 'result.csv');
}
</script>
