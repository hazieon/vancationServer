var express = require("express");
var router = express.Router();

const {
  getAllWysteria,
  getWysteriaById,
  getWysteriaByLat,
  addWysteria,
  removeWysteria,
  removeWysteriaById,
  updateWysteria,
} = require("../models/data");

/* GET home page. */
router.get("/", async function (req, res, next) {
  // res.render("index", { title: "Express" });
  try {
    const result = await getAllWysteria();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await getWysteriaById(id);
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:lat", async function (req, res, next) {
  try {
    const lat = req.params.lat;
    const result = await getWysteriaByLat(lat);
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    console.log("post Wysteria");
    const { body } = req;
    console.log(body);
    const data = await addWysteria(body);
    console.log(data);
    res.json({ message: `Added a new Wysteria spot` });
  } catch (err) {
    console.log(err);
  }
});

router.delete(":lat", async function (req, res, next) {
  try {
    const lat = req.params.lat;
    const deleted = await removeWysteria(lat);
    res.json({ success: true });
    console.log("deleted spot");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const deleted = await removeWysteriaById(id);
    res.json({ success: true });
    console.log("deleted spot");
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:id", async function (req, res, next) {
  try {
    const { body } = req;
    const { id } = req.params;
    const result = await updateWysteria(id, body);
    res.json({ success: true });
    console.log("patched Wysteria");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
