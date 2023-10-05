const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const celebritiesRouter = require("./routes/celebrities");
const citiesRouter = require("./routes/cities");
const paisesRouter = require("./routes/countries");
const usersRouter = require("../miBackend/routes/users");
const authRouter = require("../miBackend/routes/login");
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

app.use(function (req, res, next) { next(createError(404)) });
app.use(function (err, req, res, next) {
    console.log("Error handler:", err);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.status("error");
});

const port = process.env.PORT || 3000;

try {
    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}...`);
    });
} catch (error) {
    console.error(`Error al iniciar el servidor: ${error.message}`);
}

module.exports = app;