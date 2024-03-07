const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const { ObjectId } = require('mongodb');
const multer = require('multer');
const { createRanking, createRankingMiddleware, updateRanking, deleteRanking } = require("../common/utils");

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
    const rankingCollection = dba.collection("ranking");
    const top10 = await rankingCollection.find().toArray();
    top10.sort((a, b) => b.puntuacion - a.puntuacion);
    top10.sort((a, b) => {
      if (a.puntuacion === b.puntuacion) return a.nombre.localeCompare(b.nombre);
      return 0;
    });
    const top10Sorted = top10.slice(0, 10);
    res.json(top10Sorted);
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

// Endpoint para utils.js---
router.put("/:id", upload.single('fotoFileNewsPath'), createRankingMiddleware, async (req, res, next) => {
  try {
    await updateRanking(req, res)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la canción" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteRanking(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la canción" });
  }
});


module.exports = router;
