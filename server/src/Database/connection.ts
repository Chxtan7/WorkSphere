import { env } from "@config/env.config";
import { logger } from "@infra/logger/logger";
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
export const connectDataBase = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);

        logger.info("Database connection successful!")
    } catch (error) {
        logger.error(`MongoDB connection Failed: ${error instanceof Error ? error.message : String(error)}`)
        process.exit(1)
    }
}