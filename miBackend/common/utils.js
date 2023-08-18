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
  body('usuario').trim().notEmpty().withMessage('El campo usuario es requerido'),
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
  const { usuario, contraseña } = req.body;  
  const userData = await col.find({ usuario: req.body.usuario, contraseña: req.body.contraseña }).toArray();
  
  if (userData.length > 0) {
      const token = jwt.sign({ usuario: userData[0].usuario, rol: userData[0].rol }, jwtSecret, { expiresIn: '5h' });
      return { status: HTTP_OK, response: { token } };
  } else {
      return { status: HTTP_UNAUTHORIZED, response: { message: 'Credenciales inválidas. Por favor, verifica tu usuario y clave.' } };
  }
}

// Exportar las constantes para su uso en otros módulos.
module.exports = {
  HTTP_OK,
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
  HTTP_INTERNAL_SERVER_ERROR,
  getValidationErrors,
  validationMiddleware,
  handleValidationErrors,
  authenticateUser
};
