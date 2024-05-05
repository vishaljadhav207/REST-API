import { config as conf } from "dotenv"
conf(); // Load environment variables from .env into process.env


const _config = {
port: process.env.PORT,
}

export const config = Object.freeze(_config)
//Object.freeze(_config) this will make read only object