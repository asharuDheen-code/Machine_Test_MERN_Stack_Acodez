const { response } = require("express");
const express = require("express");
const router = express.Router();
// const helper = require("../helpers/userHelper");
const helper = require("../helpers/userHelper");

router.get("/", (req, res) => {
  res.send("welcome dude");
});

router.get("/getalluser", (req, res) => {
  helper.getAllUser().then((users) => {
    return res.json(users);
  });
});

router.post("/adduser", (req, res) => {
  helper.addUser(req.body).then((user) => {
    return res.json(user);
  });
});

router.get("/deleteitem", (req, res) => {
  helper.deleteUser(req.query.userId).then((users) => {
    return res.json(users);
  });
});
 
router.get("/getuser", (req, res) => {
  helper.getUser(req.query.userId).then((user) => {
    return res.json(user);
  });
});

router.post("/edituser", (req, res) => {
  helper.updateUser(req.query.userId, req.body).then((users) => {
    return res.json(users);
  });
});

module.exports = router;
