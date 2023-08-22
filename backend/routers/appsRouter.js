const express = require("express");
const router = express.Router();
const EmailModel = require("../models/EmailModel");

// import cors
const cors = require("cors");
router.use(cors());

router.get("/apps/emails", (req, res) => {
  EmailModel.find()
    .then((data) => {
      //   console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/apps/emails/:type", (req, res) => {
  EmailModel.find({ type: req.params.type })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;