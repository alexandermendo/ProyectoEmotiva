const express = require("express");
const router = express.Router();
const execSQL = require("../database/db_sql");
const { fileRead } = require("./getDataFromFile");

/**
 * @name getClientData
 * @description Obtiene los datos de los clientes y los retorna en formato JSON
 * @param {object} req - El objeto request de la solicitud HTTP
 * @param {object} res - El objeto response de la solicitud HTTP
 * @param {function} next - La siguiente función middleware en la cadena de solicitud-respuesta
 * @returns {object} Objeto JSON con los datos de los clientes
 */
router.get("/listaClientes", async (req, res, next) => {
  try {
    const customers = await execSQL(await fileRead(__dirname + "/customers.sql"));
    res.json({ data: customers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los datos de los clientes" });
  }
});

module.exports = router;
