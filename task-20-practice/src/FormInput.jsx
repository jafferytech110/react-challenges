import React from 'react'
import { useState } from 'react'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, onChange, id, errorMessage, ...otherProps} = props
  return (
    <div className='form-input'>
        <label htmlFor={props.name}>{label}</label>
        <input {...otherProps} onChange={onChange} onBlur={()=>setFocused(true)} focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput