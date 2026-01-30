const express = require("express");
const authController = require("../controllers/auth.controller");
const authenticate = require("../middlewares/auth.middleware");


const router = express.Router();

router.post("/register", authController.register);

router.get("/me", authenticate, (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
});


router.post("/login", authController.login);

module.exports = router;
