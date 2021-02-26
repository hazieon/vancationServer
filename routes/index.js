var express = require("express");
var router = express.Router();

const {
  getAllVancations,
  getVancationById,
  getVancationByLatLng,
  addVancation,
  removeVancation,
  removeVancationById,
  updateVancation,
} = require("../models/data");

/* GET home page. */
router.get("/", async function (req, res, next) {
  // res.render("index", { title: "Express" });
  try {
    const result = await getAllVancations();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await getVancationById(id);
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:location", async function (req, res, next) {
  try {
    const location = req.params.location;
    const result = await getVancationByLatLng(location);
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    console.log("post vancation");
    const { body } = req;
    console.log(body);
    const data = await addVancation(body);
    console.log(data);
    res.json({ message: `Added a new Vancation spot` });
  } catch (err) {
    console.log(err);
  }
});

router.delete(":location", async function (req, res, next) {
  try {
    const location = req.params.location;
    const deleted = await removeVancation(location);
    res.json({ success: true });
    console.log("deleted spot");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const deleted = await removeVancationById(id);
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
    console.log(id);
    const result = await updateVancation(id, body);
    res.json({ success: true });
    console.log("patched vancation");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
