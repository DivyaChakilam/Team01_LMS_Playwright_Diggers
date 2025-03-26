const ExcelJS = require('exceljs');
const path = require('path');

async function excelReader(filePath, sheetName, scenarioName) {
  try {
    // Resolve file path
    const absolutePath = path.resolve(filePath);

    // Load the workbook
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(absolutePath);

    // Get the specified sheet
    const worksheet = workbook.getWorksheet(sheetName);
    if (!worksheet) {
      throw new Error(`Sheet "${sheetName}" not found in the Excel file.`);
    }

    // Get the header row
    const headerRow = worksheet.getRow(1);
    const headers = headerRow.values.slice(1); // Remove empty first value

    // Find the column index of "ScenarioName"
    const scenarioIndex = headers.indexOf('ScenarioName') + 1;
    if (scenarioIndex === 0) {
      throw new Error(`"ScenarioName" column not found in sheet "${sheetName}".`);
    }

    // Find the row where the scenario matches
    let scenarioData = null;
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) { // Skip header row
        const cellValue = row.getCell(scenarioIndex).value;
        if (cellValue === scenarioName) {
          // Convert row to an object
          scenarioData = headers.reduce((acc, colName, index) => {
            acc[colName] = row.getCell(index + 1).value; // +1 since Excel columns start from 1
            return acc;
          }, {});
        }
      }
    });

    if (!scenarioData) {
      throw new Error(`No data found for ScenarioName: "${scenarioName}".`);
    }

    return scenarioData;
  } catch (error) {
    console.error(`Error reading data for scenario "${scenarioName}":`, error);
    throw error;
  }
}

module.exports = { excelReader };
