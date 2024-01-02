const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const { ObjectId } = require('mongodb');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { createSlider, createNewsMiddleware } = require("../common/utils");

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './upload-slider/'); },
  filename: (req, file, cb) => { cb(null, Date.now() + '-' + file.originalname); }
});

const upload = multer({ storage: storage });

router.get("/getSlider", async (req, res, next) => {
  try {
    const slidersCollection = dba.collection("slider");
    const slider = await slidersCollection.find().toArray();
    res.json(slider); //Pilas con esa respuesta JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el slider" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const slidersCollection = dba.collection("slider");
    const sliderId = req.params.id;
    const slider = await slidersCollection.findOne({ _id: new ObjectId(sliderId) });
    if (slider) res.json({ data: slider });
    else res.status(404).json({ error: "Slider no encontrado" });
  } catch (error) {
    console.error("Error al obtener el slider por ID:", error);
    res.status(500).json({ error: "Error al obtener el slider" });
  }
});

router.post('/addSliderItem', upload.single('image'), createNewsMiddleware, async (req, res, next) => {
  try { 
    await createSlider(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

// Endpoint para utils.js---
router.put("/:id", upload.single('image'), createNewsMiddleware, async (req, res, next) => {
  try {
    const sliderId = req.params.id;
    const { title, subtitle, description } = req.body;
    const fotoFileNewsPath = req.file?.path;
    if (!title || !subtitle || !description || !fotoFileNewsPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const updatedNews = { title, subtitle, description, image: fotoFileNewsPath };
    await dba.collection("slider").updateOne({ _id: new ObjectId(sliderId) }, { $set: updatedNews });
    return res.json({ message: 'Noticia Principal actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la noticia" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const sliderId = req.params.id;
    await dba.collection("slider").deleteOne({ _id: new ObjectId(sliderId) });
    res.json({ message: 'Noticia Principal eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la noticia" });
  }
});


module.exports = router;

//Falta PUT y DELETE