const { query } = require("../index.js");
require("dotenv").config();
console.log(env);

const sqlStatement = `
SELECT * FROM wysteria`;

const getTable = async () => {
  const result = await query(sqlStatement);
  console.log(result);
};
getTable();
