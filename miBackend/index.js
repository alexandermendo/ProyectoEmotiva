const express = require('express');
const cors = require('cors');
const path = require('path');
const createError = require('http-errors');
const app = express();
const celebritiesRouter = require("./routes/celebrities");
const citiesRouter = require("./routes/cities");
const paisesRouter = require("./routes/countries");
const usersRouter = require("../miBackend/routes/users");
const authRouter = require("../miBackend/routes/login");
const sliderRouter = require("../miBackend/routes/slider");
const logoRouter = require("../miBackend/routes/logo");
const newsRouter = require("../miBackend/routes/news");
const lifestyleRouter = require("../miBackend/routes/lifestyle");
const sportsRouter = require("../miBackend/routes/sports");
const entertainmentRouter = require("../miBackend/routes/entertainment");
const categoryRouter = require("../miBackend/routes/categories");
const rankingRouter = require("./routes/ranking");

const jwtSecret = "mi_secreto_secreto";
app.set("jwtSecret", jwtSecret);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(cors());

app.use("/celebrities", celebritiesRouter);
app.use("/cities", citiesRouter);
app.use("/countries", paisesRouter);
app.use("/users", usersRouter);
app.use("/login", authRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/upload-slider', express.static(path.join(__dirname, 'upload-slider')));
app.use('/upload-logo', express.static(path.join(__dirname, 'upload-logo')));
app.use('/upload-news', express.static(path.join(__dirname, 'upload-news')));
app.use('/upload-lifestyle', express.static(path.join(__dirname, 'upload-lifestyle')));
app.use('/upload-sports', express.static(path.join(__dirname, 'upload-sports')));
app.use('/upload-entertainment', express.static(path.join(__dirname, 'upload-entertainment')));
app.use('/upload-ranking', express.static(path.join(__dirname, 'upload-ranking')));
app.use("/slider", sliderRouter);
app.use("/logo", logoRouter);
app.use("/news", newsRouter);
app.use("/lifestyle", lifestyleRouter);
app.use("/sports", sportsRouter);
app.use("/entertainment", entertainmentRouter);
app.use("/categories", categoryRouter);
app.use("/ranking", rankingRouter);

app.use((req, res, next) => { res.status(404).json({ message: 'Ruta no encontrada' }); });

app.use((err, req, res, next) => {
    console.error("Error handler:", err);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.status("error");
});

const port = process.env.PORT || 3000;

try { app.listen(port, () => { console.log(`Escuchando en el puerto ${port}...`); }); } 
catch (error) {console.error(`Error al iniciar el servidor: ${error.message}`); }

module.exports = app;