const express = require("express");
const router = express.Router();

const Drink = require("../models/drink");

router.get("/", (req, res, next) => {
  res.send("Omomo Clone API index page");
});

router.get("/drinks", async (req, res, next) => {
  const drinks = await Drink.find({});
  res.json(drinks);
});

module.exports = router;
