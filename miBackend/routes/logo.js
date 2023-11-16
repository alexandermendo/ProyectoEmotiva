const express = require("express");
const router = express.Router();
const dba = require("../database/db_mongo");
const validator = require('validator'); // Importa el módulo validator
const jwt = require('jsonwebtoken');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './upload-logo/') },
  filename: (req, file, cb) => { cb(null, Date.now() + '-' + file.originalname); }
});

const upload = multer({ storage: storage }); 

router.get("/getLogo", async (req, res, next) => {
  try {
    const logoCollection = dba.collection("logo");
    const logo = await logoCollection.find().toArray();
    res.json({ data: logo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el logo" });
  }
});

router.post('/addLogoItem', upload.single('image-logo'), async (req, res, next) => {
  try {
    const fotoFileLogoPath = req.file?.path; 
    if (!fotoFileLogoPath) return res.status(400).json({ error: 'Faltan datos requeridos' });
    const logoItem = { fotoFileLogoPath };
    await dba.collection('logo').insertOne(logoItem);
    res.json({ message: "Logo creado con éxito. "});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

module.exports = router;