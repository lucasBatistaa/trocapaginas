import 'dotenv/config'
import postgres from 'postgres'

//conectando banco no localhost
/*const {Client} = require('pg');

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

client.connect() */
/*client.query(`select * from users`, (err, res) => {
    if(!err) {
        console.log('conectado');
    
    }else {
        console.log(err.message);
    }

    client.end;
});*/

//conectando banco no neon
// app.js

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


