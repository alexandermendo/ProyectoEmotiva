const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const { ObjectId } = require('mongodb');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { createNewsMiddleware, handleCreateNewsErrors, createNews } = require("../common/utils");

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './upload-news/'); },
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
router.get("/getNews", async (req, res, next) => {
  try {
    const newsCollection = dba.collection("news");
    const news = await newsCollection.find().toArray();
    res.json({ data: news });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las noticias" });
  }
});

// Endpoint para utils.js---
router.get("/:id", async (req, res) => {
  try {
    const newsCollection = dba.collection("news");
    const newsId = req.params.id;
    const news = await newsCollection.findOne({ _id: new ObjectId(newsId) });
    res.json({ data: news });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener la noticia" });
  }
})

router.post("/createNews", upload.single('fotoFileNewsPath'), createNewsMiddleware, async (req, res, next) => {
  try {
    await createNews(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la noticia" });
  }
});


// Endpoint para utils.js---
router.put("/:id", upload.single('fotoFileNewsPath'), createNewsMiddleware, async (req, res, next) => {
  try {
    const newsId = req.params.id;
    const { title, subtitle, description } = req.body;
    const fotoFileNewsPath = req.file?.path;
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const updatedNews = { title, subtitle, description, image: fotoFileNewsPath };
    await dba.collection("news").updateOne({ _id: new ObjectId(newsId) }, { $set: updatedNews });
    return res.json({ message: 'Noticia actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la noticia" });
  }
});

// Endpoint para utils.js---
router.delete("/:id", async (req, res) => {
  try {
    const newsId = req.params.id;
    await dba.collection("news").deleteOne({ _id: new ObjectId(newsId) });
    res.json({ message: 'Noticia eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la noticia" });
  }
});

module.exports = router;