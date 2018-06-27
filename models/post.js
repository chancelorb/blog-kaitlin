const db = require('../config/connection');

function getAll() {
  return db.any(`
    SELECT * FROM posts
    ORDER BY time DESC
    `);
}

module.exports = {
  getAll
}
