// utils.js
const { body, validationResult } = require('express-validator');
const dba = require("../database/db_mongo");
const jwt = require("jsonwebtoken");
const col = dba.collection('users');

/**
 * Módulo de constantes HTTP
 * @module HttpConstants
 */

/**
 * Código de estado HTTP 200 OK.
 * @constant {number}
 * @default
 */
const HTTP_OK = 200;

/**
 * Código de estado HTTP 400 Bad Request.
 * @constant {number}
 * @default
 */
const HTTP_BAD_REQUEST = 400;

/**
 * Código de estado HTTP 401 Unauthorized.
 * @constant {number}
 * @default
 */
const HTTP_UNAUTHORIZED = 401;

/**
 * Código de estado HTTP 500 Internal Server Error.
 * @constant {number}
 * @default
 */
const HTTP_INTERNAL_SERVER_ERROR = 500;

/**
 * Código de estado HTTP 404 Not Found.
 * @constant {number}
 * @default
 */
const HTTP_NOT_FOUND = 404;

/**
 * Obtiene los errores de validación de una solicitud.
 *
 * @param {object} req - La solicitud que se desea validar.
 * @returns {array} - Un array que contiene los errores de validación.
 */
function getValidationErrors(req) {
  return validationResult(req);
}

/**
 * Middleware de validación
 * 
 * Este middleware se encarga de validar los campos de usuario y contraseña en una solicitud.
 * Si alguno de los campos no cumple con los criterios de validación, se generará un mensaje de error.
 * 
 * @param {Object} req - El objeto de solicitud Express.
 * @param {Object} res - El objeto de respuesta Express.
 * @param {Function} next - La función de siguiente middleware en la cadena.
 * @returns {void}
 */
const validationMiddleware = [
  body('nombre').trim().notEmpty().withMessage('El campo nombre es requerido'),
  body('contraseña').trim().notEmpty().withMessage('El campo contraseña es requerido')
];

/**
 * Maneja los errores de validación y responde con un mensaje si existen errores.
 *
 * @param {array} errors - Un array de errores de validación.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta.
 * @returns {object} - La respuesta con el mensaje de error si existen errores de validación.
 */
function handleValidationErrors(errors, res) {
  if (!errors.isEmpty()) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'Por favor, completa todos los campos requeridos para acceder al sistema. Gracias.' });
  }
}

/**
 * Autenticar al usuario mediante credenciales proporcionadas y generar un token JWT en caso de éxito.
 * @param {object} req - Objeto de solicitud HTTP que contiene la información de la solicitud.
 * @param {Collection} col - Colección de la base de datos donde se buscarán los datos de usuario.
 * @returns {object} - Un objeto que contiene el estado de la respuesta y, en caso de éxito, un token JWT.
 * @throws {Error} - Puede lanzar errores si hay problemas durante el proceso de autenticación.
 */
async function authenticateUser(req, col) {
  const jwtSecret = req.app.get("jwtSecret");
  const { nombre, contraseña, rol } = req.body;  // Cambio de "usuario" a "nombre"
  const userData = await col.find({ nombre: req.body.nombre, contraseña: req.body.contraseña, rol: req.body.rol }).toArray(); // Cambio de "usuario" a "nombre"

  if (userData.length > 0) {
    const token = jwt.sign({ nombre: userData[0].nombre, rol: userData[0].rol }, jwtSecret, { expiresIn: '5h' }); // Cambio de "usuario" a "nombre"
    return { status: HTTP_OK, response: { nombre: userData[0].nombre, rol: userData[0].rol, token } };
  } else {
    return { status: HTTP_UNAUTHORIZED, response: { message: 'Credenciales inválidas. Por favor, verifica tu usuario y clave.' } };
  }
}

const createNewsMiddleware = [
  body('title').trim().notEmpty().withMessage('El campo title es requerido'),
  body('subtitle').trim().notEmpty().withMessage('El campo subtitle es requerido'),
  body('description').trim().notEmpty().withMessage('El campo description es requerido'),
  body('fotoFileNewsPath').trim().notEmpty().withMessage('El campo image es requerido'),
];

const createSlider = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const fotoFileNewsPath = req.file?.path;
    const publishDate = new Date();
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const sliderItem = { title, subtitle, description, image: fotoFileNewsPath, publishDate };
    await dba.collection('slider').insertOne(sliderItem);
    res.json({ message: 'Contenido agregado al slider exitosamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).send();
  }
}

const createNews = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const formattedDescription = `<div>${description}</div>`;
    const fotoFileNewsPath = req.file?.path;
    const publishDate = new Date();
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const nuevaNoticia = { title, subtitle, description: formattedDescription, image: fotoFileNewsPath, publishDate };
    await dba.collection("news").insertOne(nuevaNoticia);
    res.json({ message: 'Noticia creada con éxito.' });
  } catch (error) {
    console.error(error);
    return res.status(500).send();
  }
};

const createLifestyle = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const fotoFileNewsPath = req.file?.path;
    const publishDate = new Date();
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const nuevaNoticia = { title, subtitle, description, image: fotoFileNewsPath, publishDate };
    await dba.collection("lifestyle").insertOne(nuevaNoticia);
    res.json({ message: 'Noticia de Estilo de Vida creada con éxito.' });
  } catch (error) {
    console.error(error);
    return res.status(500).send();
  }
};

const createSports = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const fotoFileNewsPath = req.file?.path;
    const publishDate = new Date();
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const nuevaNoticia = { title, subtitle, description, image: fotoFileNewsPath, publishDate };
    await dba.collection("sports").insertOne(nuevaNoticia);
    res.json({ message: 'Noticia de Deportes creada con éxito.' });
  } catch (error) {
    console.error(error);
    return res.status(500).send();
  }
};

const createEntertainment = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const fotoFileNewsPath = req.file?.path;
    const publishDate = new Date();
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const nuevaNoticia = { title, subtitle, description, image: fotoFileNewsPath, publishDate };
    await dba.collection("entertainment").insertOne(nuevaNoticia);
    res.json({ message: 'Noticia de Entretenimiento creada con éxito.' });
  } catch (error) {
    console.error(error);
    return res.status(500).send();
  }
};


async function actualizarUsuario(dba, userId, userData) {
  const { nombre, email, país, departamento, ciudad, contraseña, rol } = userData;
  if (!validator.isEmail(email)) throw new Error('El correo electrónico no es válido.');
  const existingUser = await dba.collection('users').findOne({ _id: new ObjectId(userId) });
  if (!existingUser) throw new Error('Usuario no encontrado.');

  const updatedUser = {
    nombre: nombre || existingUser.nombre,  email: email || existingUser.email,
    país: país || existingUser.país,  departamento: departamento || existingUser.departamento,
    ciudad: ciudad || existingUser.ciudad, contraseña: contraseña || existingUser.contraseña,
    rol: rol || existingUser.rol
  };
  await dba.collection('users').updateOne({ _id: new ObjectId(userId) }, { $set: updatedUser }, { upsert: true });
  return { message: 'Usuario actualizado exitosamente' };
}


module.exports = {
  HTTP_OK,
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
  HTTP_INTERNAL_SERVER_ERROR,
  HTTP_NOT_FOUND,
  getValidationErrors,
  validationMiddleware,
  handleValidationErrors,
  authenticateUser,
  createNewsMiddleware,
  createSlider,
  createNews,
  createLifestyle,
  createSports,
  createEntertainment,
  actualizarUsuario
};
