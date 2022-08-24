import React from 'react'
import { useState } from 'react'

const FormInputs = () => {

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()

  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
        <div>
        <input type="text" placeholder='First name' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <input type="text" placeholder='Last name' value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />    
        </div>   
        <div>
        <button type='submit'>Subscribe</button> 
        </div>
    </form>
  )
}

export default FormInputs