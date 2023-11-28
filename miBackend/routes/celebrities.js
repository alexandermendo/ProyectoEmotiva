const express = require("express");
const path = require('path');
const router = express.Router();
const multer = require('multer');
const { fileRead, fileWrite } = require("../routes/getDataFromFile");
const execSQL = require("../database/db_sql");
const { HTTP_NOT_FOUND, HTTP_INTERNAL_SERVER_ERROR } = require("../common/utils");

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './uploads/'); },
  filename: (req, file, cb) => { cb(null, Date.now() + '-' + file.originalname); }
});

const upload = multer({ storage: storage });

router.get("/consulta", async (req, res) => {
  try {
    const sqlFilePath = path.join(__dirname, "selectCelebrities.sql");
    const sqlQuery = await fileRead(sqlFilePath)
    const result = await execSQL(sqlQuery);
    if (result.length > 0) res.json(result);
    else res.status(HTTP_NOT_FOUND).json({ message: "No se encontraron resultados" });
  } catch (error) {
    console.error("Error al ejecutar la consulta SQL:", error);
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: "Error al ejecutar la consulta SQL" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const identi = parseInt(req.params.id);

    const sqlFilePath = path.join(__dirname, "selectCelebrityById.sql");
    const query = await fileRead(sqlFilePath);

    const sqlT = query.replace("{id}", identi);
    const result = await execSQL(sqlT);

    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(HTTP_NOT_FOUND).json({ message: "No se encontraron detalles para la celebridad con ID " + identi });
    }
  } catch (error) {
    console.error("Error al ejecutar la consulta SQL:", error);
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: "Error al obtener los detalles de la celebridad" });
  }
});

router.post('/personas', upload.single('foto'), async (req, res) => {
  try {
    const { nombre, apellido, nom_cat, nom_ciu, fec_nac, biograf, red_soc } = req.body;
    const fotoFilePath = req.file.path;
    const sqlFilePath = path.join(__dirname, 'insertCelebrities.sql');
    const query = await fileRead(sqlFilePath)
    const sqlT = query.replace("{nombre}", req.body.nombre).replace("{apellido}", req.body.apellido)
      .replace("{nom_cat}", req.body.nom_cat).replace("{nom_ciu}", req.body.nom_ciu)
      .replace("{fec_nac}", req.body.fec_nac).replace("{biograf}", req.body.biograf)
      .replace("{red_soc}", req.body.red_soc).replace("{fotoFilePath}", req.file.path)
    const params = { nombre, apellido, nom_cat, nom_ciu, fec_nac: new Date(fec_nac), biograf, red_soc, fotoFilePath };
    const result = await execSQL(sqlT, params);
    res.json({ message: 'Persona guardada exitosamente' });
  } catch (error) {
    console.error('Error al guardar en la base de datos:', error);
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: 'Error al guardar en la base de datos' });
  }
});

router.put("/updatePersonas", upload.single("foto"), async (req, res) => {
  try {
    const { identi, nombre, apellido, nom_cat, nom_ciu, fec_nac, biograf, red_soc } = req.body;
    const fotoFilePath = req.file ? req.file.path : null;
    const sqlFilePath = path.join(__dirname, "updateCelebrities.sql");
    const query = await fileRead(sqlFilePath);
    const sqlT = query.replace("{nombre}", nombre).replace("{apellido}", apellido)
      .replace("{nom_cat}", nom_cat).replace("{nom_ciu}", nom_ciu)
      .replace("{fec_nac}", fec_nac).replace("{biograf}", biograf)
      .replace("{red_soc}", red_soc).replace("{fotoFilePath}", fotoFilePath)
      .replace("{identi}", identi);
    const params = {
      nombre, apellido, nom_cat, nom_ciu, fec_nac: new Date(fec_nac), biograf, red_soc,
      fotoFilePath, identi: parseInt(identi),
    };
    const result = await execSQL(sqlT, params);
    res.json({ message: "Persona actualizada exitosamente" });
  } catch (error) {
    console.error("Error al actualizar en la base de datos:", error);
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: "Error al actualizar en la base de datos" });
  }
});

router.delete("/deletePersonas/:identi", async (req, res) => {
  try {
    const identi = req.params.identi;
    const sqlFilePath = path.join(__dirname, "deleteCelebrities.sql");
    const query = await fileRead(sqlFilePath);
    const sqlT = query.replace("{identi}", identi);
    const params = { identi: parseInt(identi) };
    const result = await execSQL(sqlT, params);
    if (result.affectedRows === 0) res.status(HTTP_NOT_FOUND).json({ message: "La persona no existe" });
    else res.json({ message: "Persona eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la persona en la base de datos:", error);
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: "Error al eliminar la persona en la base de datos" });
  }
});

module.exports = router;