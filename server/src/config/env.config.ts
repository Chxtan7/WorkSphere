import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVariable = [
    "PORT",
    "NODE_ENV"
]

requiredEnvVariable.forEach((variable) => {
    if (!process.env[variable]) throw new Error(`Missing env variable: ${variable}`);
})

export const env = {
    PORT: Number(process.env.PORT),
    ENVIONMENT: process.env.NODE_ENV,
    APP_NAME: process.env.APP_NAME
}