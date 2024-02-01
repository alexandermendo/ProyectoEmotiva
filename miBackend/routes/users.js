const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const validator = require('validator'); 
const jwt = require('jsonwebtoken');

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
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la lista de usuarios" });
  }
});


router.post('/agregarUsuario', async (req, res) => {
  try {
    const { nombre, email, país, departamento, ciudad, contraseña, rol } = req.body;
    if (!validator.isEmail(email)) return res.status(400).json({ message: 'El correo electrónico no es válido.' });
    const existingUser = await dba.collection('users').findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'El usuario ya existe.' });
    const fechaHoraRegistro = new Date();
    const newUser = { nombre, email, país, departamento, ciudad, contraseña, rol };
    await dba.collection('users').insertOne(newUser);
    const jwtSecret = req.app.get('jwtSecret');
    const token = jwt.sign({ email, rol }, jwtSecret, { expiresIn: '5h' });
    const historyData = { nombre, email, país, departamento, ciudad, contraseña, rol, fechaHoraRegistro };
    await dba.collection('history').insertOne(historyData);
    res.status(201).json({ message: 'Usuario agregado exitosamente', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


module.exports = router;
