const router = require("express").Router();
const HelpArticle = require("../models/helpArticle");

router.get("/", async (req, res) => {
  try {
    const helpArticle = await HelpArticle.find();
    res.status(200).send(helpArticle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getHelpArticle, (req, res) => {
  res.send(res.helpArticle);
});

router.post("/", async (req, res) => {
  const helpArticle = new HelpArticle({
    title: req.body.title,
    caption: req.body.caption,
    categories: req.body.categories,
    date: req.body.date,
  });
  try {
    const newHelpArticle = await helpArticle.save();
    res.status(201).json(newHelpArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getHelpArticle, async (req, res) => {
  if (req.body.title != null) {
    res.helpArticle.title = req.body.title;
    res.helpArticle.date = req.body.date;
    res.helpArticle.caption = req.body.caption;
    res.helpArticle.categories = req.body.categories;
  }
  try {
    const updatedHelpArticle = await res.helpArticle.save();
    res.json(updatedHelpArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getHelpArticle, async (req, res) => {
  try {
    await res.helpArticle.remove();
    res.json({ message: "Deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getHelpArticle(req, res, next) {
  let helpArticle;
  try {
    helpArticle = await HelpArticle.findById(req.params.id);
    if (helpArticle == null) {
      return res.status(400).json({ message: "Cannot find the help article." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  console.log(helpArticle);
  res.helpArticle = helpArticle;
  next();
}

module.exports = router;
