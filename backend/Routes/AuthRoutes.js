import express from 'express';
import { getUser, Login, Logout } from '../controllers/AuthController.js';
import userVerification from '../middleware/AuthProtect.js';


const router = express.Router();

router.get("/verify", userVerification , (req,res) => {
    try {
      
        res.status(200).json({ success: true, message : "Successfully logged in" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error });
    } 
});
router.post("/login",Login)
router.post("/logout",Logout)
router.get("/get-user",getUser)

export default router
