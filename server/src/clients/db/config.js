import dotenv  from "dotenv"

// TODO: Correctly import dotenv/config
// dotenv.config()

export const DATABASE_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD|| 'senharoot',
  database: process.env.DB_DATABASE || 'app',
}

