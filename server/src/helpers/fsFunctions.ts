import fs from "fs";
import csv from "csv-parser";

export function readCSVWithFillters(filePath: string, fromDate: string | null, toDate: string | null) {
  return new Promise((resolve, reject) => {

    const results: any[] = [];
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const rowDate = new Date(row.date)

        const isAfterFrom = from ? rowDate >= from : true;
        const isBeforeTo = to ? rowDate <= to : true;

        if (isAfterFrom && isBeforeTo) {
          results.push(row);
        }
      })
      .on('end', () => {
        resolve(results)
      })
      .on('error', (error) => {
        reject(error);
    });
  })
}