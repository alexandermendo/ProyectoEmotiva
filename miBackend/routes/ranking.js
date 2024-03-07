const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const multer = require('multer');
const { createRanking } = require("../common/utils");

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './upload-ranking/'); },
  filename: (req, file, cb) => { cb(null, Date.now() + '-' + file.originalname); }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png'];
    if (allowedMimes.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Tipo de archivo no permitido'), false);
  }
});

// Ruta para obtener el Top 10 de canciones más sonadas
router.get('/ranking', async (req, res, next) => {
  try {
    const rankingCollection = dba.collection("ranking"); // Obtener la colección "ranking"
    const top10 = await rankingCollection.find().sort({ puntuacion: -1 }).limit(10).toArray(); // Obtener las 10 canciones con la puntuación más alta
    res.json(top10);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el Top 10 de canciones" });
  }
});

router.post('/createRanking', upload.single('fotoFileNewsPath'), async (req, res, next) => {
  try {
    await createRanking(req, res)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la canción" });
  }
});


module.exports = router;
