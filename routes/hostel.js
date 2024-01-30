const express = require("express");
const router = express.Router();

const {login,verifyToken} =require("../controller/jwt.js");
const {psRegister,getHostel} = require("../controller/hostel.js");

router.post("/login",login);
router.post("/psRegister",verifyToken,psRegister);
router.get("/getHostel",verifyToken,getHostel);

module.exports= router;