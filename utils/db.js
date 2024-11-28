import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    password: 'taqwa2',
    host: 'localhost',
    port: 5432,
    database: 'coffee_ms',
});

export default pool;