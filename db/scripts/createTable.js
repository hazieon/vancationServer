const { query } = require("../index.js");

const sqlStatement = `
DROP TABLE IF EXISTS vancations;
CREATE TABLE IF NOT EXISTS vancations(
    id SERIAL PRIMARY KEY,
    uuid VARCHAR,
    lat INTEGER,
    lng INTEGER,
    address VARCHAR DEFAULT 0000,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    details VARCHAR
    )`;

const createTable = async () => {
  const result = await query(sqlStatement)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
};
createTable();

//note to self: remember to run script from the ROOT directory else dotenv doesn't work
//node -r dotenv/config db/scripts/populateTable.js  from root folder

// query(sqlStatement, (err, res) => {
//   if (err) {
//     console.log(err.stack);
//   } else {
//     console.log(res.rows[0]);
//   }
// });

// async function createTable() {
//   const result = await query(sqlStatement)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
