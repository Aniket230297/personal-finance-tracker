import React from 'react';
import "./style.css";
import Input from '../Input';
import { useState } from 'react';

function SigninSignup() {
  const [name, setName]=useState("");

  return (
    <div className='signup-container'>
        <p className='title'>Sign Up on <span style={{color:"blue"}}>financely.</span></p>
        <Input text={"Full Name"}
          value={name}
          placeholder={"Jhon Doe"}
         />
    </div>
  )
}

export default SigninSignup;