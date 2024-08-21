import { Request, Response } from "express";
import { readCSVWithFillters } from "../helpers/fsFunctions";
import { RecallData } from "../types/types";
export class RecallService {

    static async getRecalls(req: Request, res: Response) {
        try {
            const { from_ts, to_ts } = req.query;
            const filePath = "./db/recall_data.csv";
            const fromDate = typeof from_ts === 'string' ? from_ts : null;
            const toDate = typeof to_ts === 'string' ? to_ts : null;

            const response: any = await readCSVWithFillters(filePath,fromDate,toDate);
            const mappedData = response.map((elem:any)=>RecallService.mapRecallData(elem));
            setTimeout(()=>{
                res.json(mappedData);
            },3000)
        } catch (error){
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static mapRecallData = (resposeData: any): RecallData => {
        return {
          date: resposeData.date,
          recall: resposeData.recall
        };
    };
}