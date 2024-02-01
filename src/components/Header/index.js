import React, { useEffect } from 'react';
import "./style.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

function Header() {
  const [user,loading] = useAuthState(auth);
  const Navigate=useNavigate();

  useEffect(()=>{
    if(user){
      Navigate("/dashboard");
    }
  }, [user, loading,Navigate])

  function logofunc(){
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success("Sign-out successfully!");
      Navigate("/");
    }).catch((error) => {
      // An error happened.
      toast.error("signout successfully!");
    });
  }

  return (
    <div className='header-wrapper'>
        <p className='logo'>Financely.</p>
        {user && <p className="logout" onClick={logofunc}>Logout</p>}
    </div>
  )
}

export default Header;