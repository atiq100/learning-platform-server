const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const allCourse = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/allcourses", (req, res) => {
    res.send(allCourse);
  });

  app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const getSingleCourse = allCourse?.find((p) => p.id == id);
    if (!getSingleCourse) {
      res.send("course not found");
    }
    res.send(getSingleCourse);
  });

app.listen(Port, () => {
    console.log("server is running", Port);
  });
  
  module.exports = app;