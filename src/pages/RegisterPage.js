import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import '../css/RegisterPage.css'

function RegisterPage() {
  return (
    <>
      <NavigationBar/>
      <form action="/register" method="post">
    <div className="registeruser">
        <h1>Register</h1>
        <div className="txt">
                    <input type="text" id="name" required/>
                    <span></span>
                    <label for="name">Fullname</label>
                </div>
                <div className="txt">
                    <input type="text" id="user" required/>
                    <span></span>
                    <label for="user">Username</label>
                </div>
                <div className="txt">
                    <input type="text" id="email" required/>
                    <span></span>
                    <label for="email">E-mail</label>
                </div>
                <div className="txt">
                    <input type="password" id="password" required/>
                    <span></span>
                    <label for="password">Password</label>
                </div>
                <div className="txt">
                    <input type="password" id="conpassword" required/>
                    <span></span>
                    <label for="conpassword">Confirm Password</label>
                </div>
                <button id="register" value="Sign Up">Sign Up</button>
                <div className="member">
                    <p>Already a member? <a href="#">Login</a></p>
                </div>
        </div>
    </form>
    <Footer/>
    </>
  )
}

export default RegisterPage
