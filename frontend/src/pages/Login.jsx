import { signInWithPopup } from 'firebase/auth'
import React from 'react';
import {auth , provider} from '../firebase.js'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const Login = () => {
    const navigate = useNavigate();


    const handleLogin = async() =>{
        const loginResponse = await signInWithPopup(auth, provider) 
        console.log(loginResponse)
        const user = loginResponse.user
        const tokres= loginResponse._tokenResponse
        console.log(tokres)
        const userData = {
            name : tokres.firstName,
            rollNo : tokres.lastName, 
            email: user.email,
            lastSignInTime : user.metadata.lastSignInTime
        }

        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/login`,
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
        alert("Login Successfull !!!")
        navigate('/')
    } 
  return (
    <>
    <Navbar />
    
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            className="h-12 w-auto" 
            src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg" 
            alt="Your Company" 
          />
        </div>
  
        {/* Heading */}
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          Log in to your account
        </h2>
  
        {/* Form */}
        <div className="mt-6 space-y-4">
          <div>
          
          </div>
  
          {/* Sign-in Button */}
          <button 
            type="button" 
            onClick={handleLogin}  
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Login