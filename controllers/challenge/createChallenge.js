const jwt = require("jsonwebtoken");

const Challenge = require("../../models/Challenge");
const Quiz = require("../../models/Quiz");
const User = require("../../models/User");
const { JWT_SECRET } = require("../../config/config");

//Module to create a challenge, accept incoming data from client and store it in the databse.
module.exports.createChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const challenge = new Challenge(req.body);
    console.log("In create challenge", req.body);
    await Quiz.find({ _id: id });

    const token = req.header("authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id }); //Get the user ID from the JWT
    const game_pin = challenge.generatePin(); //Generate a game pin
    challenge.host.name = user.username; //Store the associated host of challenge name in the challenge schema

    Quiz.storeChallengeId(id, challenge._id); //Store the associated challenge ID in the quiz schema
    challenge.quiz_id = id;
    challenge.save();
    console.log("CHALLENGe:" + challenge);
    //add challenge id to user schema
    user.challenges.push(challenge._id); //Store the challenge ID in the User schema
    user.save();

    res.status(201).json({
      //Send response
      success: true,
      data: {
        challenge_id: challenge._id,
        game_pin: game_pin,
        message: "created",
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
