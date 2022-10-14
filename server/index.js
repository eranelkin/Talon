const express = require("express");

const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3011;
const expressRoutes = require("./routes/routes");

function initExpressApp(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/", expressRoutes);
}

app.listen(port, () => {
  initExpressApp(app);
  console.log(`Server listening on ${port}`);
});
