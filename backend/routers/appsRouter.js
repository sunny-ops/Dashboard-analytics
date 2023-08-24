const express = require("express");
const router = express.Router();
const EmailModel = require("../models/EmailModel");
const UserModel = require("../models/UserModel");
const InvoiceModel = require("../models/InvoiceModel");

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

router.get("/apps/emails/:type/:name", (req, res) => {
  const name = req.params.name;
  const regex = new RegExp(name, "i");
  EmailModel.find({ type: req.params.type, firstName: regex })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get("/apps/users", (req, res) => {
//   UserModel.find()
//     .then((data) => {
//       //   console.log(data);
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.get("/apps/users", (req, res) => {
  const { role, plan, status } = req.query;
  // console.log("role!=undefined", !role);
  // console.log("backend", role, plan, status);
  // if (!role && !plan && !status) {
  //   console.log("undefined");
  //   UserModel.find({})
  //     .then((data) => {
  //       //   console.log(data);
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   return;
  // }

  UserModel.find()
    .then((data) => {
      //   console.log(data);
      var filteredData = data;
      if (role != "") {
        // console.log("role", role);
        filteredData = data.filter(
          (data) =>
            (!role || data.role === role) &&
            (!plan || data.plan === plan) &&
            (!status || data.status === status)
        );
      }
      // if (plan != "") {
      //   console.log("plan", plan);
      //   filteredData = data.filter((data) => data.plan === plan);
      // }
      // if (status != "") {
      //   console.log("status", status);
      //   filteredData = data.filter((data) => data.status === status);
      // }
      res.json(filteredData);
      // res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get("/apps/users/:role?/:plan?/:status?", (req, res) => {
//   const role = req.params.role;
//   const plan = req.params.plan;
//   const status = req.params.status;
//   const regexRole = new RegExp(role, "i");
//   const regexPlan = new RegExp(plan, "i");
//   const regexStatus = new RegExp(status, "i");
//   console.log("role", role);
//   UserModel.find({ role: regexRole, plan: regexPlan, status: regexStatus })
//     .then((data) => {
//       //   console.log(data);
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.get("/apps/invoices", (req, res) => {
  InvoiceModel.find()
    .then((data) => {
      //   console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
