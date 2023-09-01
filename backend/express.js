// import json data
// const transitions = require("./jsons/transitions.json");

// import mongoose
const mongoose = require("mongoose");
const express = require("express");

// import router
const analyticsRouter = require(__dirname + "/routers/analyticsRouter.js");
const appsRouter = require(__dirname + "/routers/appsRouter.js");
const loginRouter = require(__dirname + "/routers/loginRouter.js");

// import cors
const cors = require("cors");

// create app
const app = express();
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("/api", analyticsRouter);
app.use("/api", appsRouter);
app.use("/api", loginRouter);

app.use(cors());
// 使用json,urlencoded中间件接收传输的json表单数据，放到req.body上
app.use(express.json());
app.use(express.urlencoded());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const connection =
  "mongodb+srv://shizhong1989:Himym_0814@dashboard.pqdrjut.mongodb.net/datas?retryWrites=true&w=majority";
mongoose.connect(connection);

// mongoose.connect("mongodb://127.0.0.1:27017/datas");

mongoose.connection.once("open", () => {
  console.log("mongoose connection success");

  //   TransitionModel.create(transitions);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("服务启动时调用");
});
