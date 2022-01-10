import express from "express";
import { engine } from "express-handlebars";
import fs from "fs";

const obj = JSON.parse(fs.readFileSync("handlebarsData.json"));

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req,res) => {
    res.render("index", obj.homePage);
})

app.listen(port, () => {
  console.log(`Active On Port ${port}`);
});
