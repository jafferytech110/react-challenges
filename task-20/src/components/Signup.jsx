import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {AiFillCreditCard} from 'react-icons/ai'
import {VscGistSecret} from 'react-icons/vsc'
import {GrValidate} from 'react-icons/gr'
import validate from './ValidateInfo'

import useForm from './useForm'

const Signup = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(validate, submitForm)

  return (
    <>
      <h1>Sign up</h1>
  <form className='form' onSubmit={handleSubmit}>
    {/* account */}
    <div className='form-account'>
      <h2>Account</h2>
      <div className="form-account-items">
        <div>
        <label htmlFor="fullName"><FaUserAlt /></label>
        <input type="text" name='fullname' placeholder='Full Name' value={values.fullname} onChange={handleChange} />
        </div>
        {errors.fullname && <p>{errors.fullname}</p>}
        <div>
        <label htmlFor="email"><MdEmail /></label>
        <input type="email" name='email' placeholder='Email Address' value={values.email} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="password"><RiLockPasswordFill /></label>
        <input type="password" name='password' placeholder='Password' value={values.password} onChange={handleChange} />
        </div>
        {errors.password && <p>{errors.password}</p>}
      </div>
    </div>  
    {/* date of birth & Gender */}
    <div className="date-gender">
      <div className="birthdate">
        <h2>Date of Birth</h2>
        <input type="text" placeholder='DD' name='date' value={values.date} onChange={handleChange} />
        <input type="text" placeholder='MM' name='month' value={values.month} onChange={handleChange} />
        <input type="text" placeholder='YYYY' name='year' value={values.year} onChange={handleChange} />
      </div>
      {errors.date && <p>{errors.date}</p>}
      <div className="gender">
        <h2>Gender</h2>
        <div>
        <div>
        <input type="radio" name='gender' value="Male" id='male' onChange={handleChange}/>
        <label htmlFor='male'>Male</label>
        </div>
        <div>
        <input type="radio" name='gender' value="Female" id='female' onChange={handleChange}/>
        <label htmlFor="female">Female</label>
        </div>
        </div>
      </div>
      {errors.gender && <p>{errors.gender}</p>}
    </div>

    {/* payment */}
    <div className="payment">
      <h2>Payment Details</h2>
        <div className="payment-detail">
          <input type="radio" name='paymentMethod' value="creaitCard" id='creditCard' onChange={handleChange}/>
          <label htmlFor='creditCard'>Credit Card</label>
          <input type="radio" name='paymentMethod' value="paypal" id='paypal' onChange={handleChange} />
          <label htmlFor="paypal">Paypal</label>
        </div>
        {errors.paymentMethod && <p>{errors.paymentMethod}</p>}
        <div className="payment-card-detail">
          <div>
            <label htmlFor="cardNumber"><AiFillCreditCard /></label>
            <input type="text" name='cardNumber' id='cardNumber' placeholder='Card Number' value={values.cardNumber} onChange={handleChange} />
          </div>
          <div>
            <div>
              <label htmlFor="cvc"><VscGistSecret /></label>
              <input type="text" name='cvc' id='cvc' placeholder='Card CVC' value={values.cvc} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="cardExpiry"><GrValidate /></label>
              <input type="text" name='cardExpiry' id='cardExpiry' placeholder='MM/YY' value={values.cardExpiry} onChange={handleChange} />
            </div>
          </div>
          {errors.cardExpiry && <p>{errors.cardExpiry}</p>}
        </div>
    </div>
    <button type='submit'>Submit</button>
  </form>  
    </>
  )
}

export default Signup