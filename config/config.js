require("dotenv").config();

const { PORT, NODE_ENV, MONGO_URI, JWT_SECRET } = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  MONGO_URI,
  JWT_SECRET,
};
