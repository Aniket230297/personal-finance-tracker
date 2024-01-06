import React from 'react';
import './style.css';

function Button({text , btnblue,onClick, disabled}) {
  

  return (
    <div  className={btnblue?'btn-text btn-blue':"btn-text"} onClick={onClick} disabled={disabled}>
         <p>{disabled ? "Loading..." :text}</p>
    </div>
  )
}

export default Button;        