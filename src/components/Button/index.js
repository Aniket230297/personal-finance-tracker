import React from 'react';
import './style.css';

function Button({text , btnblue}) {
  return (
    <div  className={btnblue?'btn-text btn-blue':"btn-text"}>
         <p>{text}</p>
    </div>
  )
}

export default Button;        