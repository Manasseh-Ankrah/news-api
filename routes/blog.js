const express = require("express");
const router = express.Router();
const data = require("./data");

router.get("/", async (req, res) => {
  res.status(200).json(data);
});

module.exports = router;
