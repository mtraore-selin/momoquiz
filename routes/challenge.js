const express = require("express");
const router = express.Router();
const Auth = require("../controllers/authentication");
const CreateChallengeCtrl = require("../controllers/challenge/createChallenge");
const ChangeChallengeCtrl = require("../controllers/challenge/changeChallenge");
const SubmitChallengeCtrl = require("../controllers/challenge/submitChallenge");
const joinChallengeCtrl = require("../controllers/challenge/joinChallenge");
const EndChallengeCtrl = require("../controllers/challenge/endChallenge");

const InsertFeedback = require("../controllers/feedback/insertFeedback");
const FetchFeedback = require("../controllers/feedback/fetchingFeedback");

router.post("/createChallenge/:id", CreateChallengeCtrl.createChallenge);
router.post("/changeChallenge/:id", ChangeChallengeCtrl.changeChallenge);
router.post("/joinChallenge", joinChallengeCtrl.joinChallenge);
router.post("/playChallenge", joinChallengeCtrl.playChallenge);
router.post("/submitChallenge/:id", SubmitChallengeCtrl.submitChallenge);
router.post("/endChallenge/:id", EndChallengeCtrl.endChallenge);

router.post("/insertFeedback/:id", InsertFeedback.insertFeedback);
router.post("/fetchFeedback/:id", FetchFeedback.fetchingfeedback);

module.exports = router;
