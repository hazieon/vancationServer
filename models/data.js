const { query } = require("../db/index");
const { v4: uuidv4 } = require("uuid");

async function getAllWysteria() {
  const result = await query(`SELECT * FROM Wysterias`);
  return result.rows;
}

async function getWysteriaById(id) {
  const result = await query(`SELECT * FROM Wysterias WHERE id = $1`, [id]);
  return result.rows[0];
}

async function getWysteriaByLat(lat) {
  const result = await query(`SELECT * FROM Wysterias WHERE lat = $1`, [lat]);
}

async function addWysteria(spot) {
  const { uuid = uuidv4(), lat, lng, address, date, details } = spot;
  const result = await query(
    `INSERT INTO Wysterias(uuid, lat, lng, address, date, details) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
    [uuid, lat, lng, address, date, details]
  );
  return result.rows[0];
}

async function removeWysteria(lat) {
  const result = await query(
    `DELETE FROM Wysterias WHERE lat = $1 RETURNING address`,
    [lat]
  );
  console.log(result.rows);
}

async function removeWysteriaById(id) {
  const result = await query(`DELETE FROM Wysterias WHERE uuid = $1`, [id]);
  console.log(result.rows[0]);
}

async function updateWysteria(id, spot) {
  const { uuid, lat, lng, address, date, details } = spot;
  const result = await query(
    `UPDATE Wysterias SET uuid = COALESCE($2, uuid), lat = COALESCE($3, lat), lng = COALESCE($4, lng), address = COALESCE($5, address), date= COALESCE($6, date), details= COALESCE($7, details) WHERE id = $1 RETURNING *`,
    [id, uuid, lat, lng, address, date, details]
  );
  return result.rows[0];
}
module.exports = {
  getAllWysteria,
  getWysteriaById,
  getWysteriaByLat,
  addWysteria,
  removeWysteria,
  removeWysteriaById,
  updateWysteria,
};
