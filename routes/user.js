const config = require("config");
const jwt = require("jsonwebtoken");
const _ =require('lodash');
const bcrypt=require('bcrypt');
const express = require("express");
const { User, validate } = require("../models/user");
const auth = require("../middleware/auth");
const router = express.Router();


router.get("/me",auth,async (req,res)=>{
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
})

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if the user is already auth
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user is already registered.");
  
  // another way instead of repeat req.body ====>>
  // user =new user(_.pick(req.body,['name','email','password']))
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password=await bcrypt.hash(user.password,salt);
  await user.save();

  const token = user.generateAuthToken();
 // const token = jwt.sign({ _id: user._id },process.env.Vidly_test1_jwtPrivateKey);
  res.header('x-auth-token',token).send(_.pick(user,['id','name','email']));
});

module.exports = router;
