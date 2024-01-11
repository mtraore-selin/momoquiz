"use strict";
const { app, express, path } = require("./app");
require("./config/database");

const userRouter = require("./routes/auth");
const studentRouter = require("./routes/student");
const teacherRouter = require("./routes/teacher");
const challengeRouter = require("./routes/challenge");
const quizRouter = require("./routes/quiz");
const reportRouter = require("./routes/reports");
const { PORT } = require("./config/config");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/challenge", challengeRouter);
app.use("/api/v1/teacher", teacherRouter);
app.use("/api/v1/quiz", quizRouter);
app.use("/api/v1/reports", reportRouter);

// Server up static assets
app.use(express.static(path.join(__dirname, "./client/dist/client")));

// Health check server route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/client/index.html"));
});

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
