const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const jwt = require("jsonwebtoken");
const col = dba.collection('users');

/**
 * @name loginUser
 * @description Permite a un usuario iniciar sesión
 * @param {object} req - El objeto request de la solicitud HTTP
 * @param {object} res - El objeto response de la solicitud HTTP
 * @param {function} next - La siguiente función middleware en la cadena de solicitud-respuesta
 * @returns {object} Objeto JSON con el resultado del inicio de sesión
 */
router.post("/", async (req, res, next) => {
  try {
    const jwtSecret = req.app.get("jwtSecret");
    const userData = await col.find({ usuario: req.body.usuario, contraseña: req.body.contraseña }).toArray();
    if (userData.length > 0) {
      res.json({ token: jwt.sign({ usuario: userData[0].usuario }, jwtSecret, { expiresIn: '5h' }) });
    } else {
      res.status(401).json({ message: 'Usuario o Clave Incorrecta' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
