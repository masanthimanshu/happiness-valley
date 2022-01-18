import express from "express";
import { engine } from "express-handlebars";
import fs from "node:fs";

// Handlebars Objects Starts //

const homeObj = JSON.parse(fs.readFileSync("./handlebarsData/home.json"));
const aboutObj = JSON.parse(fs.readFileSync("./handlebarsData/about.json"));
const contactObj = JSON.parse(fs.readFileSync("./handlebarsData/contact.json"));
const coursesObj = JSON.parse(fs.readFileSync("./handlebarsData/courses.json"));
const shopObj = JSON.parse(fs.readFileSync("./handlebarsData/shop.json"));

// Handlebars Objects Ends //

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req,res) => {
    res.render("index", homeObj);
})

app.get("/about", (req,res)=> {
  res.render("about", aboutObj);
})

app.get("/contact", (req,res)=> {
  res.render("contact", contactObj);
})

app.get("/courses", (req,res)=> {
  res.render("courses", coursesObj);
})

app.get("/shop", (req,res)=> {
  res.render("shop", shopObj);
})

app.listen(port, () => {
  console.log(`Active On Port ${port}`);
});
