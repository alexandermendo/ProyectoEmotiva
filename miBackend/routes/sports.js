const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const { ObjectId } = require('mongodb');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { createNewsMiddleware, handleCreateNewsErrors, createNews, createLifestyle, createSports } = require("../common/utils");

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './upload-sports/'); },
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

// Endpoint para utils.js---
router.get("/getSports", async (req, res, next) => {
  try {
    const sportsCollection = dba.collection("sports");
    const sports = await sportsCollection.find().toArray();
    res.json(sports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las noticias" });
  }
});

// Endpoint para utils.js---
router.get("/:id", async (req, res) => {
  try {
    const sportsCollection = dba.collection("sports");
    const sportsId = req.params.id;
    const sports = await sportsCollection.findOne({ _id: new ObjectId(sportsId) });
    res.json({ data: sports });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener la noticia" });
  }
})

router.post("/createSports", upload.single('fotoFileNewsPath'), createNewsMiddleware, async (req, res, next) => {
  try {
    await createSports(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la noticia" });
  }
});


// Endpoint para utils.js---
router.put("/:id", upload.single('fotoFileNewsPath'), createNewsMiddleware, async (req, res, next) => {
  try {
    const sportsId = req.params.id;
    const { title, subtitle, description } = req.body;
    const fotoFileNewsPath = req.file?.path;
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const updatedNews = { title, subtitle, description, image: fotoFileNewsPath };
    await dba.collection("sports").updateOne({ _id: new ObjectId(sportsId) }, { $set: updatedNews });
    return res.json({ message: 'Noticia de Deportes actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la noticia" });
  }
});

// Endpoint para utils.js---
router.delete("/:id", async (req, res) => {
  try {
    const sportsId = req.params.id;
    await dba.collection("sports").deleteOne({ _id: new ObjectId(sportsId) });
    res.json({ message: 'Noticia de Deportes eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la noticia" });
  }
});

module.exports = router;