export class HealthService {
    checkHealth() {
        return {
            status: "Healty!",
            uptime: process.uptime(),
            timeStamp: new Date
        }
    }
}

export const healthService = new HealthService()