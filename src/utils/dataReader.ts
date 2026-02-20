import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function readCSV(filename: string) {
  const absolutePath = path.resolve(process.cwd(),"src/testData/csvTestData/"+filename);
  const fileContent = fs.readFileSync(absolutePath, {
    encoding: 'utf-8'
  });

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    bom: true,
    trim: false
  });

  return records;
}

