import React, { useState } from 'react'
import '../css/NavigationBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

function NavigationBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
    return (
      <nav>
            <div className="container">
                <a href="#"><h3>OnlineBank</h3></a>
                {loggedIn ? (
                <ul className="menu">
                    <li><a href="#"><h4>Accounts</h4></a></li>
                    <li><a href="#"><h4>transactions</h4></a></li>
                    <li><a href="#"><h4></h4></a></li>
                    <li><a href="#"><h4></h4></a></li>
                </ul>
                ) : (
                  <ul className="menu"></ul>
                )
                }
                <ul className="menu">
                  {loggedIn ? (
                    <>
                      <li><a  href=""><FontAwesomeIcon icon={faUserAlt}/></a></li>
                      <li><a href="" onClick={handleLogout}><h4>Logout</h4></a></li>
                    </>
                  ) : (
                    <>
                      <li><a href="#" onClick={handleLogin}><h4>Login</h4></a></li>
                      <li><a href="#"><h4>Register</h4></a></li>
                    </>
                  )}  
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar