const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const validator = require('validator'); 
const jwt = require('jsonwebtoken');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './upload-slider/'); },
  filename: (req, file, cb) => { cb(null, Date.now() + '-' + file.originalname); }
});

const upload = multer({ storage: storage }); 

router.get("/getSlider", async (req, res, next) => {
  try {
    const slidersCollection = dba.collection("slider");
    const slider = await slidersCollection.find().toArray();
    res.json({ data: slider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el slider" });
  }
});

router.post('/addSliderItem', upload.single('image'), async (req, res, next) => {
  try {
    const slidersCollection = dba.collection('slider');
    const { title, subtitle, description } = req.body;
    const fotoFilePath = req.file?.path; 
    if (!title || !subtitle || !description || !fotoFilePath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const sliderItem = { title, subtitle, description, fotoFilePath };
    const result = await slidersCollection.insertOne(sliderItem);
    if (result.insertedCount === 1)  res.json({ message: 'Contenido agregado al slider exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

module.exports = router;