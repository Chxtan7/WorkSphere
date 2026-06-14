import { Request, Response } from 'express';
import { healthService } from './health.service';
import { ApiResponse } from '@core/Responses/apiesponse';

export const getHealth = (_req: Request, res: Response) => {
    const result = healthService.checkHealth();
    return res.status(200).json(
        new ApiResponse(
            "Service is healty!",
            result
        )
    )
}