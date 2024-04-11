import 'dotenv/config'
import postgres from 'postgres'

export const sql = postgres({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: 'require',
  connection: {
    options: `project=${process.env.ENDPOINT_ID}`,
  },
});


