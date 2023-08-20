const express = require("express");
const router = express.Router();
const TransitionModel = require("../models/TransitionModel");

router.get("/analytics/transitions", (req, res) => {
  TransitionModel.find()
    .then((data) => {
      console.log("data");
      //   console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
