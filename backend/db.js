import dotenv from 'dotenv';
dotenv.config()

import {Pool} from 'pg';

const pool = new Pool({
    user:process.env.USER,
    password:process.env.PASSWORD,
    host:"localhost",
    port:process.env.DB_PORT,
    database:"tododb",
})

export default pool;