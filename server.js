const express = require("express");
const nunjucks = require("nunjucks");
const catRoutes = require("./routes/cats.routes.js");
const indexRoutes = require("./routes/index.routes.js");
const http = require('http')
const {Server} = require("socket.io")

const app = express();
const server = http.createServer(app)
const io = new Server(server)

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/addTwoNumbers/:firstNumber/:secondNumber", function (req, res, next) {
  var firstNumber = parseInt(req.params.firstNumber);
  var secondNumber = parseInt(req.params.secondNumber);
  var result = firstNumber + secondNumber || null;
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400);
  } else {
    res.json({ result: result, statusCode: 200 }).status(200);
  }
});

app.use("/", indexRoutes);
app.use("/api/cats", catRoutes);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

const port = process.env.PORT || 3000;

server.listen(port, async () => {
  console.log(`App is listening on port ${port}`);
});
