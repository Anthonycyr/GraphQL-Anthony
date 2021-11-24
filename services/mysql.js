const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, key) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql);

  return results[0][key];
}

module.exports = {
  query
};