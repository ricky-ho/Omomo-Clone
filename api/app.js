const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv").config();

const adminRouter = require("./routes/admin");
const apiRouter = require("./routes/api");

/* Connect to database */
require("./config/database");

const app = express();

/* Express middleware */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* App Routes */
app.use("/api", apiRouter);

module.exports = app;
