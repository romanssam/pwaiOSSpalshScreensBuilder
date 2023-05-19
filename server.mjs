import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(cors({
  origin: `http://localhost:${process.env.PORT}`
}));

app.options("*", cors());

app.get('/', async (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.use(express.static('./public'))

app.listen(process.env.PORT, () => console.log(`server started at ${process.env.PORT} port, http://localhost:${process.env.PORT}`))