import User from "../models/User.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const userVerification = (req, res, next) => {
    try {
        const token = req.cookies.access_token;

        if (!token || token === "null") {
            return res.json({ status: false, message: "Token is null or missing" });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ status: false, message: "Invalid Token" });
            }

            req.user = decoded;
            next(); 
        });

    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
};

export default userVerification;