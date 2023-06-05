import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import '../css/LoginPage.css'

function LoginPage() {
  return (
    <div>
      <NavigationBar/>
      <form action="/login" method="post">
    <div class="userdata">
                <h1>Login</h1>
                <div className="txt">
                    <input type="text" id="username" required/>
                    <span></span>
                    <label for="username">Username</label>
                </div>
                <div className="txt">
                    <input type="password" id="password" required/>
                    <span></span>
                    <label for="password">Password</label>
                </div>
                <button id="login" value="Login">Login</button>
                <div className="member">
                    <p>New Here? <a href="#">Register</a></p>
                </div>
        </div>
</form>
    <Footer/>
    </div>
  )
}

export default LoginPage
