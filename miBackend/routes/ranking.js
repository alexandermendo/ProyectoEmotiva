const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");

// Ruta para obtener el Top 10 de canciones más sonadas
router.get('/top10', async (req, res, next) => {
  try {
    const rankingCollection = dba.collection("ranking"); // Obtener la colección "ranking"
    const top10 = await rankingCollection.find().sort({ puntuacion: -1 }).limit(10).toArray(); // Obtener las 10 canciones con la puntuación más alta
    res.json(top10);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el Top 10 de canciones" });
  }
});

module.exports = router;
