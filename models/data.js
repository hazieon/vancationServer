const { query } = require("../db/index");

async function getAllVancations() {
  const result = await query(`SELECT * FROM vancations`);
  return result.rows;
}

async function getVancationById(id) {
  const result = await query(`SELECT * FROM vancations WHERE id = $1`, [id]);
  return result.rows[0];
}

async function getVancationByLatLng(location) {
  const result = await query(`SELECT * FROM vancations WHERE location = $1`, [
    location,
  ]);
}

async function addVancation(spot) {
  const { uuid, location, address, date, details } = spot;
  const result = await query(
    `INSERT INTO vancations(uuid, location, address, date, details) VALUES($1, $2, $3, $4, $5) RETURNING *`,
    [uuid, location, address, date, details]
  );
  return result.rows[0];
}

async function removeVancation(location) {
  const result = await query(
    `DELETE FROM vancations WHERE location = $1 RETURNING address`,
    [location]
  );
  console.log(result.rows);
}

async function removeVancationById(id) {
  const result = await query(
    `DELETE FROM vancations WHERE id = $1 RETURNING address`,
    [id]
  );
  console.log(result.rows[0]);
}

async function updateVancation(id, spot) {
  const { uuid, location, address, date, details } = spot;
  const result = await query(
    `UPDATE vancations SET uuid = COALESCE($2, uuid), location = COALESCE($3, location), address = COALESCE($4, address), date = COALESCE($5, date), details= COALESCE($6, details) WHERE id = $1 RETURNING *`,
    [id, uuid, location, address, date, details]
  );
  return result.rows[0];
}
module.exports = {
  getAllVancations,
  getVancationById,
  getVancationByLatLng,
  addVancation,
  removeVancation,
  removeVancationById,
  updateVancation,
};
