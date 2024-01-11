const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
let gracefulShutdown;

mongoose.connect(MONGO_URI, {
  autoIndex: true,
  useCreateIndex: true,
});

// CONNECTION EVENTS
mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + MONGO_URI);
});
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

// CAPTURE RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected through " + msg);
    callback();
  });
};
// For nodemon restarts
process.once("SIGUSR2", function () {
  gracefulShutdown("nodemon restart", function () {
    process.kill(process.pid, "SIGUSR2");
  });
});
// For app termination
process.on("SIGINT", function () {
  gracefulShutdown("app termination", function () {
    process.exit(0);
  });
});

// BRING IN YOUR SCHEMAS & MODELS
require("../models/User");
require("../models/Quiz");
require("../models/Challenge");
