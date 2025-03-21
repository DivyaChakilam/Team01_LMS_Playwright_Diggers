import fs from 'fs';
import path from 'path'
import { parse } from 'csv-parse/sync';

//Read and parse csv file
export const records=parse(
    fs.readFileSync(path.join(__dirname,"../Testdata/Playwright_LMS_Team01_Testdata - Login_Invaliddata.csv")),
    {
      columns:true,
      skip_empty_lines:true
    }
  )