import React from 'react';
import './style.css';

function Input({ text, value, setValue, placeholder }) {
  return (
    <div className='inputContainer'>
      <p className='label'>{text}</p>
      <input className='custom-input' value={value}
        onChange={(e) => { setValue(e.target.value) }} placeholder={placeholder} />
    </div>
  )
}

export default Input