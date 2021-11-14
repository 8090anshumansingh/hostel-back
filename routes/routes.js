import express from "express";
const router = express.Router();

import { registerUser, loginUser,getname,complaintUser,getAllComplaints } from "../controllers/user.controllers.js";

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post("/getname", getname);
router.post("/user/complaint", complaintUser);
router.get("/getAllComplaints", getAllComplaints);


export default router;