import React from 'react'
import "./style.css";
import Input from '../Input';
import { useState } from 'react';
import Button from '../Button';


function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");


  return (
    <div className='signupcomponent'>
      <p className='logotitle'>Sign Up on <span style={{ color: 'blue' }}>Financely.</span></p>
      <Input text={"Full Name"}
        value={name}
        setValue={setName}
        placeholder={"Joe Doe"} />

      <Input text={"Email"}
        value={email}
        setValue={setEmail}
        placeholder={"Email"} />

      <Input text={"Password"}
        value={password}
        setValue={setPassword}
        placeholder={"password"} />

      <Input text={"Confirm Password"}
        value={confirmpassword}
        setValue={setConfirmpassword}
        placeholder={"Confirm Password"} />

        <Button  text={"Sign up using Email and Password"}/>
        <p className='ortext'>or</p>
        <Button text={"Sign up using Google"} btnblue={true}/>

    </div>
  )
}

export default SignupComponent;