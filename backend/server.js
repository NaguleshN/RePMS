import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cors from 'cors';
import router from './Routes/AuthRoutes.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import fs from 'fs';
import applyRoute from './Routes/ApplyRoute.js';
import multer from 'multer';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:3000","http://localhost:3001"],
    credentials:true
}
))

// const uploadDir = path.resolve("uploads");
// console.log(uploadDir)
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true }); 
// }



app.use("/api/forms",  applyRoute)

app.use("/api/auth",router)

dotenv.config();

connectDb();


app.listen(PORT,()=>{
    console.log(`Successfully connected to port ${PORT}`)
})

app.get("/",(req,res)=>{
    res.status(200).send("Hello");
})

// app.post()