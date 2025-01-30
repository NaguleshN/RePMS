import express from 'express';
import { getUser, Login } from '../controllers/AuthController.js';


const router = express.Router();

router.post("/login",Login)
router.get("/get-user",getUser)

export default router
