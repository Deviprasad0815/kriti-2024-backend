const express = require("express");
const router = express.Router();

const {login,verifyToken} =require("../controller/jwt.js");

router.post("/login",login);
router.post("/verify",verifyToken);

module.exports= router;