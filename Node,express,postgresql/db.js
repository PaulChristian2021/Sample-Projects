const {Pool} = require('pg');

const pool = new Pool({
  user: 'paul',
  host: 'localhost',
  database: 'students',
  password: 'paul',
  port: 5432,
})


module.exports = pool;