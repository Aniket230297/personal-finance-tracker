import React from 'react'
import "./style.css";
import Input from '../Input';
import { useState } from 'react';
import Button from '../Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';
import { toast } from 'react-toastify';


function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [loading, setLoading]=useState(false);

  function SignupUsingEmail() {
    if (name !== ""&& email !== ""&& password !== ""&& confirmpassword !== "" ){
      if(password === confirmpassword){
          setLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          toast.success("User Created Successfully!");
          setLoading(false);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmpassword("");
          
          // ...
      })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          toast.error(errorMessage);
          setLoading(false);
          // ..
        })
      }else{toast.error("Password and ConfirmPassword will be same!")
      setLoading(false);}
    }else{
      toast.error("All Fields are Mandatory!");
      setLoading(false);
    }
  }


  return (
    <div className='signupcomponent'>
      <p className='logotitle'>Sign Up on <span style={{ color: 'blue' }}>Financely.</span></p>
      <form>
      <Input text={"Full Name"}
        type="text"
        value={name}
        setValue={setName}
        placeholder={"Joe Doe"} />

      <Input text={"Email"}
        type="email"
        value={email}
        setValue={setEmail}
        placeholder={"Email"} />

      <Input text={"Password"}
        type="password"
        value={password}
        setValue={setPassword}
        placeholder={"password"} />

      <Input text={"Confirm Password"}
        type="password"
        value={confirmpassword}
        setValue={setConfirmpassword}
        placeholder={"Confirm Password"} />

      <Button text={"Sign up using Email and Password"} 
      onClick={SignupUsingEmail}
      disabled={loading} />
      <p className='ortext'>or</p>
      <Button text={"Sign up using Google"} btnblue={true} />
      </form>
    </div>
  )
}

export default SignupComponent;