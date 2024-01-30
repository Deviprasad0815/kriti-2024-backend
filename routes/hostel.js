const express = require("express");
const router = express.Router();

const {login,verifyToken} =require("../controller/jwt.js");
const {psRegister,getHostel, findPS} = require("../controller/hostel.js");

router.post("/login",login);
router.post("/psRegister",verifyToken,psRegister);
router.post("/find",verifyToken,findPS);
router.get("/getHostel",verifyToken,getHostel);
module.exports= router;