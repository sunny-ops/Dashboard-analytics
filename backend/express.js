// import json data
const transitions = require("./transitions.json");

// import mongoose
const mongoose = require("mongoose");
const express = require("express");

// import router
const analyticsRouter = require(__dirname + "/routers/analyticsRouter.js");

// import cors
const cors = require("cors");

// create app
const app = express();
app.use("/api", analyticsRouter);
app.use(cors());
// 使用json,urlencoded中间件接收传输的json表单数据，放到req.body上
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect("mongodb://127.0.0.1:27017/datas");

const TransitionModel = require("./models/TransitionModel");

mongoose.connection.once("open", () => {
  console.log("mongoose connection success");

  //   TransitionModel.create(transitions);
});

app.listen(8080, () => {
  console.log("服务启动时调用");
});
