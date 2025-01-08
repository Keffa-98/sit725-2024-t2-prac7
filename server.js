const express = require("express");
const  nunjucks = require("nunjucks")
const catRoutes = require('./routes/cats.routes.js')
const indexRoutes = require('./routes/index.routes.js')

const app = express();

nunjucks.configure("views",{
  autoescape:true,
  express:app,
})

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/',indexRoutes)
app.use("/api/cats",catRoutes)


const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`App is listening on port ${port}`);
});
