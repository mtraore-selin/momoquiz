const Challenge = require("../../models/Challenge");

module.exports.endChallenge = async (req, res) => {
  try {
    const quiz_challenge_id = req.params.id;
    console.log("REcieved id" + quiz_challenge_id);
    await Challenge.upateEndTime(quiz_challenge_id);

    res.status(201).json({
      success: true,
      data: {
        message: "Succesfully Ended Challenge",
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
