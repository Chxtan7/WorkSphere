import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import compression from "compression";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(cookieParser())

app.use(express.json())

app.get('/ticket', (_req, res) => {
    res.json({ success: true, message: "Server up and runnung" })
})

export default app;