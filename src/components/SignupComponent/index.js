import React from 'react'
import "./style.css";
import Input from '../Input';
import { useState } from 'react';
import Button from '../Button';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setDoc } from '../Firebase';
import { doc } from '../Firebase';
import { db } from '../Firebase';
import { getDoc } from 'firebase/firestore';
import { signInWithPopup } from 'firebase/auth';
import { provider } from '../Firebase';
import { GoogleAuthProvider } from 'firebase/auth';
 

function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginform, setLoginform] = useState(false);
  const navigate = useNavigate();

  function SignupUsingEmail() {
    if (name !== "" && email !== "" && password !== "" && confirmpassword !== "") {
      if (password === confirmpassword) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            toast.success("User Created Successfully!");
            createDoc(user);
            navigate("/dashboard");
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
      } else {
        toast.error("Password and ConfirmPassword will be same!")
        setLoading(false);
      }
    } else {
      toast.error("All Fields are Mandatory!");
      setLoading(false);
    }
  }

  async function createDoc(user) {
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    const userData= await getDoc(userRef);
    
    if(!userData.exists()){

    try {
      await setDoc(doc(db, "users", user.uid), {
        name: user.DisplayName ? user.DisplayName: name ,
        email: user.email,
        PhotoURL: user.PhotoURL? user.PhotoURL:"",
        createdAt: new Date()
      }
      )
    } catch (e) {
      toast.error(e.message);
    }

  }else(
    toast.error("User Already Exist")
  )
  }

  function LoginUsingEmail() {
    if (email !== "" && password !== "") {
      console.log("email", email);
      console.log("password", password);
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          toast.success("Signin sucessfully!")
          setLoading(false);
          navigate("/dashboard");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          setLoading(false);
        })

    } else {
      toast.error("All Fields Are Mandatory!");
      setLoading(false);
    }

  }

  function googleAuth(){
    signInWithPopup(auth, provider)
  .then((result) => {
    setLoading(true);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)

    createDoc(user);
    toast.success("user Sign in Successfully!")
    setLoading(false);
    navigate("/dashboard");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    setLoading(false);
    toast.error(errorMessage);
    // ...
  });
  }

  return (
    <>
      {(loginform) ? (<div className='signupcomponent'>
        <p className='logotitle'>Login on <span style={{ color: 'blue' }}>Financely.</span></p>
        <form>

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

          <Button text={"Login using Email and Password"}
            onClick={LoginUsingEmail}
            disabled={loading} />
          <p className='ortext'>or</p>
          <Button text={"Login using Google"} btnblue={true} onClick={googleAuth}/>
          <p className='p-tag' onClick={() => { setLoginform(!loginform) }}>or Dont Have an Account? Click Here!</p>
        </form>
      </div>
      ) : (
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
            <Button text={"Sign up using Google"} btnblue={true}  onClick={googleAuth}/>
            <p className='p-tag' onClick={() => { setLoginform(!loginform) }}>or Have an Account Already? Click Here!</p>
          </form>
        </div>
      )
      } </>
  )
}


export default SignupComponent;