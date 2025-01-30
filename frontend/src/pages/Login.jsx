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
    <div>
        <h1>Microsoft auth</h1>
    <button onClick={handleLogin} type="button">Login with microsoft</button>

    </div>
  )
}

export default Login