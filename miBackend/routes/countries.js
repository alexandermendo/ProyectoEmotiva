const express = require("express");
const router = express.Router();
const execSQL = require('../database/db_sql'); 

router.get('/getCountry', async (req, res) => {
  try {
    const query = 'SELECT * FROM EMOPAI'; 
    const result = await execSQL(query);
    res.json(result);
  } catch (error) {
    console.error('Error al obtener la lista de países:', error);
    res.status(500).json({ error: 'Error al obtener la lista de países' });
  }
});

module.exports = router;