import { env } from "@config/env.config";
import app from "./app";

app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`)
})