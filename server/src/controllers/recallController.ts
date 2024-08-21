import express from "express";
import { RecallService } from "../services/recallService";

const router = express.Router();

router.get('/',RecallService.getRecalls);

export default router;