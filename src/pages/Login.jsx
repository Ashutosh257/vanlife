

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../api'
import { showErrorMessage } from '../utils'


const Login = () => {

    const [loginFormData, setLoginFormData] = React.useState({
        email: "",
        password: ""
    })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)


    const location = useLocation()
    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting")
        
        loginUser(loginFormData)
        .then(data => {
                localStorage.setItem("userId", data.id)
                setError(null)
                const redirectTo = location.state?.from?.pathname || "/host"
                navigate(redirectTo, { replace: true })
                window.location.reload()
            })
            .catch(err => setError(err))
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e){
        const { name, value } = e.target
        setLoginFormData((prevForm) => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    const message = location.state?.message || ""
    const errorMessage = error && showErrorMessage(error)

    if(errorMessage){
        setTimeout(() => {
            setError(null)
        }, 3000)
    }
    
    // console.log(location)

    return (
        
            <div className="login-container">
                <h3 className="login-prompt">{message}</h3>
                <h1>Sign in to your account</h1>
                    {errorMessage}
                <form 
                    onSubmit={handleSubmit}
                    className="login-form"
                >
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        onChange={handleChange}
                        placeholder="Email Address" 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={handleChange}
                        placeholder="Password" 
                        required 
                    />

                    <button 
                        className="btn login-btn" 
                        type="submit"
                        disabled={status === "submitting"}
                    >
                        {
                            status === "submitting" 
                            ? "Logging in..." 
                            : "Log in"
                        }
                    </button>
                </form>
            </div>
    )
}

export default Login