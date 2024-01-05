import React from 'react'
import Header from '../Header';
import SignupComponent from '../SignupComponent';


function Signup() {
  return (
    <div>
      <Header />
      <div className='signup-signin-container'>
        <SignupComponent />
      </div>
    </div>
  )
}

export default Signup;