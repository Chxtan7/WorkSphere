import { Request, Response, NextFunction } from "express";
import { AppErrors } from "@core/Errors/appError";
import { logger } from "@infra/logger/logger";

export const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    logger.error(error.message);

    if (error instanceof AppErrors) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message
        })
    }

    return res.status(500).json({
        success: false,
        message: "Internal server error!"
    })
}