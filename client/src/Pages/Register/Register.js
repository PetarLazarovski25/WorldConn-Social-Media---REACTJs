import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className="Register">
            <div className="RegisterWrapper">
                <div className="RegisterLeft">
                    <h3 className="RegisterLogo">WorldConn</h3>
                    <span className="RegisterDescription">Connect with your friends and people from all around the world.</span>
                </div>
                <div className="RegisterRight">
                    <div className="RegisterBox">
                        <input className="RegisterInput" placeholder="Username" />
                        <input className="RegisterInput" placeholder="Email" />
                        <input className="RegisterInput" placeholder="Password" />
                        <input className="RegisterInput" placeholder="Confirm Password" />
                        <button className="RegisterButton">Sign Up</button>
                        <button className="RegisterRegister">Login Into Your Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register
