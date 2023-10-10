const express = require("express");
const path = require('path');
const router = express.Router();
const multer = require('multer');

const { fileRead, fileWrite } = require("../routes/getDataFromFile");
const execSQL = require("../database/db_sql");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/personas', upload.single('foto'), async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      ide_cat,
      ide_pai,
      ide_ciu,
      fec_nac,
      biograf,
      red_soc,
    } = req.body;
    const fotoFilePath = req.file.path;

    const sqlFilePath = path.join(__dirname, 'insertCelebrities.sql');
    const query = await fileRead(sqlFilePath)
    console.log("Ruta: ", sqlFilePath)
    const sqlT = query.replace("{nombre}", req.body.nombre)
      .replace("{apellido}", req.body.apellido)
      .replace("{ide_cat}", req.body.ide_cat)
      .replace("{ide_pai}", req.body.ide_pai)
      .replace("{ide_ciu}", req.body.ide_ciu)
      .replace("{fec_nac}", req.body.fec_nac)
      .replace("{biograf}", req.body.biograf)
      .replace("{red_soc}", req.body.red_soc)
      .replace("{fotoFilePath}", req.file.path)

    const params = {
      nombre,
      apellido,
      ide_cat: parseInt(ide_cat),
      ide_pai: parseInt(ide_pai),
      ide_ciu: parseInt(ide_ciu),
      fec_nac: new Date(fec_nac),
      biograf,
      red_soc,
      fotoFilePath,
    };
    const result = await execSQL(sqlT, params);
    console.log("Persona guardada exitosamente");
    res.json({ message: 'Persona guardada exitosamente' });
  } catch (error) {
    console.error('Error al guardar en la base de datos:', error);
    res.status(500).json({ message: 'Error al guardar en la base de datos' });
  }
});


router.put("/updatePersonas", upload.single("foto"), async (req, res) => {
  try {
    const {
      identi,
      nombre,
      apellido,
      ide_cat,
      ide_pai,
      ide_ciu,
      fec_nac,
      biograf,
      red_soc,
    } = req.body;

    const fotoFilePath = req.file ? req.file.path : null;

    const sqlFilePath = path.join(__dirname, "updateCelebrities.sql");
    const query = await fileRead(sqlFilePath);
    console.log("Ruta:", sqlFilePath);
    const sqlT = query
      .replace("{nombre}", nombre)
      .replace("{apellido}", apellido)
      .replace("{ide_cat}", ide_cat)
      .replace("{ide_pai}", ide_pai)
      .replace("{ide_ciu}", ide_ciu)
      .replace("{fec_nac}", fec_nac)
      .replace("{biograf}", biograf)
      .replace("{red_soc}", red_soc)
      .replace("{fotoFilePath}", fotoFilePath)
      .replace("{identi}", identi); // Identificador para actualizar

    const params = {
      nombre,
      apellido,
      ide_cat: parseInt(ide_cat),
      ide_pai: parseInt(ide_pai),
      ide_ciu: parseInt(ide_ciu),
      fec_nac: new Date(fec_nac),
      biograf,
      red_soc,
      fotoFilePath,
      identi: parseInt(identi), // Identificador para actualizar
    };

    const result = await execSQL(sqlT, params);
    console.log("Persona actualizada exitosamente");
    res.json({ message: "Persona actualizada exitosamente" });
  } catch (error) {
    console.error("Error al actualizar en la base de datos:", error);
    res.status(500).json({ message: "Error al actualizar en la base de datos" });
  }
});

router.delete("/deletePersonas/:identi", async (req, res) => {
  try {
    const identi = req.params.identi;
    const sqlFilePath = path.join(__dirname, "deleteCelebrities.sql");
    const query = await fileRead(sqlFilePath);
    console.log("Ruta:", sqlFilePath);
    const sqlT = query
      .replace("{identi}", identi);

    const params = {
      identi: parseInt(identi), 
    };

    const result = await execSQL(sqlT, params);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "La persona no existe" });
    } else {
      res.json({ message: "Persona eliminada exitosamente" });
    }
  } catch (error) {
    console.error("Error al eliminar la persona en la base de datos:", error);
    res.status(500).json({ message: "Error al eliminar la persona en la base de datos" });
  }
});

module.exports = router;
