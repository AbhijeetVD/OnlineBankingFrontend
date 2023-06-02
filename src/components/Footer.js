import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid' 
import '../css/Footer.css'

function Footer() {
  return (
    <footer className="footer">
            <div className="container footer_container">
                <div className="items">
                    <h3>Contact Us</h3>
                    <a href="#"><FontAwesomeIcon icon={faPhone}/> +91 9876543210  </a><br/>
                    <a href="mailto:2266575@cognizant.com" ><FontAwesomeIcon icon={faEnvelope}/> abc@gmail.com  </a><br/>
                </div>
            </div>
        </footer>
  )
}

export default Footer
