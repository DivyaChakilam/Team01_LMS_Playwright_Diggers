const readXlsxFile = require('read-excel-file/node');
const path = require('path');

async function readExcelSheet(filePath, sheetName) {
  try {
    // Resolve the full path to the Excel file
    const absolutePath = path.resolve(filePath);

    // Read the specified sheet from the Excel file
    const rows = await readXlsxFile(absolutePath, { sheet: sheetName });

    // Return the rows of the sheet
    return rows;
  } catch (error) {
    console.error(`Error reading sheet "${sheetName}" from file "${filePath}":`, error);
    throw error;
  }
}
/*
const readXlsxFile = require('read-excel-file/node');
const path = require('path');

async function processScenarioData(filePath, sheetName, scenarioName) {
  try {
    // Resolve the full path to the Excel file
    const absolutePath = path.resolve(filePath);

    // Read the specified sheet from the Excel file
    const rows = await readXlsxFile(absolutePath, { sheet: sheetName });

    // Extract the header row
    const header = rows[0];

    // Define the index for the 'ScenarioName' column
    const scenarioIndex = header.indexOf('ScenarioName');
    if (scenarioIndex === -1) {
      throw new Error(`'ScenarioName' column not found in sheet "${sheetName}"`);
    }

    // Filter rows based on the scenario name
    const scenarioRows = rows.slice(1).filter(row => row[scenarioIndex] === scenarioName);

    // Process each scenario row
    scenarioRows.forEach(row => {
      // Map row data to an object with column names as keys
      const rowData = header.reduce((acc, col, index) => {
        acc[col] = row[index];
        return acc;
      }, {});

      // Implement your scenario-specific logic here
      console.log(`Processing ${scenarioName}:`, rowData);
      // For example, validate or transform data as needed
    });
  } catch (error) {
    console.error(`Error processing scenario "${scenarioName}" in sheet "${sheetName}":`, error);
  }
}

// Example usage:
(async () => {
  const filePath = 'path/to/your-excel-file.xlsx';
  const sheetName = 'Sheet1';
  const scenarioName = 'MandatoryDetails'; // Replace with the desired scenario name

  await processScenarioData(filePath, sheetName, scenarioName);
})();
*/