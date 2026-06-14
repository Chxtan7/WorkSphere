import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.resolve(__dirname, "../../.env")});

const requiredEnvVariable = [
    "PORT",
    "NODE_ENV",
    "MONGO_URI"
]

requiredEnvVariable.forEach((variable) => {
    if (!process.env[variable]) throw new Error(`Missing env variable: ${variable}`);
})

export const env = {
    PORT: Number(process.env.PORT),
    ENVIRONMENT: process.env.NODE_ENV,
    APP_NAME: process.env.APP_NAME,
    MONGO_URI : String(process.env.MONGO_URI)
}