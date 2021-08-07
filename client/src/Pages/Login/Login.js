import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="Login">
            <div className="LoginWrapper">
                <div className="LoginLeft">
                    <h3 className="LoginLogo">WorldConn</h3>
                    <span className="LoginDescription">Connect with your friends and people from all around the world.</span>
                </div>
                <div className="LoginRight">
                    <div className="LoginBox">
                        <input className="LoginInput" placeholder="Email" />
                        <input className="LoginInput" placeholder="Password" />
                        <button className="LoginButton">Log in</button>
                        <span className="LoginForgot"><a href="#">Forgot Password?</a></span>
                        <button className="LoginRegister">Create An Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
