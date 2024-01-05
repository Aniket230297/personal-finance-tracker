import React from 'react'
import "./style.css";

function Input(text, value, setValue , placeholder) {
  return (
    <div>
        <p className='input-tag'>{text}</p>
        <input className='custom-tag' value={value}
         onChange={(e)=>setValue(e.target.value)} placeholder={placeholder}  />
    </div>
  )
}

export default Input;