require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const express = require("express");
const morgan = require("morgan");
const app = express();
const userRoutes = require("./routes/user.routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(morgan("short"));
app.use(bodyParser.json()); //permet de traiter la data pour l'envoyer
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/user", userRoutes);

//server (tjs a la fin)
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
