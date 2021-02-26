const { Pool } = require("pg");
// require("dotenv").config();
// console.log(process.env.PGDATABASE_URL, "env config");
const pool = new Pool({
  connectionString: process.env.PGDATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });
//probably can get rid of client
// const client = new Client(pool);

// client.connect();
// client.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   client.end();
// });

module.exports = {
  query: function (text, params, callback) {
    return pool.query(text, params, callback);
  },
  close: function () {
    return pool.end();
  },
};
