const express = require("express");
const router = express.Router();
const NewCourse = require("../models/courseNew");

router.get("/", async (req, res) => {
  try {
    const courses = await NewCourse.find();
    res.json(courses);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const course = await NewCourse.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const course = new NewCourse({
    name: req.body.name,
    description: req.body.description,
    document: req.body.document,
    status: req.body.status,
  });

  try {
    const newCouse = await course.save();
    res.json(newCouse);
  } catch (err) {
    res.send("Error:", err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const courseToBeUpdated = await NewCourse.findById(req.params.id);
    courseToBeUpdated.name = req.body.name;
    courseToBeUpdated.description = req.body.description;
    courseToBeUpdated.document = req.body.document;
    courseToBeUpdated.status = req.body.status;

    const updatedCourse = await courseToBeUpdated.save();
    res.json(updatedCourse);
  } catch (err) {
    res.send("Error:", err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await NewCourse.deleteOne({ _id: req.params.id });
    res.json({ message: "deleted successfully" });
  } catch (err) {
    res.send("Error:", err);
  }
});

module.exports = router;
