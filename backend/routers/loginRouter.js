const express = require("express");
const router = express.Router();
const ClientModel = require("../models/ClientModel");

// import cors
const cors = require("cors");
router.use(cors());
router.use(express.json());
router.use(express.urlencoded());
// 加密
const md5 = require("md5");

// 加密中间件
const passCrypt = (req, res, next) => {
  console.log("passCrypt", req.body.password); //123456
  // md5是固定算法，反编译就会破解，所以可以给密码加字符串或者删除
  // req.body.password = md5(req.body.password).slice(4)
  req.body.password = md5(req.body.password) + "abcde";
  console.log("passCrypt1111", req.body.password); //e10adc3949ba59abbe56e057f20f883e
  next();
};

router.get("/clients", (req, res) => {
  ClientModel.find()
    .then((data) => {
      //   console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signup", (req, res) => {
  console.log(req.body);
  ClientModel.find({ username: `${req.body.username}` }).then((data) => {
    console.log("data", data);
    if (data.length === 0) {
      console.log("数据库中没有该数据");
      ClientModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }).then((data) => {
        console.log("注册成功", data);
        res.json({
          code: 1,
          message: "注册成功",
          data: "",
        });
      });
    } else {
      console.log("数据库中有该数据");
      res.json({
        code: 0,
        message: "该账户已注册",
        data: "",
      });
    }
  });
});
module.exports = router;
