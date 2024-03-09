const express = require("express");
const router = express.Router();
const userModel = require("../Model/userModel");

//get all data
router.get("/", async (req, res) => {
  const getAllData = await userModel.find();
  res.send(getAllData);
});

// sign-up

router.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;
  console.log(">Sign up<", email, password);

  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User with this email already exists" });
  }

  const postData = new userModel({
    email,
    password,
  });

  await postData.save();
  console.log(postData);

  res.send({ success: true, message: "sign-up success", data: postData });
});

//sign-in
router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  console.log("><><><><><", email, password);

  const user = await userModel.findOne({ email });
  console.log(user);

  if (!user) {
    return res.status(401).json({ error: "invalid user" });
  }

  if (password !== user.password) {
    return res.status(401).json({ error: "invalid password" });
  }

  const userData = {
    email: user.email,
    password: user.password,
  };

  res.send({
    success: true,
    message: "sign-in successfully",
    return: userData,
  });
});

//uniq data

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const uniqId = await userModel.findById(id);
    res.send(uniqId);
  } catch (error) {
    res.send(error);
  }
});

// update data
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, password, phone, avatar } = req.body;

  try {
    await userModel.findByIdAndUpdate(id, {
      name,
      email,
      password,
      phone,
      avatar,
    });

    res.send("data updated");
  } catch (err) {
    res.send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params.id;

  try {
    await userModel.findByIdAndDelete(id);

    res.send("data deleted");
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
