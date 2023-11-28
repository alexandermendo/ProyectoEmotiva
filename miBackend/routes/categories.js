const express = require("express");
const path = require('path');
const router = express.Router();
const { fileRead, fileWrite } = require("../routes/getDataFromFile");
const execSQL = require("../database/db_sql");
const { HTTP_NOT_FOUND, HTTP_INTERNAL_SERVER_ERROR } = require("../common/utils");

router.get("/getCategory", async (req, res) => {
  try {
    const sqlFilePath = path.join(__dirname, "getCategories.sql");
    const sqlQuery = await fileRead(sqlFilePath)
    const result = await execSQL(sqlQuery);
    if (result.length > 0) res.json(result);
    else res.status(HTTP_NOT_FOUND).json({ message: "No se encontraron resultados" });
  } catch (error) {
    console.error("Error al ejecutar la consulta SQL:", error);
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: "Error al ejecutar la consulta SQL" });
  }
});

module.exports = router;