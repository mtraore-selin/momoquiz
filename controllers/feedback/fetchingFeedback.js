// accessing schema of quiz
const Challenge = require("../../models/Challenge");
const { response } = require("express");

// fetching feedback
module.exports.fetchingfeedback = async (req, res) => {
  try {
    // getting challenge id by parameters
    quiz_challenge_id = req.params.id;
    console.log("challange response: ", quiz_challenge_id);

    // calling function
    const fetchedData = await Challenge.fetchFeedbackById(quiz_challenge_id);

    res.status(201).json({
      success: true,
      data: {
        fetchedData,
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
