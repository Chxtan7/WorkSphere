import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import compression from "compression";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "@middleware/error.middleware";
import router from "@modules/Health/health.route";

const app = express();

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(cookieParser())

app.use(express.json())

app.use('/health', router)

app.use(errorMiddleware)
export default app;