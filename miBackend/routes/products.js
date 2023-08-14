const { fileRead } = require("./getDataFromFile");
const execSQL = require("../database/db_sql");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  let productsSQL = await execSQL((await fileRead(__dirname + "\\products.sql")));
  res.json({ data: productsSQL });
});





module.exports = router;