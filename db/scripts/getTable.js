const { query } = require("../index.js");

const sqlStatement = `
SELECT * FROM vancations`;

const getTable = async () => {
  const result = await query(sqlStatement);
  console.log(result);
};
getTable();
