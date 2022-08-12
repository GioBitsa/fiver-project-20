import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginComponent from '../components/LoginComponent/LoginComponent.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'

const Login = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token') && localStorage.getItem('username')) {
            navigate('/dashboard')
        }
    }, [])


    return (
        <>
            <Navbar />
            <LoginComponent />
        </>
    )
}

export default Login