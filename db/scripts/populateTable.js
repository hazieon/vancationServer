const { query } = require("../index.js");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
// location: { lat: -1.2884, lng: 36.8233 },
// location: { lat: 52.52011994421292, lng: -1.4640778962357217 },
// location: { lat: 52.0507548306133, lng: -1.7856869475872172 },
const presetData = [
  {
    uuid: uuidv4(),
    lat: -3.745,
    lng: -38.523,
    address:
      "Rua Doutor João de Deus, 28, 60040-350, Fortaleza Fátima Fortaleza, Brasil",
    date: "2020-12-21 11:30:00",
    details: {
      free: true,
      "Pink flowers": true,
      "White flowers": true,
      "Car parking available": true,
      "Multiple trees": true,
    },
  },

  {
    uuid: uuidv4(),
    lat: 52.52011994421292,
    lng: -1.4640778962357217,
    address: "Nuneaton, CV11, England United Kingdom",
    date: "2021-1-29 17:00:00",
    details: {
      free: true,
      "Purple flowers": true,
      "Car parking available": true,
      "In a gardens": true,
      "Picnic nearby possible": true,
    },
  },
  {
    uuid: uuidv4(),
    lat: 52.0507548306133,
    lng: -1.7856869475872172,
    address: "Back Ends, Chipping Campden, GL55 6AA, England United Kingdom",
    date: "2020-9-20 17:00:00",
    details: {
      free: true,
      "White flowers": true,
      "Car parking available": true,
      "Multiple trees": true,
      "In a gardens": true,
      "Picnic nearby possible": true,
    },
  },
];

const sql = `INSERT INTO wysteria(uuid, lat, lng, address, date, details) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;

const populateTable = async () => {
  for (let i = 0; i < presetData.length; i++) {
    let current = presetData[i];
    let res = await query(sql, [
      current.uuid,
      current.lat,
      current.lng,
      current.address,
      current.date,
      current.details,
    ]);
    console.log(res.rows);
  }
};

populateTable();
