import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import '../css/MainPage.css'

function MainPage() {
  return (
    <>
    <NavigationBar/>
    <div className='mainpage'>
      <div className='title'>
        <h1>Welcome to OnlineBank</h1>
      </div>
      <div className='desc'>
        <h2>We provide our customers with the services that make their life easy.</h2>
      </div>
      <div className='details'>
        <div className='lines'>
          <h3>Transfer Money</h3>
          <p>Send or receive money easily with our OnlineBank 'Transfer Money' Option. This is safe and secure. This is also easy as it only takes a few clicks and internet connectivity. You can instantly transfer money anytime anywhere.</p>
        </div>
        <div className='lines'>
          <h3>Authentication</h3>
          <p>Everytime you login we have setup a great authentication system to avoid frauds. This helps us keep your data and money secure and safe from any danger. We provide this level of security for our customers and make them feel safe in our system.</p>
        </div>
      </div>
      <div className='details'>
        <div className='lines'>
          <h3>Transaction</h3>
          <p>You can view all the transactions that have been done by your account. You can also view the date of each transaction, this is used to keep track of how much you spend and how much you save that helps to better your life with your money. Our banking system helps users to save money by being aware of how they are spending their money.</p>
        </div>          
        <div className='lines'>
          <h3>Profile/Account</h3>
          <p>In this service you can view your account balance and all your details. The account id, username, e-mail, full name and everything that is provided by the user can be viewed and changes can be made. You can also see the different types of account a user has and other peoples account who you can send money or receive money from.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default MainPage 