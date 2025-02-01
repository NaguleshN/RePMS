import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const Login = async (req,res) =>{ 
    try {
        const {name, email, phoneNumber, avatar} =req.body;
        let user
        user = await User.findOne({email})
        if(!user){
            const newUser = new User({
                name, email, phoneNumber, avatar
            })
            user= await newUser.save()
        }

        user =user.toObject({getters:true})
        const token = jwt.sign(user,process.env.JWT_SECRET)
        res.cookie('access_token' , token,{
            httpOnly:true
        })
        res.status(200).json({
            success : true,
            message : "User Loggedin successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
            error
        })
    }
}
export const getUser = async (req,res) =>{ 
    try {
        
        const token = req.cookies.access_token
        if(!token){
            return res.status(403).json({
                success : false,
                message : "Token not found "
            })
        }
        const user = jwt.verify(token, process.env.JWT_SECRET)

        res.status(200).json({
            success : true,
            user
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
            error
        })
    }
}

export const Logout = async (req, res) => {
    try {
        // Clear the authentication token from cookies
        res.clearCookie('access_token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Secure in production
            sameSite: 'Strict', // Prevent CSRF
            path: '/', // Specify path for clearing cookie
        });

        res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });

    } catch (error) {
        console.error('Logout Error:', error); // Log error to the server for debugging
        res.status(500).json({
            success: false,
            message: "Something went wrong during logout.",
            error: error.message
        });
    }
};
