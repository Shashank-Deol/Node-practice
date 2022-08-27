import { pool } from './pool';

class ModelScoring {
    constructor(table) {
        this.pool = pool;
        this.table = table;
        this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
    }

    async select() {
        let query = `SELECT * FROM "${this.table}"`;
        return this.pool.query(query);
    }

    async selectByColumn(columnVal) {
        let query = `SELECT * FROM "${this.table}" WHERE id=${columnVal}`;
        console.log(query);
        return pool.query(query);
    }

    async insertWithReturn(columns, values) {
        const query = `
              INSERT INTO "${this.table}"(${columns})
              VALUES (${values})
              RETURNING id, ${columns}
          `;
        return this.pool.query(query);
    }
}

export default ModelScoring;