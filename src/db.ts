import { Pool } from "pg";

export const pool = new Pool({
    connectionString: "postgresql://user:password@localhost:5432/plany"
});

pool.on('error', (err, _client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});