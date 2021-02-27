const { query } = require("../db/index");

async function getAllVancations() {
  const result = await query(`SELECT * FROM vancations`);
  return result.rows;
}

async function getVancationById(id) {
  const result = await query(`SELECT * FROM vancations WHERE id = $1`, [id]);
  return result.rows[0];
}

async function getVancationByLat(lat) {
  const result = await query(`SELECT * FROM vancations WHERE lat = $1`, [
    lat,
  ]);
}

async function addVancation(spot) {
  const { uuid, lat, lng, address, date, details } = spot;
  const result = await query(
    `INSERT INTO vancations(uuid, lat, lng, address, date, details) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
    [uuid, lat, lng, address, date, details]
  );
  return result.rows[0];
}

async function removeVancation(lat) {
  const result = await query(
    `DELETE FROM vancations WHERE lat = $1 RETURNING address`,
    [lat]
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
  const { uuid, lat, lng, address, date, details } = spot;
  const result = await query(
    `UPDATE vancations SET uuid = COALESCE($2, uuid), lat = COALESCE($3, lat), lng = COALESCE($4, lng), address = COALESCE($5, address), date= COALESCE($6, date), details= COALESCE($7, details) WHERE id = $1 RETURNING *`,
    [id, uuid, lat, lng, address, date, details]
  );
  return result.rows[0];
}
module.exports = {
  getAllVancations,
  getVancationById,
  getVancationByLat,
  addVancation,
  removeVancation,
  removeVancationById,
  updateVancation,
};
