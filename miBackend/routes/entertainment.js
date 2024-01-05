const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const { ObjectId } = require('mongodb');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { createNewsMiddleware, handleCreateNewsErrors, createNews, createLifestyle, createSports, createEntertainment } = require("../common/utils");

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './upload-entertainment/'); },
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
router.get("/getEntertainment", async (req, res, next) => {
  try {
    const entCollection = dba.collection("entertainment");
    const entertainment = await entCollection.find().toArray();
    res.json(entertainment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las noticias" });
  }
});

// Endpoint para utils.js---
router.get("/:id", async (req, res) => {
  try {
    const entCollection = dba.collection("entertainment");
    const entId = req.params.id;
    const entertainment = await entCollection.findOne({ _id: new ObjectId(entId) });
    res.json({ data: entertainment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener la noticia" });
  }
})

router.post("/createEntertainment", upload.single('fotoFileNewsPath'), createNewsMiddleware, async (req, res, next) => {
  try {
    await createEntertainment(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la noticia" });
  }
});


// Endpoint para utils.js---
router.put("/:id", upload.single('fotoFileNewsPath'), createNewsMiddleware, async (req, res, next) => {
  try {
    const entId = req.params.id;
    const { title, subtitle, description } = req.body;
    const fotoFileNewsPath = req.file?.path;
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const updatedNews = { title, subtitle, description, image: fotoFileNewsPath };
    await dba.collection("entertainment").updateOne({ _id: new ObjectId(entId) }, { $set: updatedNews });
    return res.json({ message: 'Noticia de Entretenimiento actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la noticia" });
  }
});

// Endpoint para utils.js---
router.delete("/:id", async (req, res) => {
  try {
    const entId = req.params.id;
    await dba.collection("entertainment").deleteOne({ _id: new ObjectId(entId) });
    res.json({ message: 'Noticia de Entretenimiento eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la noticia" });
  }
});

module.exports = router;