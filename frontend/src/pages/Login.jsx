import { signInWithPopup } from 'firebase/auth'
import React from 'react';
import {auth , provider} from '../firebase.js'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async() =>{
        const loginResponse = await signInWithPopup(auth, provider) 
        console.log(loginResponse)
        const user = loginResponse.user
        const userData = {
            name : user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            avatar: user.photoURL,
        }

        const response = await fetch("http://localhost:5000/api/auth/login",
            {
                method:"POST",
                credentials:"include",
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(userData)
            }
        )
        const data = await response.json()
        if(!response.ok){
            alert(data.message)
        }
        navigate('/')
    } 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Login to our website</h1>
      <button 
        className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleLogin} 
        type="button">
        Login with Microsoft
      </button>
    </div>
  </div>
  
  )
}

export default Login