import { env } from "@config/env.config";
import app from "./app";
import { logger } from "@infra/logger/logger";
import { connectDataBase } from "@database/connection"

const startServer = async () => {
    await connectDataBase();

    app.listen(env.PORT, () => {
        logger.info(`Server running on port ${env.PORT}`)
    })
}

startServer()