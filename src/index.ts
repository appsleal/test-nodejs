const express = require("express");
import bodyParser = require("body-parser");
import { sequelize } from "./clases/database";
import { Category } from "./models/category";
const app = express();
app.use(bodyParser());
app.get("/", (req: Request, res: any) => {
  Category.findAll().then((data) => {
    res.json(data);
  });
});

app.post("/", (req: any, res: any) => {
  Category.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

sequelize.addModels([Category]);

sequelize.authenticate().then(async () => {
  console.log("Connection has been established successfully.");
  try {
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to sync models:", error);
  }
});

app.listen(3550, () => {
  console.log("Server started on port 3000");
});
