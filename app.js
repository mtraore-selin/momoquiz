const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Set up the logger middleware
app.use(logger("dev")); // 'dev' is a predefined log format
app.use(cors());
app.use(express.json());

module.exports = { app, express, path };
