const { query } = require("../index.js");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const presetData = [
  {
    uuid: uuidv4(),
    location: { lat: -1.2884, lng: 36.8233 },
    address: "Nairobi, City Square, Nairobi, Kenya",
    date: "2021-01-29 21:30:00",
    details: {
      free: true,
      "Green space": true,
      "Dog friendly": true,
      "Near shops": true,
      "Public bathrooms": true,
      "Flat parking": true,
      "Away from traffic": true,
    },
  },
  {
    uuid: uuidv4(),
    location: { lat: -3.745, lng: -38.523 },
    address:
      "Rua Doutor João de Deus, 28, 60040-350, Fortaleza Fátima Fortaleza, Brasil",
    date: "2020-12-21 11:30:00",
    details: {
      free: true,
      "Green space": true,
      "Dog friendly": true,
      "Near shops": true,
      "Near petrol stn": true,
      "Away from traffic": true,
    },
  },
  {
    uuid: uuidv4(),
    location: { lat: 52.52011994421292, lng: -1.4640778962357217 },
    address: "Nuneaton, CV11, England United Kingdom",
    date: "2021-1-29 17:00:00",
    details: {
      free: true,
      "Flat parking": true,
      "Green space": true,
      "Near petrol stn": true,
      "Near shops": true,
      "Public bathrooms": true,
      "Safe/Secure": true,
    },
  },
  {
    uuid: uuidv4(),
    location: { lat: 52.0507548306133, lng: -1.7856869475872172 },
    address: "Back Ends, Chipping Campden, GL55 6AA, England United Kingdom",
    date: "2020-9-20 17:00:00",
    details: {
      free: true,
      Stealthy: true,
      "Green space": true,
      "Dog friendly": true,
      "Near shops": true,
      "Safe/Secure": true,
      "Away from traffic": true,
    },
  },
];

const sql = `INSERT INTO vancations(uuid, location, address, date, details) VALUES($1, $2, $3, $4, $5) RETURNING *`;

const populateTable = async () => {
  for (let i = 0; i < presetData.length; i++) {
    let current = presetData[i];
    let res = await query(sql, [
      current.uuid,
      current.location,
      current.address,
      current.date,
      current.details,
    ]);
    console.log(res.rows);
  }
};
// const populateTable = async () => {
//   const result = await query(sqlStatement)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
populateTable();
