const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");

/**
 * @name getUsers
 * @description Obtiene la lista de usuarios desde la base de datos y la retorna en formato JSON
 * @param {object} req - El objeto request de la solicitud HTTP
 * @param {object} res - El objeto response de la solicitud HTTP
 * @param {function} next - La siguiente función middleware en la cadena de solicitud-respuesta
 * @returns {object} Objeto JSON con la lista de usuarios
 */
router.get("/listaUsuarios", async (req, res, next) => {
  try {
    const usersCollection = dba.collection("users"); // Cambia "usuarios" al nombre de tu colección
    const users = await usersCollection.find().toArray();
    res.json({ data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la lista de usuarios" });
  }
});

module.exports = router;
