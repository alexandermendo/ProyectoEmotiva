const express = require("express");
const router = express.Router();
const execSQL = require('../database/db_sql'); 

router.get('/getCities', async (req, res) => {
  try {
    const query = 'SELECT * FROM EMOCIU'; 
    const result = await execSQL(query);
    res.json(result);
  } catch (error) {
    console.error('Error al obtener la lista de ciudades:', error);
    res.status(500).json({ error: 'Error al obtener la lista de ciudades' });
  }
});

module.exports = router;