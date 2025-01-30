import mongoose from 'mongoose';

const connectDb = async()=>{
    try{
        const dbName = "myDatabase";
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongoDb successfully");
    }
    catch{
        console.log("Failed to connect to mongoDb");
        process.exit(1);
    }
}

export default connectDb;