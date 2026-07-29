// useCSVHandler.ts
import Papa from 'papaparse';

export function useCSVHandler() {
  async function compressAndDownloadCSV(csvString: string, fileName = 'data.csv') {
    // 1. Convert text to a byte stream
    const encoder = new TextEncoder();
    const csvBytes = encoder.encode(csvString);

    // 2. Stream the bytes through the native GZIP compressor
    const stream = new Blob([csvBytes]).stream();
    const compressionStream = stream.pipeThrough(new CompressionStream('gzip'));

    // 3. Collect the compressed chunks into a Blob
    const compressedBlob = await new Response(compressionStream).blob();

    // 4. Trigger the browser download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(compressedBlob);
    downloadLink.download = `${fileName}.gz`; // Saves as data.csv.gz

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  function loadAndDecompressLocalCsv(path: string) {
    return new Promise<{ tableRows: any[]; tableColumns: any[] }>(async (resolve, reject) => {
      try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const gzipStream = response.body;

        const decompressionStream = new DecompressionStream('gzip');
        const decompressedStream = gzipStream.pipeThrough(decompressionStream);

        const textResponse = new Response(decompressedStream);
        const csvString = await textResponse.text();

        Papa.parse(csvString, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const tableRows = results.data;
            let tableColumns: any[] = [];

            // Fixed index error: target results.data[0] to extract keys
            if (results.data.length > 0) {
              const firstRowKeys = Object.keys(results.data[0]);

              tableColumns = firstRowKeys.map((key) => ({
                name: key,
                label: key.toUpperCase(),
                field: key,
                align: 'left',
                sortable: true,
              }));
            }

            // Resolve the promise to pass variables out of the callback scope
            resolve({ tableRows, tableColumns });
          },
          error: (error: Error) => {
            reject(error);
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  return {
    compressAndDownloadCSV,
    loadAndDecompressLocalCsv,
  };
}
