import React from 'react'
import Header from '../Header';
import SigninSignup from '../SigninSignup';

function Signup() {
  return (
    <div>
      <Header />
      <div className='signupsignincontainer'>
          <SigninSignup />
      </div>
    </div>
  )
}

export default Signup;