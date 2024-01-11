const jwt = require("jsonwebtoken");

// accessing schema of quiz
const { response } = require("express");
const { JWT_SECRET } = require("../../config/config");

// adding feedback
module.exports.insertFeedback = async (req, res) => {
  try {
    // getting challenge id and user id by parameters and token
    quiz_challenge_id = req.params.id;
    console.log("challange response: ", req.body);
    console.log("challange response: ", quiz_challenge_id);
    const token = req.header("authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, JWT_SECRET);
    userId = decoded._id;

    // calling function
    res.status(201).json({
      success: true,
      data: {
        report: "modified",
      },
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: {
        message: e.message,
      },
    });
  }
};
