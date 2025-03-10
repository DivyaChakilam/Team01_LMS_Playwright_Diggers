import fs from 'fs';
import path from 'path'
import { parse } from 'csv-parse/sync';

export const records=parse(
    fs.readFileSync(path.join(__dirname,"../Testdata/testdata - Invalid data.csv")),
    {
      columns:true,
      skip_empty_lines:true
    }
  )