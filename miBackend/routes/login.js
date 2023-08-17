const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const col = dba.collection('users');

const { 
  HTTP_INTERNAL_SERVER_ERROR,
  getValidationErrors,
  validationMiddleware,
  handleValidationErrors,
  authenticateUser  } = require('../common/utils')

/**
 * @name loginUser
 * @description Permite a un usuario iniciar sesión
 * @param {object} req - El objeto request de la solicitud HTTP
 * @param {object} res - El objeto response de la solicitud HTTP
 * @param {function} next - La siguiente función middleware en la cadena de solicitud-respuesta
 * @returns {object} Objeto JSON con el resultado del inicio de sesión
 */
router.post("/", validationMiddleware, async (req, res, next) => {
  try {
    const errors = getValidationErrors(req); // Validar los campos usando express-validator
    if (!errors.isEmpty()) handleValidationErrors(errors, res); // Utiliza la función para manejar errores de validación
    else {
      const authResult = await authenticateUser(req, col); // Utiliza la función para autenticar al usuario
      res.status(authResult.status).json(authResult.response); // Envía la respuesta basada en el resultado de la autenticación
    }
  } catch (error) {
    console.error(error); // Registrar el error completo en los registros del servidor
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({error: "Hubo un problema al procesar tu solicitud. Por favor, intenta nuevamente más tarde."}); // Mensaje genérico para el usuario
  }
});

module.exports = router;
