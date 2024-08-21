import express, { Express } from "express";
import cors from "cors";
import recallRouter from './controllers/recallController';

const bodyParser = require('body-parser');

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/recall',recallRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});