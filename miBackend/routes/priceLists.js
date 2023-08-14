const { fileRead } = require("./getDataFromFile");
const execSQL = require("../database/db_sql");
const express = require("express");
const router = express.Router();

/**
 * @name getPriceLists
 * @description Obtiene la lista de precios desde una base de datos MSSQL
 * @param {object} req - El objeto request de la solicitud HTTP
 * @param {object} res - El objeto response de la solicitud HTTP
 * @param {function} next - La siguiente función middleware en la cadena de solicitud-respuesta
 * @returns {object} Objeto JSON con los datos de la lista de precios
 */
router.get("/pricelists", async (req, res, next) => {
    try {
        const priceLists = await execSQL(await fileRead(__dirname + "/PriceLists.sql"));
        res.json({ data: priceLists });
        console.log(priceLists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener la lista de precios" });
    }
});

module.exports = router;