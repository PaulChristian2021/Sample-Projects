const router = require("express").Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getUser, (req, res) => {
  res.send(res.user);
});

router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    cart: req.body.cart,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getUser, async (req, res) => {
  if (req.body.title != null) {
    res.user.username = req.body.username;
    res.user.password = req.body.password;
    res.user.name = req.body.name;
    res.user.cart = req.body.cart;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(400).json({ message: "Cannot find user." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  console.log(user);
  res.user = user;
  next();
}

module.exports = router;
